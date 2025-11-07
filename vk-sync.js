// VK Market Synchronization for КОСТЮМЕРКА
// Синхронизация товаров из VK на сайт

// ВАЖНО: Замените эти значения на ваши данные!
const VK_CONFIG = {
    accessToken: 'YOUR_VK_ACCESS_TOKEN',  // Получите на https://vk.com/apps?act=manage
    groupId: 'YOUR_GROUP_ID',              // ID группы/сообщества VK
    apiVersion: '5.131',
    syncInterval: 30 * 60 * 1000          // Синхронизация каждые 30 минут
};

/**
 * Получение товаров из VK Market
 */
async function getVKProducts() {
    const url = `https://api.vk.com/method/market.get?owner_id=-${VK_CONFIG.groupId}&count=200&v=${VK_CONFIG.apiVersion}&access_token=${VK_CONFIG.accessToken}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.error) {
            console.error('VK API Error:', data.error);
            return [];
        }
        
        return data.response.items || [];
    } catch (error) {
        console.error('Error fetching VK products:', error);
        return [];
    }
}

/**
 * Конвертация товара VK в формат сайта
 */
function convertVKProduct(vkProduct) {
    return {
        id: `vk_${vkProduct.id}`,
        name: vkProduct.title,
        description: vkProduct.description || '',
        price: `${vkProduct.price.amount / 100} ₽`,
        category: 'ВЕРХНЯЯ ОДЕЖДА',  // Можно настроить автоопределение
        images: vkProduct.photos ? vkProduct.photos.map(p => p.orig_photo.url) : [],
        vkUrl: `https://vk.com/market-${VK_CONFIG.groupId}?w=product-${VK_CONFIG.groupId}_${vkProduct.id}`,
        availability: vkProduct.availability === 0 ? 'available' : 'unavailable',
        lastSync: new Date().toISOString()
    };
}

/**
 * Синхронизация товаров
 */
async function syncVKProducts() {
    console.log('🔄 Начало синхронизации с VK...');
    
    const vkProducts = await getVKProducts();
    
    if (vkProducts.length === 0) {
        console.log('⚠️ Товары не найдены');
        return;
    }
    
    const convertedProducts = vkProducts.map(convertVKProduct);
    
    console.log(`✅ Загружено ${convertedProducts.length} товаров из VK`);
    
    // Сохранение в localStorage для демонстрации
    localStorage.setItem('vk_synced_products', JSON.stringify(convertedProducts));
    localStorage.setItem('vk_last_sync', new Date().toISOString());
    
    return convertedProducts;
}

/**
 * Инициализация автоматической синхронизации
 */
function initVKSync() {
    if (!VK_CONFIG.accessToken || VK_CONFIG.accessToken === 'YOUR_VK_ACCESS_TOKEN') {
        console.warn('⚠️ Не настроен VK Access Token. См. VK_SYNC_SETUP.md');
        return;
    }
    
    // Первоначальная синхронизация
    syncVKProducts();
    
    // Периодическая синхронизация
    setInterval(syncVKProducts, VK_CONFIG.syncInterval);
}

// Экспорт функций
window.VKSync = {
    sync: syncVKProducts,
    init: initVKSync,
    getProducts: () => JSON.parse(localStorage.getItem('vk_synced_products') || '[]'),
    getLastSync: () => localStorage.getItem('vk_last_sync')
};
