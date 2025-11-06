// КОСТЮМЕРКА Luxury Fashion Store JavaScript with Complete Functionality

// Complete Store Data with all 47 products
const STORE_DATA = {
  "brand": {
    "name": "КОСТЮМЕРКА",
    "subtitle": "ДИЗАЙНЕРСКАЯ ОДЕЖДА",
    "tagline": "Kostumerka — это не просто одежда. Это манифест индивидуальности и самовыражения.",
    "description": "Дизайнерская одежда, созданная в коллаборации fashion-стилиста Ирины Радкевич и дизайнера Оксаны Школьниковой",
    "features": ["Эксклюзивность", "Только проверенные материалы", "Решение для смелых девушек", "Сексуальность"],
    "showroom_address": "Брянск, пр-т Ленина, 12",
    "contacts": {
      "phone_irina": "+7-919-193-42-72 (Ирина)",
      "phone_oksana": "+79206056001 (Оксана)",
      "telegram": "@irina_fashionstyle",
      "vk_page": "https://vk.com/kostumerka_fashion",
      "vk_market": "https://vk.com/market-228925833"
    }
  },
  "products": [
    {
      "id": 1,
      "name": "Перчатки митенки укорочённые",
      "price": "8000 ₽",
      "category": "Аксессуары",
      "description": "Перчатки митенки из натуральной кожи с вышивкой ручной работы",
      "image": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=600&fit=crop"
    },
    {
      "id": 2,
      "name": "Перчатки митенки",
      "price": "10000 ₽",
      "category": "Аксессуары",
      "description": "Элегантные длинные митенки премиум качества",
      "image": "https://images.unsplash.com/photo-1585497262862-8f6421b9c522?w=500&h=600&fit=crop"
    },
    {
      "id": 3,
      "name": "Пальто-плащ",
      "price": "50000 ₽",
      "category": "Верхняя одежда",
      "description": "Пальто из премиальной шерсти с вышивкой ручной работы, в комплекте пояс для самого красивого силуэта",
      "image": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=600&fit=crop"
    },
    {
      "id": 4,
      "name": "Тренч трансформер",
      "price": "25000 ₽",
      "category": "Верхняя одежда",
      "description": "Универсальный тренч с возможностью трансформации стиля",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      "id": 5,
      "name": "Плащ-пальто",
      "price": "50000 ₽",
      "category": "Верхняя одежда",
      "description": "Элегантный плащ-пальто для истинных ценителей стиля",
      "image": "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=600&fit=crop"
    },
    {
      "id": 6,
      "name": "Костюм из экозамши",
      "price": "28000 ₽",
      "category": "Костюмы",
      "description": "Стильный костюм из высококачественной экозамши",
      "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop"
    },
    {
      "id": 7,
      "name": "Корсет с эффектом утяжки",
      "price": "8000 ₽",
      "category": "Корсеты",
      "description": "Изящный корсет для создания идеального силуэта",
      "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop"
    },
    {
      "id": 8,
      "name": "Корсет с эффектом утяжки (вариант 2)",
      "price": "8000 ₽",
      "category": "Корсеты",
      "description": "Альтернативная модель корсета с утяжкой",
      "image": "https://images.unsplash.com/photo-1566479179817-1debb6d5e7ee?w=500&h=600&fit=crop"
    },
    {
      "id": 9,
      "name": "Корсет с эффектом утяжки (вариант 3)",
      "price": "8000 ₽",
      "category": "Корсеты",
      "description": "Третий вариант элегантного корсета",
      "image": "https://images.unsplash.com/photo-1580651214613-d17c8fc9cb55?w=500&h=600&fit=crop"
    },
    {
      "id": 10,
      "name": "Костюм в горошек",
      "price": "22000 ₽",
      "category": "Костюмы",
      "description": "Классический костюм в элегантный горошек",
      "image": "https://images.unsplash.com/photo-1603851946761-b9b55fcce05c?w=500&h=600&fit=crop"
    },
    {
      "id": 11,
      "name": "Юбка из эко-замши мультиколор",
      "price": "12000 ₽",
      "category": "Юбки",
      "description": "Юбка с бахромой из чёрной эко замши, отличный вариант для работы, выходов и на каждый день",
      "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop"
    },
    {
      "id": 12,
      "name": "Платье с итальянским кружевом",
      "price": "25000 ₽",
      "category": "Платья",
      "description": "Роскошное платье с эксклюзивным итальянским кружевом",
      "image": "https://images.unsplash.com/photo-1566479179817-1debb6d5e7ee?w=500&h=600&fit=crop"
    },
    {
      "id": 13,
      "name": "Платье Шоколад",
      "price": "25000 ₽",
      "category": "Платья",
      "description": "Элегантное платье в благородном шоколадном оттенке",
      "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop"
    },
    {
      "id": 14,
      "name": "Костюм Розовый",
      "price": "25000 ₽",
      "category": "Костюмы",
      "description": "Нежный костюм в изысканном розовом цвете",
      "image": "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=600&fit=crop"
    },
    {
      "id": 15,
      "name": "Костюм Голубое небо",
      "price": "25000 ₽",
      "category": "Костюмы",
      "description": "Воздушный костюм небесно-голубого оттенка",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      "id": 16,
      "name": "Костюм Колокольчики",
      "price": "25000 ₽",
      "category": "Костюмы",
      "description": "Романтичный костюм с принтом колокольчики",
      "image": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=600&fit=crop"
    },
    {
      "id": 17,
      "name": "Тренч с бахромой миди",
      "price": "21000 ₽",
      "category": "Верхняя одежда",
      "description": "Стильный тренч миди длины с элегантной бахромой",
      "image": "https://images.unsplash.com/photo-1585497262862-8f6421b9c522?w=500&h=600&fit=crop"
    },
    {
      "id": 18,
      "name": "Куртка с бахромой из эко-замши",
      "price": "18000 ₽",
      "category": "Верхняя одежда",
      "description": "Модная куртка из эко-замши с декоративной бахромой",
      "image": "https://images.unsplash.com/photo-1603851946761-b9b55fcce05c?w=500&h=600&fit=crop"
    },
    {
      "id": 19,
      "name": "Тренч-жакет с бахромой",
      "price": "26000 ₽",
      "category": "Верхняя одежда",
      "description": "Эксклюзивная модель тренч-жакет с бахромой от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      "id": 20,
      "name": "Костюм из вареного денима",
      "price": "28000 ₽",
      "category": "Костюмы",
      "description": "Эксклюзивная модель костюм из вареного денима от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop"
    },
    {
      "id": 21,
      "name": "Брюки-парашюты",
      "price": "11000 ₽",
      "category": "Брюки",
      "description": "Эксклюзивная модель брюки-парашюты от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1603851946761-b9b55fcce05c?w=500&h=600&fit=crop"
    },
    {
      "id": 22,
      "name": "Куртка с бахромой лео",
      "price": "18000 ₽",
      "category": "Верхняя одежда",
      "description": "Эксклюзивная модель куртка с бахромой лео от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      "id": 23,
      "name": "Кейп из эко-замши",
      "price": "6000 ₽",
      "category": "Верхняя одежда",
      "description": "Эксклюзивная модель кейп из эко-замши от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      "id": 24,
      "name": "Пальто премиум",
      "price": "47000 ₽",
      "category": "Верхняя одежда",
      "description": "Эксклюзивная модель пальто премиум от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      "id": 25,
      "name": "Тренч из экозамши",
      "price": "21000 ₽",
      "category": "Верхняя одежда",
      "description": "Эксклюзивная модель тренч из экозамши от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      "id": 26,
      "name": "Юбка",
      "price": "15000 ₽",
      "category": "Юбки",
      "description": "Эксклюзивная модель юбка от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop"
    },
    {
      "id": 27,
      "name": "Ветровка-рубашка",
      "price": "12000 ₽",
      "category": "Верхняя одежда",
      "description": "Эксклюзивная модель ветровка-рубашка от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      "id": 28,
      "name": "Пальто",
      "price": "33000 ₽",
      "category": "Верхняя одежда",
      "description": "Эксклюзивная модель пальто от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      "id": 29,
      "name": "Платье бохо",
      "price": "25000 ₽",
      "category": "Платья",
      "description": "Эксклюзивная модель платье бохо от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1566479179817-1debb6d5e7ee?w=500&h=600&fit=crop"
    },
    {
      "id": 30,
      "name": "Куртка",
      "price": "18000 ₽",
      "category": "Верхняя одежда",
      "description": "Эксклюзивная модель куртка от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      "id": 31,
      "name": "Плащ из кожи",
      "price": "55000 ₽",
      "category": "Верхняя одежда",
      "description": "Эксклюзивная модель плащ из кожи от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      "id": 32,
      "name": "Куртка из кожи",
      "price": "45000 ₽",
      "category": "Верхняя одежда",
      "description": "Эксклюзивная модель куртка из кожи от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      "id": 33,
      "name": "Тренч с бахромой",
      "price": "20000 ₽",
      "category": "Верхняя одежда",
      "description": "Эксклюзивная модель тренч с бахромой от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      "id": 34,
      "name": "Тренч",
      "price": "18000 ₽",
      "category": "Верхняя одежда",
      "description": "Эксклюзивная модель тренч от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      "id": 35,
      "name": "Платье (модель 1)",
      "price": "25000 ₽",
      "category": "Платья",
      "description": "Эксклюзивная модель платье (модель 1) от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1566479179817-1debb6d5e7ee?w=500&h=600&fit=crop"
    },
    {
      "id": 36,
      "name": "Платье (модель 2)",
      "price": "25000 ₽",
      "category": "Платья",
      "description": "Эксклюзивная модель платье (модель 2) от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1566479179817-1debb6d5e7ee?w=500&h=600&fit=crop"
    },
    {
      "id": 37,
      "name": "Платье (модель 3)",
      "price": "25000 ₽",
      "category": "Платья",
      "description": "Эксклюзивная модель платье (модель 3) от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1566479179817-1debb6d5e7ee?w=500&h=600&fit=crop"
    },
    {
      "id": 38,
      "name": "Платье (модель 4)",
      "price": "25000 ₽",
      "category": "Платья",
      "description": "Эксклюзивная модель платье (модель 4) от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1566479179817-1debb6d5e7ee?w=500&h=600&fit=crop"
    },
    {
      "id": 39,
      "name": "Платье (модель 5)",
      "price": "28000 ₽",
      "category": "Платья",
      "description": "Эксклюзивная модель платье (модель 5) от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1566479179817-1debb6d5e7ee?w=500&h=600&fit=crop"
    },
    {
      "id": 40,
      "name": "Платье (модель 6)",
      "price": "27000 ₽",
      "category": "Платья",
      "description": "Эксклюзивная модель платье (модель 6) от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1566479179817-1debb6d5e7ee?w=500&h=600&fit=crop"
    },
    {
      "id": 41,
      "name": "Куртка-жакет",
      "price": "30000 ₽",
      "category": "Верхняя одежда",
      "description": "Эксклюзивная модель куртка-жакет от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      "id": 42,
      "name": "Куртка (модель 2)",
      "price": "22000 ₽",
      "category": "Верхняя одежда",
      "description": "Эксклюзивная модель куртка (модель 2) от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      "id": 43,
      "name": "Жакет-пальто",
      "price": "26000 ₽",
      "category": "Верхняя одежда",
      "description": "Эксклюзивная модель жакет-пальто от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      "id": 44,
      "name": "Пальто (модель 2)",
      "price": "37000 ₽",
      "category": "Верхняя одежда",
      "description": "Эксклюзивная модель пальто (модель 2) от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      "id": 45,
      "name": "Пальто (модель 3)",
      "price": "37000 ₽",
      "category": "Верхняя одежда",
      "description": "Эксклюзивная модель пальто (модель 3) от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      "id": 46,
      "name": "Костюм из экозамши (вариант 2)",
      "price": "28000 ₽",
      "category": "Костюмы",
      "description": "Эксклюзивная модель костюм из экозамши (вариант 2) от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop"
    },
    {
      "id": 47,
      "name": "Костюм из экозамши (вариант 3)",
      "price": "28000 ₽",
      "category": "Костюмы",
      "description": "Эксклюзивная модель костюм из экозамши (вариант 3) от дизайнеров Костюмерка",
      "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop"
    }
  ],
  "categories": {
    "Верхняя одежда": 22,
    "Платья": 9,
    "Костюмы": 8,
    "Корсеты": 3,
    "Аксессуары": 2,
    "Юбки": 2,
    "Брюки": 1
  }
};

