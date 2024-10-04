const apiLink4 = 'https://skillup23-backend-timeweb-b537.twc1.net/api/flowers';
const apiLink5 = 'http://localhost:3456/sva';
const apiLink6 = 'http://localhost:3456/api/flowers';

const tableContainer = document.querySelector('.table__container');

let flowersArray = [];

async function getResponse(api) {
  try {
    const response = await fetch(api);

    if (response.ok) {
      const data = await response.json();
      flowersArray = data;

      createTable(data);
    } else {
      console.log('Error HTTP: ' + response.status);
    }
  } catch (error) {
    console.log('Ошибка в запросе:' + error.message);
  }
}

// function getResponse(api) {
//   fetch(api)
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       } else {
//         console.log("Error HTTP: " + response.status);
//       }
//     })
//     .then((data) => {
//       createTable(data);
//     })
//     .catch((error) => {
//       console.log("Ошибка в запросе:" + error.message);
//     });
// }

// function getResponse(api) {
//   fetch(api, {
//     headers: new Headers({
//       Authorization: token,
//     }),
//     // mode: 'no-cors',
//   })
//     .then((response) => {
//       if (!response.ok) throw new Error(response.status);
//       return response.json();
//     })
//     .catch((error) => {
//       console.log('Ошибка в запросе:' + error.message);
//     });
// }

getResponse(apiLink4);

function createTable(array) {
  const table = document.querySelector('.table__container');

  let list = '';

  array.forEach((item) => {
    if (!item.Картинка) {
      foto = 'sva/placeholder.jpg';
    } else {
      foto = `data:image/jpeg;base64,${item.Картинка}`;
    }

    if (item.ГрадацияОстатков === '1') {
      totalImg = 'sva/total-small.png';
    } else if (item.ГрадацияОстатков === '2') {
      totalImg = 'sva/total-middle.png';
    } else {
      totalImg = 'sva/total-big.png';
    }

    list += `<div class="table">
          <div class="table__section table__img">
            <img
              src="${foto}"
              alt="Фотография"
              class="card__foto"
              id="base64imagenone"
            />
          </div>

          <div class="table__section">
            <div class="table__item">
              <h4 class="nomenclature">${item.Номенклатура}</h4>
            </div>
            <div class="table__item table__item_bottom">
              <p>Характеристика</p>
              <h4 class="characteristic">${item.Характеристика}</h4>
            </div>
            <div class="table__item table__item_bottom">
              <p>Остаток</p>
              <img
                src="${totalImg}"
                alt="${item.ГрадацияОстатков}"
                class="total_foto"
                id="base64imagenone"
              />
            </div>
            <div class="table__item table__item_bottom">
              <p>Цена</p>
              <h4 class="price">${item.Цена} руб.</h4>
            </div>
          </div>
        </div>`;
  });

  table.innerHTML = list;
}

const letterCon = document.querySelector('.letter__container');

function filterFlowers(letter) {
  const flowersArrayFilter = flowersArray.filter(function (item) {
    return item.Номенклатура.startsWith(letter);
  });

  createTable(flowersArrayFilter);
}

letterCon
  .querySelector('.all__btn')
  .addEventListener('click', () => createTable(flowersArray));

letterCon
  .querySelector('.a__btn')
  .addEventListener('click', () => filterFlowers('А'));
letterCon
  .querySelector('.v__btn')
  .addEventListener('click', () => filterFlowers('В'));
letterCon
  .querySelector('.g__btn')
  .addEventListener('click', () => filterFlowers('Г'));
letterCon
  .querySelector('.d__btn')
  .addEventListener('click', () => filterFlowers('Д'));
letterCon
  .querySelector('.k__btn')
  .addEventListener('click', () => filterFlowers('К'));
letterCon
  .querySelector('.l__btn')
  .addEventListener('click', () => filterFlowers('Л'));
letterCon
  .querySelector('.m__btn')
  .addEventListener('click', () => filterFlowers('М'));
letterCon
  .querySelector('.n__btn')
  .addEventListener('click', () => filterFlowers('Н'));
letterCon
  .querySelector('.p__btn')
  .addEventListener('click', () => filterFlowers('П'));
letterCon
  .querySelector('.r__btn')
  .addEventListener('click', () => filterFlowers('Р'));
letterCon
  .querySelector('.s__btn')
  .addEventListener('click', () => filterFlowers('С'));
letterCon
  .querySelector('.t__btn')
  .addEventListener('click', () => filterFlowers('Т'));
letterCon
  .querySelector('.f__btn')
  .addEventListener('click', () => filterFlowers('Ф'));
letterCon
  .querySelector('.h__btn')
  .addEventListener('click', () => filterFlowers('Х'));
letterCon
  .querySelector('.tc__btn')
  .addEventListener('click', () => filterFlowers('Ц'));
letterCon
  .querySelector('.sh__btn')
  .addEventListener('click', () => filterFlowers('Ш'));
letterCon
  .querySelector('.e2__btn')
  .addEventListener('click', () => filterFlowers('Э'));

// const tableTemplate = document.querySelector('#table-template').content;
// const tableElement = tableTemplate.querySelector('.table').cloneNode(true);

// console.log(item);

// if (!item.Номенклатура) {
//   tableElement.querySelector('.nomenclature').textContent = 'нет данных';
// } else {
//   tableElement.querySelector('.nomenclature').textContent =
//     item.Номенклатура;
// }

// if (!item.Характеристика) {
//   tableElement.querySelector('.characteristic').textContent = 'нет данных';
// } else {
//   tableElement.querySelector('.characteristic').textContent =
//     item.Характеристика;
// }

// if (!item.Остаток) {
//   tableElement.querySelector('.total').textContent = 'нет данных';
// } else {
//   tableElement.querySelector('.total').textContent = item.Остаток;
// }

// if (!item.Цена) {
//   tableElement.querySelector('.price').textContent = 'нет данных';
// } else {
//   tableElement.querySelector('.price').textContent = item.Цена;
// }

// if (!item.Картинка) {
//   tableElement.querySelector('.card__foto').src = '/placeholder.png';
// } else {
//   // const kartinka = `data:image/jpeg;base64,${String(item.Картинка)}`;

//   // const reg = /\n+/g;

//   // let imageBase64 = kartinka.replace(reg, '');

//   // console.log(kartinka.replace(reg, ''));

//   // console.log(String(kartinka));
//   console.log(item.Картинка);

//   const kartinka = 111

//   tableElement.querySelector(
//     'card__foto'
//   ).src = `data:image/jpeg;base64,${kartinka}`;
// }

// tableContainer.prepend(tableElement);
