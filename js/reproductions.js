const reproductions = {
  france: [
    {
      image: 'france-1',
      author: 'Марсель Руссо',
      name: 'Охота Амура',
      structure: 'Холст, масло (50х80)',
      price: '14 500'
    },
    {
      image: 'france-2',
      author: 'Анри Селин',
      name: 'Дама с собачкой',
      structure: 'Акрил, бумага (50х80)',
      price: '16 500'
    },
    {
      image: 'france-3',
      author: 'Франсуа Дюпон',
      name: 'Процедура',
      structure: 'Цветная литография (40х60)',
      price: '20 000'
    },
    {
      image: 'france-4',
      author: 'Луи Детуш',
      name: 'Роза',
      structure: 'Бумага, акрил (50х80)',
      price: '12 000'
    },
    {
      image: 'france-5',
      author: 'Франсуа Дюпон',
      name: 'Птичья трапеза',
      structure: 'Цветная литография (40х60)',
      price: '22 500'
    },
    {
      image: 'france-6',
      author: 'Пьер Моранж',
      name: 'Пейзаж с рыбой',
      structure: 'Цветная литография (40х60)',
      price: '20 000'
    }
  ],
  germany: [
    {
      image: 'germany-1',
      author: 'Курт Вернер',
      name: 'Над городом',
      structure: 'Цветная литография (40х60)',
      price: '16 000'
    },
    {
      image: 'germany-2',
      author: 'Макс Рихтер',
      name: 'Птенцы',
      structure: 'Холст, масло (50х80)',
      price: '14 500'
    },
    {
      image: 'germany-3',
      author: 'Мартин Майер',
      name: 'Среди листьев',
      structure: 'Цветная литография (40х60)',
      price: '20 000'
    },
    {
      image: 'germany-4',
      author: 'Герман Беккер',
      name: 'Яркая птица',
      structure: 'Цветная литография (40х60)',
      price: '13 000'
    },
    {
      image: 'germany-5',
      author: 'Вульф Бауэр',
      name: 'Дятлы',
      structure: 'Бумага, акрил (50х80)',
      price: '20 000'
    },
    {
      image: 'germany-6',
      author: 'Вальтер Хартманн',
      name: 'Большие воды',
      structure: 'Бумага, акрил (50х80)',
      price: '23 000'
    }
  ],
  england: [
    {
      image: 'england-1',
      author: 'Пол Смит',
      name: 'Дикий зверь',
      structure: 'Акварель, бумага (50х80)',
      price: '19 500'
    },
    {
      image: 'england-2',
      author: 'Джон Уайт',
      name: 'Скалистый берег',
      structure: 'Цветная литография (40х60)',
      price: '17 500'
    },
    {
      image: 'england-3',
      author: 'Джим Уотсон',
      name: 'Река и горы',
      structure: 'Акварель, бумага (50х80)',
      price: '20 500'
    },
    {
      image: 'england-4',
      author: 'Юджин Зиллион',
      name: 'Белый попугай',
      structure: 'Цветная литография (40х60)',
      price: '15 500'
    },
    {
      image: 'england-5',
      author: 'Эрик Гиллман',
      name: 'Ночная рыба',
      structure: 'Бумага, акрил (50х80)',
      price: '12 500'
    },
    {
      image: 'england-6',
      author: 'Альфред Барр',
      name: 'Рыжий кот',
      structure: 'Цветная литография (40х60)',
      price: '21 000'
    }
  ]
}

// Работа с TAB меню
const tabsBtn = document.querySelectorAll('.reproductions__tabs-item');
const tabsContent = document.querySelectorAll('.reproductions__content-item');

tabsBtn.forEach(tab => {
  tab.addEventListener('click', () => {
    let currentBtn = tab;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if (! currentBtn.classList.contains('active')) {
      tabsBtn.forEach(tab => {
        tab.classList.remove('active');
      })
  
      tabsContent.forEach(item => {
        item.classList.remove('active');
      })
  
      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  })
});

function getReproductions(id, arr) {
  const contentItem = document.querySelector(`${id}`);

  const cardItem = arr.map((item) => 
  `
    <article data-aos="fade-left" class="card" id='${item.image}'>
      <div 
        class="card__image" 
        style="background-image: url(./images/reproductions/${item.image}.jpg);"
      ></div>
      <div class="card__body">
        <h4 class="card__author">${item.author}</h4>
        <h3 class="card__name">${item.name}</h3>
        <p class="card__structure">${item.structure}</p>
        <div class="card__price">${item.price} руб</div>
      </div>
      <button class="card__btn">В корзину</button>
    </article>
  `).join('');

  console.log(cardItem.id == 1)

  contentItem.innerHTML = cardItem;
}

getReproductions('#france', reproductions.france);
getReproductions('#germany', reproductions.germany);
getReproductions('#england', reproductions.england);