// VK Integration Configuration
const VK_CONFIG = {
  groupId: '228925833',
  apiVersion: '5.131',
  syncInterval: 30 * 60 * 1000, // 30 minutes
  demoMode: true // Set to false for real VK integration
};

// VK Integration Class
class VKIntegration {
  constructor() {
    this.isConnected = false;
    this.accessToken = null;
    this.autoSyncEnabled = false;
    this.syncIntervalId = null;
    this.lastSyncTime = null;
    this.syncedProducts = [];
    this.demoMode = VK_CONFIG.demoMode;
    
    this.updateConnectionStatus();
  }

  async connect() {
    return new Promise((resolve, reject) => {
      if (this.demoMode) {
        setTimeout(() => {
          this.accessToken = 'demo_token_12345';
          this.isConnected = true;
          this.updateConnectionStatus();
          showLuxuryNotification('VK успешно подключен! (Демо режим)', 'success');
          resolve({ session: { sid: 'demo_token' } });
        }, 1000);
      } else {
        if (typeof VK === 'undefined') {
          reject(new Error('VK API не загружен'));
          return;
        }

        VK.Auth.login((response) => {
          if (response.session) {
            this.accessToken = response.session.sid;
            this.isConnected = true;
            this.updateConnectionStatus();
            showLuxuryNotification('VK успешно подключен!', 'success');
            resolve(response);
          } else {
            reject(new Error('Авторизация VK отклонена'));
          }
        }, VK.access.GROUPS);
      }
    });
  }

