const mainPackages = [
    {
      name: "Базовый",
      price: "499 руб./мес.",
      features: ["Доступ к основным функциям", "5 ГБ хранилища", "Поддержка по email"]
    },
    {
      name: "Стандартный",
      price: "999 руб./мес.",
      features: ["Доступ ко всем функциям", "50 ГБ хранилища", "Поддержка по email и телефону"]
    },
    {
      name: "Премиум",
      price: "1999 руб./мес.",
      features: ["Доступ ко всем функциям", "200 ГБ хранилища", "Круглосуточная поддержка"]
    },
    {
      name: "Корпоративный",
      price: "4999 руб./мес.",
      features: ["Безлимитный доступ ко всем функциям", "1 ТБ хранилища", "Персональный менеджер"]
    }
  ];


  const additionalPackages = [
    {
      name: "Дополнительное хранилище",
      price: "99 руб./мес.",
      description: "Дополнительные 10 ГБ хранилища"
    },
    {
      name: "Расширенная поддержка",
      price: "299 руб./мес.",
      description: "Круглосуточная поддержка"
    },
    {
      name: "Персональный менеджер",
      price: "999 руб./мес.",
      description: "Персональный менеджер для вашего аккаунта"
    },
    {
      name: "Обучающие материалы",
      price: "199 руб./мес.",
      description: "Доступ к эксклюзивным обучающим материалам"
    },
    {
      name: "Интеграция с другими сервисами",
      price: "499 руб./мес.",
      description: "Возможность интеграции с другими популярными сервисами"
    }
  ];

const salesWrapper = document.querySelector('.sales__wrapper');
const adittionals = document.querySelector('.sales__additionals');

mainPackages.forEach(pkg => {
  const card = document.createElement('div');
  card.className = 'sales__card';
  card.innerHTML = `
    <div class="sales__top">
      <h3 class="sales__title">${pkg.name}</h3>
      <p class="sales__price">${pkg.price}</p>
    </div>
    <ul class="sales__desc">
      ${pkg.features.map(feature => `<li>${feature}</li>`).join('')}
    </ul>
    <button class="sales__btn">Подключить</button>
  `;
  salesWrapper.appendChild(card);
});

additionalPackages.forEach(pkg => {
  const card = document.createElement('div');
  card.className = 'sales__card-adittional';
  card.innerHTML = `
    <div class="sales__top-adittional">
      <h3 class="sales__title-adittional">${pkg.name}</h3>
      <p class="sales__price-adittional">${pkg.price}</p>
    </div>
    <p class="sales__desc-adittional">
      ${pkg.description}
    </p>
  `;
  adittionals.appendChild(card);
});


