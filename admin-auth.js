// Admin Authentication System for KOSTUMERKA
const ADMIN_CONFIG = {
    // SHA256('admin123')
    passwordHash: 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f',
    sessionDuration: 24 * 60 * 60 * 1000,
    storageKey: 'kostumerka_admin_session'
};

async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
async function verifyAdminPassword(password) {
    const inputHash = await sha256(password);
    return inputHash === ADMIN_CONFIG.passwordHash;
}
function createAdminSession() {
    const session = {
        authenticated: true,
        timestamp: Date.now(),
        expiresAt: Date.now() + ADMIN_CONFIG.sessionDuration
    };
    localStorage.setItem(ADMIN_CONFIG.storageKey, JSON.stringify(session));
}
function checkAdminSession() {
    try {
        const sessionData = localStorage.getItem(ADMIN_CONFIG.storageKey);
        if (!sessionData) return false;
        const session = JSON.parse(sessionData);
        if (Date.now() > session.expiresAt) {
            clearAdminSession();
            return false;
        }
        return session.authenticated === true;
    } catch (e) {
        return false;
    }
}
function clearAdminSession() {
    localStorage.removeItem(ADMIN_CONFIG.storageKey);
}
function showAdminLoginForm() {
    const loginHTML = `
        <div class="admin-login-overlay" id="admin-login-overlay">
            <div class="admin-login-modal">
                <div class="admin-login-header">
                    <h2>🔐 Вход в Админ-панель</h2>
                    <p>КОСТЮМЕРКА | Только для администратора</p>
                </div>
                <form id="admin-login-form" class="admin-login-form">
                    <div class="form-group">
                        <label for="admin-password">Пароль администратора:</label>
                        <input type="password" id="admin-password" required autocomplete="current-password">
                    </div>
                    <div id="admin-error-message" class="error-message" style="display: none;"></div>
                    <button type="submit" class="btn-login">Войти</button>
                </form>
                <div class="admin-login-footer">
                    <p>⚠️ Доступ только для администратора сайта</p>
                </div>
            </div>
        </div>
        <style>
        .admin-login-overlay { position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.85);display:flex;justify-content:center;align-items:center;z-index:99999;backdrop-filter: blur(8px);}
        .admin-login-modal {background: #fff;padding:0;border-radius:16px;box-shadow:0 4px 32px rgba(0,0,0,0.15);max-width:420px;width:90%;overflow:hidden;}
        .admin-login-header {padding:28px;text-align:center;color:#222;}
        .admin-login-header h2 {margin:0 0 10px 0;font-size:23px;font-weight:700;}
        .admin-login-header p {margin:0;opacity:0.8;}
        .admin-login-form {padding:35px;background:#faf9fd;}
        .form-group {margin-bottom:18px;}
        .form-group label {margin-bottom:8px;font-size:15px;}
        .form-group input {width:100%;padding:11px 13px;border:2px solid #d1d7e0;border-radius:8px;font-size:17px;}
        .form-group input:focus {outline:none;border-color:#667eea;}
        .error-message {background:#fee;color:#c33;padding:10px;border-radius:8px;margin-bottom:12px;font-size:14px;border-left:4px solid #c33;}
        .btn-login {width:100%;padding:14px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;border:none;border-radius:8px;font-size:16px;font-weight:600;}
        .btn-login:hover {box-shadow:0 0 10px #667eea44;}
        .admin-login-footer {padding:14px;text-align:center;background: #faf9fd;color:#666;font-size:12px;}
        .admin-login-footer p {margin:0;opacity:.9;}
        </style>
    `;
    document.body.insertAdjacentHTML('beforeend', loginHTML);
    document.getElementById('admin-login-form').addEventListener('submit', async function(e){
        e.preventDefault();
        const password = document.getElementById('admin-password').value;
        const errorMessage = document.getElementById('admin-error-message');
        const isValid = await verifyAdminPassword(password);
        if (isValid) {
            createAdminSession();
            document.getElementById('admin-login-overlay').remove();
            document.getElementById('admin-content').style.display = "block";
        } else {
            errorMessage.textContent = '❌ Неверный пароль';
            errorMessage.style.display = 'block';
            document.getElementById('admin-password').value = '';
            document.getElementById('admin-password').focus();
        }
    });
}
function initAdminAuth() {
    // Всегда скрываем содержимое панели до авторизации!
    const adminBlock = document.getElementById('admin-content');
    if (adminBlock) adminBlock.style.display = "none";
    if (!checkAdminSession()) {
        showAdminLoginForm();
        return false;
    }
    if (adminBlock) adminBlock.style.display = "block";
    return true;
}
function adminLogout() {
    clearAdminSession();
    if(document.getElementById('admin-content')) document.getElementById('admin-content').style.display = "none";
    location.reload();
}
window.AdminAuth = {
    init: initAdminAuth,
    logout: adminLogout,
    checkSession: checkAdminSession,
    verifyPassword: verifyAdminPassword,
    createSession: createAdminSession
};