  async syncProducts() {
    if (!this.isConnected) {
      throw new Error('VK не подключен');
    }

    showLuxuryNotification('Синхронизация товаров из VK...', 'syncing');
    
    try {
      const vkProducts = await this.fetchVKProducts();
      const mergedProducts = this.mergeProducts(vkProducts);
      
      STORE_DATA.products = mergedProducts;
      this.syncedProducts = vkProducts;
      this.lastSyncTime = new Date();
      
      this.updateSyncInfo();
      updateFilteredProducts();
      loadCatalogProducts();
      loadFeaturedProducts();
      updateFittingProducts();
      
      showLuxuryNotification(`Синхронизировано ${vkProducts.length} товаров из VK`, 'success');
      
    } catch (error) {
      console.error('Sync error:', error);
      showLuxuryNotification('Ошибка синхронизации', 'error');
      throw error;
    }
  }

  async fetchVKProducts() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (this.demoMode) {
      const simulatedVKProducts = [
        { 
          id: 1001,
          name: "Эксклюзивное платье VK", 
          price: "35000 ₽", 
          category: "Платья", 
          source: "vk", 
          description: "Эксклюзивное дизайнерское платье из VK коллекции",
          image: "https://images.unsplash.com/photo-1566479179817-1debb6d5e7ee?w=500&h=600&fit=crop"
        },
        { 
          id: 1002,
          name: "Дизайнерский жакет VK", 
          price: "28000 ₽", 
          category: "Верхняя одежда", 
          source: "vk", 
          description: "Премиальный жакет из VK каталога",
          image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
        },
        { 
          id: 1003,
          name: "Корсет премиум VK", 
          price: "15000 ₽", 
          category: "Корсеты", 
          source: "vk", 
          description: "Роскошный корсет премиум класса",
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop"
        },
        { 
          id: 1004,
          name: "Костюм люкс VK", 
          price: "45000 ₽", 
          category: "Костюмы", 
          source: "vk", 
          description: "Элитный костюм люкс сегмента",
          image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop"
        }
      ];
      
      return simulatedVKProducts;
    } else {
      throw new Error('Реальная интеграция VK не настроена');
    }
  }

  mergeProducts(vkProducts) {
    const existingProducts = STORE_DATA.products.filter(p => p.source !== 'vk');
    return [...existingProducts, ...vkProducts];
  }

  enableAutoSync() {
    if (this.syncIntervalId) {
      clearInterval(this.syncIntervalId);
    }
    
    this.autoSyncEnabled = true;
    this.syncIntervalId = setInterval(() => {
      this.syncProducts().catch(console.error);
    }, VK_CONFIG.syncInterval);
    
    this.updateAutoSyncButton();
    showLuxuryNotification('Автоматическая синхронизация включена', 'success');
  }

  disableAutoSync() {
    if (this.syncIntervalId) {
      clearInterval(this.syncIntervalId);
      this.syncIntervalId = null;
    }
    
    this.autoSyncEnabled = false;
    this.updateAutoSyncButton();
    showLuxuryNotification('Автоматическая синхронизация отключена', 'success');
  }

  updateConnectionStatus() {
    const statusLight = document.getElementById('vk-status-light');
    const statusText = document.getElementById('vk-status-text');
    const connectBtn = document.getElementById('connect-vk-btn');
    const syncBtn = document.getElementById('sync-now-btn');
    const autoSyncBtn = document.getElementById('auto-sync-btn');

    if (this.isConnected) {
      statusLight?.classList.add('connected');
      if (statusText) statusText.textContent = 'VK подключен';
      if (connectBtn) connectBtn.textContent = 'ПЕРЕПОДКЛЮЧИТЬ VK';
      if (syncBtn) syncBtn.disabled = false;
      if (autoSyncBtn) autoSyncBtn.disabled = false;
    } else {
      statusLight?.classList.remove('connected');
      if (statusText) statusText.textContent = 'VK не подключен';
      if (connectBtn) connectBtn.textContent = 'ПОДКЛЮЧИТЬ VK';
      if (syncBtn) syncBtn.disabled = true;
      if (autoSyncBtn) autoSyncBtn.disabled = true;
    }
  }

  updateSyncInfo() {
    const lastSyncEl = document.getElementById('last-sync');
    const syncedCountEl = document.getElementById('synced-count');

    if (lastSyncEl && this.lastSyncTime) {
      const timeStr = this.lastSyncTime.toLocaleString('ru-RU');
      lastSyncEl.textContent = `Последняя синхронизация: ${timeStr}`;
    }

    if (syncedCountEl) {
      syncedCountEl.textContent = this.syncedProducts.length;
    }
  }

  updateAutoSyncButton() {
    const autoSyncBtn = document.getElementById('auto-sync-btn');
    const autoSyncText = document.getElementById('auto-sync-text');

    if (autoSyncBtn && autoSyncText) {
      if (this.autoSyncEnabled) {
        autoSyncText.textContent = 'ОТКЛЮЧИТЬ АВТО-СИНХРОНИЗАЦИЮ';
        autoSyncBtn.classList.add('btn--luxury');
        autoSyncBtn.classList.remove('btn--outline-luxury');
      } else {
        autoSyncText.textContent = 'ВКЛЮЧИТЬ АВТО-СИНХРОНИЗАЦИЮ';
        autoSyncBtn.classList.remove('btn--luxury');
        autoSyncBtn.classList.add('btn--outline-luxury');
      }
    }
  }
}

