// Admin Authentication System for КОСТЮМЕРКА
// Защита админ-панели паролем

const ADMIN_CONFIG = {
    // ВАЖНО: Замените этот пароль на свой собственный!
    // Для генерации хеша используйте: https://emn178.github.io/online-tools/sha256.html
    passwordHash: 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f', // По умолчанию: 'admin123'
    sessionDuration: 24 * 60 * 60 * 1000, // 24 часа в миллисекундах
    storageKey: 'kostumerka_admin_session'
};

/**
 * Генерация SHA-256 хеша
 * @param {string} message - Строка для хеширования
 * @returns {Promise<string>} - Хеш строки
 */
async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

/**
 * Проверка пароля администратора
 * @param {string} password - Введенный пароль
 * @returns {Promise<boolean>} - Результат проверки
 */
async function verifyAdminPassword(password) {
    const inputHash = await sha256(password);
    return inputHash === ADMIN_CONFIG.passwordHash;
}

/**
 * Создание сессии администратора
 */
function createAdminSession() {
    const session = {
        authenticated: true,
        timestamp: Date.now(),
        expiresAt: Date.now() + ADMIN_CONFIG.sessionDuration
    };
    localStorage.setItem(ADMIN_CONFIG.storageKey, JSON.stringify(session));
}

/**
 * Проверка активной сессии администратора
 * @returns {boolean} - Активна ли сессия
 */
function checkAdminSession() {
    try {
        const sessionData = localStorage.getItem(ADMIN_CONFIG.storageKey);
        if (!sessionData) return false;

        const session = JSON.parse(sessionData);
        
        // Проверка срока действия сессии
        if (Date.now() > session.expiresAt) {
            clearAdminSession();
            return false;
        }

        return session.authenticated === true;
    } catch (error) {
        console.error('Ошибка проверки сессии:', error);
        return false;
    }
}

/**
 * Удаление сессии администратора (выход)
 */
function clearAdminSession() {
    localStorage.removeItem(ADMIN_CONFIG.storageKey);
}

/**
 * Отображение формы входа для администратора
 */
function showAdminLoginForm() {
    const loginHTML = `
        <div class="admin-login-overlay" id="admin-login-overlay">
            <div class="admin-login-modal">
                <div class="admin-login-header">
                    <h2>🔐 Вход в Админ-панель</h2>
                    <p>КОСТЮМЕРКА | Панель Администратора</p>
                </div>
                <form id="admin-login-form" class="admin-login-form">
                    <div class="form-group">
                        <label for="admin-password">Пароль администратора:</label>
                        <input 
                            type="password" 
                            id="admin-password" 
                            placeholder="Введите пароль"
                            required
                            autocomplete="current-password"
                        >
                    </div>
                    <div id="admin-error-message" class="error-message" style="display: none;"></div>
                    <button type="submit" class="btn-login">Войти</button>
                </form>
                <div class="admin-login-footer">
                    <p>⚠️ Доступ только для администраторов сайта</p>
                </div>
            </div>
        </div>
    `;

    // Добавление стилей для формы входа
    const styleHTML = `
        <style>
            .admin-login-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.85);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 99999;
                backdrop-filter: blur(10px);
            }

            .admin-login-modal {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 0;
                border-radius: 20px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                max-width: 450px;
                width: 90%;
                overflow: hidden;
            }

            .admin-login-header {
                background: rgba(255, 255, 255, 0.1);
                padding: 30px;
                text-align: center;
                color: white;
            }

            .admin-login-header h2 {
                margin: 0 0 10px 0;
                font-size: 28px;
                font-weight: 700;
            }

            .admin-login-header p {
                margin: 0;
                opacity: 0.9;
                font-size: 16px;
            }

            .admin-login-form {
                padding: 40px;
                background: white;
            }

            .form-group {
                margin-bottom: 20px;
            }

            .form-group label {
                display: block;
                margin-bottom: 8px;
                color: #333;
                font-weight: 600;
                font-size: 14px;
            }

            .form-group input {
                width: 100%;
                padding: 12px 15px;
                border: 2px solid #e1e8ed;
                border-radius: 8px;
                font-size: 16px;
                transition: all 0.3s ease;
                box-sizing: border-box;
            }

            .form-group input:focus {
                outline: none;
                border-color: #667eea;
                box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
            }

            .error-message {
                background: #fee;
                color: #c33;
                padding: 12px;
                border-radius: 8px;
                margin-bottom: 15px;
                font-size: 14px;
                border-left: 4px solid #c33;
            }

            .btn-login {
                width: 100%;
                padding: 14px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: none;
                border-radius: 8px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .btn-login:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
            }

            .btn-login:active {
                transform: translateY(0);
            }

            .admin-login-footer {
                padding: 20px;
                text-align: center;
                background: rgba(255, 255, 255, 0.1);
                color: white;
                font-size: 13px;
            }

            .admin-login-footer p {
                margin: 0;
                opacity: 0.9;
            }
        </style>
    `;

    // Добавление формы на страницу
    document.body.insertAdjacentHTML('beforeend', styleHTML + loginHTML);

    // Обработчик отправки формы
    document.getElementById('admin-login-form').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const password = document.getElementById('admin-password').value;
        const errorMessage = document.getElementById('admin-error-message');
        
        // Проверка пароля
        const isValid = await verifyAdminPassword(password);
        
        if (isValid) {
            createAdminSession();
            document.getElementById('admin-login-overlay').remove();
            // Перезагрузка страницы для отображения админ-панели
            window.location.reload();
        } else {
            errorMessage.textContent = '❌ Неверный пароль. Попробуйте еще раз.';
            errorMessage.style.display = 'block';
            document.getElementById('admin-password').value = '';
            document.getElementById('admin-password').focus();
        }
    });

    // Фокус на поле ввода пароля
    setTimeout(() => {
        document.getElementById('admin-password').focus();
    }, 100);
}

/**
 * Инициализация защиты админ-панели
 * Вызовите эту функцию на странице админ-панели
 */
function initAdminAuth() {
    // Проверка текущей сессии
    if (!checkAdminSession()) {
        // Скрыть содержимое админ-панели
        document.body.style.display = 'none';
        // Показать форму входа
        showAdminLoginForm();
        return false;
    }
    return true;
}

/**
 * Кнопка выхода из админ-панели
 */
function adminLogout() {
    if (confirm('Вы уверены, что хотите выйти из админ-панели?')) {
        clearAdminSession();
        window.location.reload();
    }
}

// Экспорт функций для использования на других страницах
window.AdminAuth = {
    init: initAdminAuth,
    logout: adminLogout,
    checkSession: checkAdminSession,
    verifyPassword: verifyAdminPassword,
    createSession: createAdminSession
};
