const apiLink = 'https://jsonplaceholder.typicode.com/posts';
const apiLink2 = 'https://jsonplaceholder.typicode.com/albums';
const apiLink3 = 'https://sva.corp.rarus-cloud.ru/UNF/hs/api_sva/price/get';
const apiLink4 = 'https://skillup23-backend-timeweb-b537.twc1.net/sva';
const apiLink5 = 'http://localhost:3456/sva';

const tableContainer = document.querySelector('.table__container');
const buttonUpdate = document.querySelector('.header__btn');

async function getResponse(api) {
  try {
    const response = await fetch(api);

    if (response.ok) {
      const data = await response.json();

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
      foto = '/placeholder.jpg';
    } else {
      foto = `data:image/jpeg;base64,${item.Картинка}`;
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
              <h4 class="total">${item.Остаток} ${item.Единица}</h4>
            </div>
            <div class="table__item table__item_bottom">
              <p>Цена</p>
              <h4 class="price">${item.Цена} руб.</h4>
            </div>
          </div>
        </div>`;
  });

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

  table.innerHTML = list;
}

buttonUpdate.addEventListener('click', function () {
  tableContainer.innerHTML = '';
  getResponse(apiLink5);
});