// Global state
let cart = [];
let filteredProducts = [...STORE_DATA.products];
let vkIntegration;
let currentPage = 1;
const productsPerPage = 12;

// DOM elements
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');
const productsGrid = document.getElementById('products-grid');
const featuredProducts = document.getElementById('featured-products');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const priceSort = document.getElementById('price-sort');
const cartCount = document.querySelector('.cart-count');
const cartContent = document.getElementById('cart-content');
const productModal = document.getElementById('product-modal');
const checkoutModal = document.getElementById('checkout-modal');
const vkLoginModal = document.getElementById('vk-login-modal');
const fittingForm = document.getElementById('fitting-form');
const productsForFitting = document.getElementById('products-for-fitting');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const productsCounter = document.getElementById('products-count');

// Admin panel elements
const adminPanel = document.getElementById('admin-panel');
const adminBtn = document.getElementById('admin-btn');
const connectVKBtn = document.getElementById('connect-vk-btn');
const syncNowBtn = document.getElementById('sync-now-btn');
const autoSyncBtn = document.getElementById('auto-sync-btn');
const vkAuthBtn = document.getElementById('vk-auth-btn');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeAdminPanel();
  initializeVKIntegration();
  loadFeaturedProducts();
  loadCatalogProducts();
  initializeCart();
  initializeFittingForm();
  initializeModals();
  initializeMobileMenu();
  initializeFilters();
  initializeCollections();
  
  // Set minimum date for fitting appointments
  const fittingDateInput = document.getElementById('fitting-date');
  if (fittingDateInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    fittingDateInput.min = tomorrow.toISOString().split('T')[0];
  }

  // Load cart from localStorage
  loadCartFromStorage();
});

