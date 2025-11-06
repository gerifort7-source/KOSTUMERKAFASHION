// Telegram Bot Integration for КОСТЮМЕРКА
// Отправка заявок на примерку в Telegram

// ВАЖНО: Замените эти значения на ваши настоящие
const TELEGRAM_CONFIG = {
    botToken: '8580735762:AAHjQ9u46k_U6tOSDbBc8K_05O2sF8Ij9ZA', // Получите у @BotFather    chatId: 'YOUR_CHAT_ID_HERE' // Chat ID для @irina_fashionstyle
};

/**
 * Отправка сообщения в Telegram через Bot API
 * @param {string} message - Текст сообщения
 * @returns {Promise<boolean>} - Успешность отправки
 */
async function sendToTelegram(message) {
    try {
        const url = `https://api.telegram.org/bot${TELEGRAM_CONFIG.botToken}/sendMessage`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CONFIG.chatId,
                text: message,
                parse_mode: 'HTML'
            })
        });

        const data = await response.json();
        
        if (!response.ok) {
            console.error('Telegram API Error:', data);
            return false;
        }
        
        return data.ok;
    } catch (error) {
        console.error('Error sending to Telegram:', error);
        return false;
    }
}

/**
 * Форматирование заявки на примерку для отправки в Telegram
 * @param {Object} appointmentData - Данные заявки
 * @returns {string} - Форматированное сообщение
 */
function formatFittingAppointment(appointmentData) {
    const { products, date, time, customer } = appointmentData;
    
    let message = '🎀 <b>НОВАЯ ЗАЯВКА НА ПРИМЕРКУ</b> 🎀\n\n';
    
    // Информация о клиенте
    message += '👤 <b>Клиент:</b>\n';
    message += `   Имя: ${customer.name}\n`;
    message += `   Телефон: ${customer.phone}\n`;
    if (customer.comments) {
        message += `   Комментарии: ${customer.comments}\n`;
    }
    message += '\n';
    
    // Дата и время примерки
    message += '📅 <b>Дата и время:</b>\n';
    message += `   Дата: ${new Date(date).toLocaleDateString('ru-RU')}\n`;
    message += `   Время: ${time}\n`;
    message += '\n';
    
    // Список товаров для примерки
    message += '👗 <b>Товары для примерки:</b>\n';
    products.forEach((product, index) => {
        message += `   ${index + 1}. ${product.name}\n`;
        message += `      Категория: ${product.category}\n`;
        message += `      Цена: ${product.price}\n`;
    });
    
    message += '\n';
    message += `⏰ Заявка создана: ${new Date().toLocaleString('ru-RU')}`;
    
    return message;
}

/**
 * Отправка заявки на примерку в Telegram
 * @param {Object} appointmentData - Данные заявки
 * @returns {Promise<boolean>} - Успешность отправки
 */
async function sendFittingAppointment(appointmentData) {
    const message = formatFittingAppointment(appointmentData);
    return await sendToTelegram(message);
}

// Экспорт функций для использования в app.js
window.TelegramBot = {
    sendFittingAppointment,
    sendToTelegram
};