// Local Storage Functions
function saveCartToStorage() {
  try {
    const cartData = JSON.stringify(cart);
    localStorage.setItem('kostumerka_cart', cartData);
  } catch (error) {
    console.warn('Could not save cart to localStorage:', error);
  }
}

function loadCartFromStorage() {
  try {
    const savedCart = localStorage.getItem('kostumerka_cart');
    if (savedCart) {
      cart = JSON.parse(savedCart);
      updateCartDisplay();
      updateCartCount();
    }
  } catch (error) {
    console.warn('Could not load cart from localStorage:', error);
    cart = [];
  }
}

// VK Integration Initialization
function initializeVKIntegration() {
  vkIntegration = new VKIntegration();
}

// Collections initialization
function initializeCollections() {
  const collectionCards = document.querySelectorAll('.collection-card');
  collectionCards.forEach(card => {
    card.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      if (category) {
        showSection('catalog');
        
        // Set category filter
        setTimeout(() => {
          const categorySelect = document.getElementById('category-filter');
          if (categorySelect) {
            categorySelect.value = category;
            applyFilters();
          }
        }, 100);
      }
    });
  });
}

// Admin Panel Functions
function initializeAdminPanel() {
  adminBtn?.addEventListener('click', function(e) {
    e.stopPropagation();
    adminPanel?.classList.toggle('hidden');
  });

  connectVKBtn?.addEventListener('click', async function() {
    try {
      if (vkIntegration.isConnected) {
        vkIntegration.isConnected = false;
        vkIntegration.updateConnectionStatus();
      }
      
      showLuxuryModal(vkLoginModal);
    } catch (error) {
      showLuxuryNotification('Ошибка подключения к VK', 'error');
    }
  });

  vkAuthBtn?.addEventListener('click', async function() {
    try {
      await vkIntegration.connect();
      hideLuxuryModal(vkLoginModal);
    } catch (error) {
      showLuxuryNotification(error.message || 'Ошибка авторизации VK', 'error');
    }
  });

  syncNowBtn?.addEventListener('click', async function() {
    try {
      await vkIntegration.syncProducts();
    } catch (error) {
      showLuxuryNotification(error.message || 'Ошибка синхронизации', 'error');
    }
  });

  autoSyncBtn?.addEventListener('click', function() {
    if (vkIntegration.autoSyncEnabled) {
      vkIntegration.disableAutoSync();
    } else {
      vkIntegration.enableAutoSync();
    }
  });

  // Close admin panel when clicking outside
  document.addEventListener('click', function(e) {
    if (adminPanel && !adminPanel.contains(e.target) && !adminBtn?.contains(e.target)) {
      adminPanel.classList.add('hidden');
    }
  });
}

// Luxury Notifications
function showLuxuryNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `luxury-notification ${type}`;
  
  let icon = '';
  if (type === 'syncing') {
    icon = '<span class="sync-icon">⟳</span>';
  } else if (type === 'success') {
    icon = '◊';
  } else if (type === 'error') {
    icon = '✗';
  }
  
  notification.innerHTML = `<span class="notification-icon">${icon}</span><span>${message}</span>`;
  
  // Styling
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'error' ? '#d32f2f' : type === 'success' ? '#d4af37' : '#2c2c2c'};
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    font-weight: 600;
    z-index: 10000;
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    max-width: 350px;
    font-family: var(--font-luxury-body);
    display: flex;
    align-items: center;
    gap: 12px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(212, 175, 55, 0.2);
    font-size: 14px;
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  notification.style.transform = 'translateX(100%)';
  notification.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 10);
  
  // Animate icon for syncing
  if (type === 'syncing') {
    const iconEl = notification.querySelector('.sync-icon');
    if (iconEl) {
      iconEl.style.animation = 'spin 1s linear infinite';
    }
  }
  
  // Remove after delay
  const delay = type === 'syncing' ? 8000 : 4000;
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 400);
  }, delay);
}

// Navigation
function initializeNavigation() {
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      const targetSection = this.getAttribute('data-section');
      showSection(targetSection);
      
      // Update active nav item
      navItems.forEach(nav => nav.classList.remove('nav-item--active'));
      this.classList.add('nav-item--active');
    });
  });
}

function showSection(sectionId) {
  sections.forEach(section => {
    section.classList.remove('section--active');
  });
  
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('section--active');
    
    // Update navigation
    navItems.forEach(nav => nav.classList.remove('nav-item--active'));
    const activeNav = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeNav) {
      activeNav.classList.add('nav-item--active');
    }
  }
}

// Mobile menu
function initializeMobileMenu() {
  mobileMenuBtn?.addEventListener('click', function() {
    const navMenu = document.querySelector('.luxury-nav__menu');
    if (navMenu) {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      
      if (!isVisible) {
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'var(--color-luxury-white)';
        navMenu.style.flexDirection = 'column';
        navMenu.style.padding = 'var(--space-luxury-lg)';
        navMenu.style.boxShadow = 'var(--shadow-luxury)';
        navMenu.style.zIndex = '1000';
      }
    }
  });
}

// Products
function createLuxuryProductCard(product, index) {
  const card = document.createElement('div');
  card.className = 'luxury-product-card';
  
  // Add VK sync indicator if product is from VK
  if (product.source === 'vk') {
    card.classList.add('vk-synced');
  }
  
  card.onclick = () => showProductModal(product, index);
  
  const hasImage = product.image && product.image !== 'placeholder';
  
  card.innerHTML = `
    <div class="product-image-luxury">
      ${hasImage ? 
        `<img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
         <div class="image-placeholder" style="display: none;">ФОТО ТОВАРА</div>` :
        `<span class="image-placeholder">ФОТО ТОВАРА</span>`
      }
    </div>
    <div class="product-content-luxury">
      <div class="product-category-luxury">${product.category.toUpperCase()}</div>
      <h4 class="product-name-luxury">${product.name}</h4>
      <div class="product-price-luxury">${product.price}</div>
      <div class="product-actions-luxury">
        <button class="btn btn--luxury-primary btn--product" onclick="event.stopPropagation(); addToCart(${index})" aria-label="Добавить в корзину">
          В КОРЗИНУ
        </button>
        <button class="btn btn--luxury-outline btn--product" onclick="event.stopPropagation(); showFittingSection(${index})" aria-label="Записаться на примерку">
          ПРИМЕРКА
        </button>
      </div>
    </div>
  `;
  
  return card;
}

function loadFeaturedProducts() {
  if (!featuredProducts) return;
  
  // Show first 6 products as featured
  const featured = STORE_DATA.products.slice(0, 6);
  featuredProducts.innerHTML = '';
  
  featured.forEach((product, index) => {
    const card = createLuxuryProductCard(product, index);
    featuredProducts.appendChild(card);
  });
}

function loadCatalogProducts() {
  if (!productsGrid) return;
  
  productsGrid.innerHTML = '';
  
  // Show loading if needed
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 0;">
        <div style="font-size: 3rem; color: var(--color-luxury-gold); margin-bottom: 1rem;">◊</div>
        <p style="color: var(--color-luxury-gray-dark);">Товары не найдены</p>
      </div>
    `;
    return;
  }
  
  filteredProducts.forEach((product, originalIndex) => {
    // Find original index in full products array
    const realIndex = STORE_DATA.products.findIndex(p => 
      p.id === product.id || (p.name === product.name && p.category === product.category && p.source === product.source)
    );
    const card = createLuxuryProductCard(product, realIndex >= 0 ? realIndex : originalIndex);
    productsGrid.appendChild(card);
  });

  // Update products counter
  updateProductsCounter();
}

function updateProductsCounter() {
  if (productsCounter) {
    productsCounter.textContent = `Показано товаров: ${filteredProducts.length}`;
  }
}

function updateFittingProducts() {
  if (!productsForFitting) return;
  
  productsForFitting.innerHTML = '';
  
  STORE_DATA.products.forEach((product, index) => {
    const checkboxDiv = document.createElement('div');
    checkboxDiv.className = 'product-checkbox';
    
    const vkBadge = product.source === 'vk' ? ' [VK]' : '';
    
    checkboxDiv.innerHTML = `
      <input type="checkbox" id="product-${index}" value="${index}">
      <label for="product-${index}">${product.name}${vkBadge} - ${product.price}</label>
    `;
    
    productsForFitting.appendChild(checkboxDiv);
  });
}

// Search and filters
function initializeFilters() {
  searchInput?.addEventListener('input', debounce(function() {
    applyFilters();
  }, 300));

  categoryFilter?.addEventListener('change', function() {
    applyFilters();
  });

  priceSort?.addEventListener('change', function() {
    applyFilters();
  });
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function applyFilters() {
  let filtered = [...STORE_DATA.products];
  
  // Search filter
  const searchTerm = searchInput?.value.toLowerCase().trim() || '';
  if (searchTerm) {
    filtered = filtered.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.description?.toLowerCase().includes(searchTerm)
    );
  }
  
  // Category filter
  const selectedCategory = categoryFilter?.value || '';
  if (selectedCategory) {
    filtered = filtered.filter(product => product.category === selectedCategory);
  }
  
  // Price sorting
  const sortOrder = priceSort?.value || '';
  if (sortOrder) {
    filtered.sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
      const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
      return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });
  }
  
  filteredProducts = filtered;
  loadCatalogProducts();
}

function updateFilteredProducts() {
  applyFilters();
}

// Cart functionality
function initializeCart() {
  updateCartDisplay();
}

function addToCart(productIndex) {
  const product = STORE_DATA.products[productIndex];
  if (product) {
    const cartItem = {
      ...product, 
      id: `${product.id}_${Date.now()}_${Math.random()}`,
      originalId: product.id,
      addedAt: new Date().toISOString()
    };
    
    cart.push(cartItem);
    updateCartDisplay();
    updateCartCount();
    saveCartToStorage();
    
    showLuxuryNotification(`${product.name} добавлен в корзину`, 'success');
  }
}

function removeFromCart(cartItemId) {
  cart = cart.filter(item => item.id !== cartItemId);
  updateCartDisplay();
  updateCartCount();
  saveCartToStorage();
}

function updateCartCount() {
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

function updateCartDisplay() {
  if (!cartContent) return;
  
  if (cart.length === 0) {
    cartContent.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">◊</div>
        <p>Ваша корзина пуста</p>
        <button class="btn btn--luxury-primary" data-section="catalog">ПЕРЕЙТИ К ПОКУПКАМ</button>
      </div>
    `;
    
    // Re-attach event listener
    cartContent.querySelector('[data-section="catalog"]')?.addEventListener('click', function() {
      showSection('catalog');
    });
    return;
  }
  
  const total = cart.reduce((sum, item) => {
    return sum + parseInt(item.price.replace(/[^\d]/g, ''));
  }, 0);
  
  cartContent.innerHTML = `
    <div class="cart-items">
      ${cart.map(item => `
        <div class="cart-item">
          <div class="cart-item__info">
            <div class="cart-item__name">${item.name}${item.source === 'vk' ? ' [VK]' : ''}</div>
            <div class="cart-item__category">${item.category}</div>
            <div class="cart-item__price">${item.price}</div>
          </div>
          <button class="cart-item__remove" onclick="removeFromCart('${item.id}')" aria-label="Удалить товар">×</button>
        </div>
      `).join('')}
    </div>
    <div class="cart-total">
      <h3>ИТОГО: ${total.toLocaleString('ru-RU')} ₽</h3>
    </div>
    <div class="cart-actions">
      <button class="btn btn--luxury-outline" onclick="clearCart()">ОЧИСТИТЬ КОРЗИНУ</button>
      <button class="btn btn--luxury-primary" onclick="showCheckoutModal()">ОФОРМИТЬ ЗАКАЗ</button>
    </div>
  `;
}

function clearCart() {
  cart = [];
  updateCartDisplay();
  updateCartCount();
  saveCartToStorage();
  showLuxuryNotification('Корзина очищена', 'success');
}

// Luxury Modals
function initializeModals() {
  // Close modal on backdrop click
  document.querySelectorAll('.luxury-modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this || e.target.classList.contains('modal-backdrop')) {
        hideLuxuryModal(this);
      }
    });
  });
  
  // Close modal on close button click
  document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
      const modal = this.closest('.luxury-modal');
      hideLuxuryModal(modal);
    });
  });

  // Close modals on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.luxury-modal:not(.hidden)');
      if (openModal) {
        hideLuxuryModal(openModal);
      }
    }
  });
}

function showLuxuryModal(modal) {
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Focus management
    const firstFocusable = modal.querySelector('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) {
      setTimeout(() => firstFocusable.focus(), 100);
    }
  }
}

function hideLuxuryModal(modal) {
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function showProductModal(product, index) {
  const productDetails = document.getElementById('product-details');
  if (!productDetails) return;
  
  const vkBadge = product.source === 'vk' ? '<span style="background: #d4af37; color: white; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; letter-spacing: 0.05em;">VK</span>' : '';
  
  const hasImage = product.image && product.image !== 'placeholder';
  
  productDetails.innerHTML = `
    <div class="product-details__image">
      <div>
        ${hasImage ? 
          `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
           <div style="display: none; position: relative; z-index: 1; background: rgba(255, 255, 255, 0.9); padding: 12px 20px; border-radius: 8px; border: 1px solid #d4af37; font-weight: 600; color: #d4af37;">ФОТО ТОВАРА</div>` :
          `<span style="position: relative; z-index: 1; background: rgba(255, 255, 255, 0.9); padding: 12px 20px; border-radius: 8px; border: 1px solid #d4af37; font-weight: 600; color: #d4af37;">ФОТО ТОВАРА</span>`
        }
      </div>
    </div>
    <h3 class="product-details__name">${product.name} ${vkBadge}</h3>
    <div class="product-details__category">${product.category.toUpperCase()}</div>
    <div class="product-details__price">${product.price}</div>
    <div class="product-details__description">
      <p class="luxury-paragraph">${product.description || 'Эксклюзивная дизайнерская вещь от Костюмерка. Создана с особой любовью к деталям из проверенных материалов.'}</p>
      <p class="luxury-paragraph"><strong>ОСОБЕННОСТИ:</strong></p>
      <ul style="padding-left: 20px; line-height: 1.8;">
        <li>Эксклюзивный дизайн</li>
        <li>Качественные материалы</li>
        <li>Ограниченный тираж</li>
        <li>Возможность примерки в шоу-руме</li>
        ${product.source === 'vk' ? '<li>Синхронизирован из VK</li>' : ''}
      </ul>
    </div>
    <div class="product-details__actions">
      <button class="btn btn--luxury-primary" onclick="addToCart(${index}); hideLuxuryModal(productModal);">
        ДОБАВИТЬ В КОРЗИНУ
      </button>
      <button class="btn btn--luxury-outline" onclick="showFittingSection(${index}); hideLuxuryModal(productModal);">
        ЗАПИСАТЬСЯ НА ПРИМЕРКУ
      </button>
    </div>
  `;
  
  showLuxuryModal(productModal);
}

function showCheckoutModal() {
  const total = cart.reduce((sum, item) => {
    return sum + parseInt(item.price.replace(/[^\d]/g, ''));
  }, 0);
  
  const totalElement = document.getElementById('checkout-total-amount');
  if (totalElement) {
    totalElement.textContent = `${total.toLocaleString('ru-RU')} ₽`;
  }
  
  showLuxuryModal(checkoutModal);
}

// Checkout form
document.getElementById('checkout-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  const orderData = {
    items: cart,
    customer: {
      name: document.getElementById('checkout-name')?.value,
      phone: document.getElementById('checkout-phone')?.value,
      email: document.getElementById('checkout-email')?.value,
      address: document.getElementById('checkout-address')?.value,
      payment: document.getElementById('checkout-payment')?.value
    },
    total: cart.reduce((sum, item) => sum + parseInt(item.price.replace(/[^\d]/g, '')), 0),
    orderDate: new Date().toISOString()
  };
  
  // Show loading
  showLuxuryNotification('Обработка заказа...', 'syncing');
  
  // Simulate order processing
  setTimeout(() => {
    hideLuxuryModal(checkoutModal);
    clearCart();
    showLuxuryNotification('Заказ успешно оформлен! Мы свяжемся с вами в ближайшее время.', 'success');
    showSection('home');
    
    // Reset form
    this.reset();
  }, 2000);
});

// Fitting appointment
function initializeFittingForm() {
  updateFittingProducts();
}

function showFittingSection(productIndex = null) {
  showSection('fitting');
  
  // If specific product, select it
  if (productIndex !== null) {
    setTimeout(() => {
      const checkbox = document.getElementById(`product-${productIndex}`);
      if (checkbox) {
        checkbox.checked = true;
        checkbox.scrollIntoView({behavior: 'smooth', block: 'center'});
      }
    }, 100);
  }
}

// Fitting form submission
fittingForm?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const selectedProducts = Array.from(document.querySelectorAll('#products-for-fitting input:checked'))
    .map(checkbox => STORE_DATA.products[parseInt(checkbox.value)])
    .filter(Boolean);

  if (selectedProducts.length === 0) {
    showLuxuryNotification('Выберите хотя бы один товар для примерки', 'error');
    return;
  }
  
  const appointmentData = {
    products: selectedProducts,
    date: document.getElementById('fitting-date')?.value,
    time: document.getElementById('fitting-time')?.value,
    customer: {
      name: document.getElementById('client-name')?.value,
      phone: document.getElementById('client-phone')?.value,
      comments: document.getElementById('client-comments')?.value
    },
    appointmentDate: new Date().toISOString()
  };
  
  // Show loading
  showLuxuryNotification('Оформление записи...', 'syncing');
  
  // Simulate appointment booking
  setTimeout(() => {
    showLuxuryNotification('Запись на примерку успешно создана! Мы свяжемся с вами для подтверждения.', 'success');
    fittingForm.reset();
    showSection('home');
  }, 1500);
});

// Phone number formatting
function formatPhoneNumber(input) {
  const value = input.value.replace(/\D/g, '');
  let formattedValue = '';
  
  if (value.length > 0) {
    formattedValue = '+7';
    if (value.length > 1) {
      formattedValue += ' (' + value.substring(1, 4);
      if (value.length > 4) {
        formattedValue += ') ' + value.substring(4, 7);
        if (value.length > 7) {
          formattedValue += '-' + value.substring(7, 9);
          if (value.length > 9) {
            formattedValue += '-' + value.substring(9, 11);
          }
        }
      }
    }
  }
  
  input.value = formattedValue;
}

// Add phone formatting to phone inputs
document.addEventListener('input', function(e) {
  if (e.target.type === 'tel') {
    formatPhoneNumber(e.target);
  }
});

// Additional event listeners for buttons with data-section attributes
document.addEventListener('click', function(e) {
  if (e.target.hasAttribute('data-section')) {
    const section = e.target.getAttribute('data-section');
    showSection(section);
  }
});

// Error handling for images
document.addEventListener('error', function(e) {
  if (e.target.tagName === 'IMG') {
    e.target.style.display = 'none';
    const placeholder = e.target.nextElementSibling;
    if (placeholder && placeholder.classList.contains('image-placeholder')) {
      placeholder.style.display = 'flex';
    }
  }
}, true);

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  });

  // Observe images when they're added to the DOM
  const observeImages = () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  };

  // Call observeImages after DOM updates
  setTimeout(observeImages, 100);
}

// Keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
  // Navigate sections with arrow keys when focused on nav
  if (e.target.classList.contains('nav-item')) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const nextItem = e.target.nextElementSibling;
      if (nextItem && nextItem.classList.contains('nav-item')) {
        nextItem.focus();
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prevItem = e.target.previousElementSibling;
      if (prevItem && prevItem.classList.contains('nav-item')) {
        prevItem.focus();
      }
    }
  }
});

// Initialize tooltips and other accessibility features
function initializeAccessibility() {
  // Add aria-labels where needed
  const buttons = document.querySelectorAll('button:not([aria-label])');
  buttons.forEach(button => {
    if (button.textContent.trim()) {
      button.setAttribute('aria-label', button.textContent.trim());
    }
  });
}

// Call accessibility initialization
setTimeout(initializeAccessibility, 500);

// Export functions for global access
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.showProductModal = showProductModal;
window.showCheckoutModal = showCheckoutModal;
window.showFittingSection = showFittingSection;
window.hideLuxuryModal = hideLuxuryModal;
window.showSection = showSection;