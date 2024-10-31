const apiLink4 = 'https://skillup23-backend-timeweb-b537.twc1.net/api/flowers';
const apiLink5 = 'http://localhost:3456/sva';
const apiLink6 = 'http://localhost:3456/api/flowers';

const tableContainer = document.querySelector('.table__container');
const loader = document.querySelector('.preloader__container');
const buttonAdd = document.querySelector('.button__add');

let flowersArray = [];
let defaltLimit = 40;
let defaltPage = 1;

// const hideLoader = () => {
//   loader.classList.remove('show');
//   // buttonAdd.classList.add('show');
// };

// const showLoader = () => {
//   loader.classList.add('show');
//   // buttonAdd.classList.remove('show');
// };

async function getResponse(api, page, limit) {
  // showLoader();
  const APIURL = `${api}/paginate?page=${page}&limit=${limit}`;
  try {
    const response = await fetch(APIURL);

    if (response.ok) {
      const data = await response.json();
      flowersArray = data;

      if (!data.next) {
        buttonAdd.classList.add('disable');
      }

      createTable(data.results);
    } else {
      console.log('Error HTTP: ' + response.status);
    }
  } catch (error) {
    console.log('Ошибка в запросе:' + error.message);
  } finally {
    // hideLoader();
    buttonAdd.disabled = false;
    buttonAdd.textContent = 'Загрузить еще';
  }
}

getResponse(apiLink4, defaltPage, defaltLimit);
// showLoader();

function createTable(array) {
  const table = document.querySelector('.table__container');

  array.forEach((item) => {
    if (!item.Картинка) {
      foto =
        'https://static.tildacdn.com/tild3561-3164-4465-b339-623231633235/placeholder.jpg';
    } else {
      foto = `data:image/jpeg;base64,${item.Картинка}`;
    }

    if (item.ГрадацияОстатков === '1') {
      totalImg =
        'https://static.tildacdn.com/tild3437-6333-4664-b233-633664376261/total-small.png';
    } else if (item.ГрадацияОстатков === '2') {
      totalImg =
        'https://static.tildacdn.com/tild6636-3739-4736-a331-336632396536/total-middle.png';
    } else {
      totalImg =
        'https://static.tildacdn.com/tild3832-6361-4430-a634-633836336162/total-big.png';
    }

    const flowEl = document.createElement('flowers');
    flowEl.classList.add('table');
    flowEl.innerHTML = `
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
              <p>Ед.изм.</p>
              <h4 class="unit">${item.Единица}</h4>
            </div>
            <div class="table__item table__item_bottom">
              <p>Цена</p>
              <h4 class="price">${item.Цена} руб.</h4>
            </div>
          </div>
        `;
    table.appendChild(flowEl);
  });
  // hideLoader();
}

buttonAdd.addEventListener('click', () => {
  // showLoader();
  buttonAdd.disabled = true;
  buttonAdd.textContent = 'Загрузка...';
  defaltPage++;
  getResponse(apiLink4, defaltPage, defaltLimit);
});

// window.addEventListener(
//   'scroll',
//   () => {
//     const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

//     if (scrollTop + clientHeight >= scrollHeight - 5) {
//       showLoader();
//       defaltPage++;
//       getResponse(apiLink4, defaltPage, 20);
//     }
//   },
//   {
//     passive: true,
//   }
// );

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

// const letterCon = document.querySelector('.letter__container');

// function filterFlowers(letter) {
//   const flowersArrayFilter = flowersArray.filter(function (item) {
//     return item.Номенклатура.startsWith(letter);
//   });

//   createTable(flowersArrayFilter);
// }

// letterCon
//   .querySelector('.all__btn')
//   .addEventListener('click', () => createTable(flowersArray));

// letterCon
//   .querySelector('.a__btn')
//   .addEventListener('click', () => filterFlowers('А'));
// letterCon
//   .querySelector('.v__btn')
//   .addEventListener('click', () => filterFlowers('В'));
// letterCon
//   .querySelector('.g__btn')
//   .addEventListener('click', () => filterFlowers('Г'));
// letterCon
//   .querySelector('.d__btn')
//   .addEventListener('click', () => filterFlowers('Д'));
// letterCon
//   .querySelector('.k__btn')
//   .addEventListener('click', () => filterFlowers('К'));
// letterCon
//   .querySelector('.l__btn')
//   .addEventListener('click', () => filterFlowers('Л'));
// letterCon
//   .querySelector('.m__btn')
//   .addEventListener('click', () => filterFlowers('М'));
// letterCon
//   .querySelector('.n__btn')
//   .addEventListener('click', () => filterFlowers('Н'));
// letterCon
//   .querySelector('.p__btn')
//   .addEventListener('click', () => filterFlowers('П'));
// letterCon
//   .querySelector('.r__btn')
//   .addEventListener('click', () => filterFlowers('Р'));
// letterCon
//   .querySelector('.s__btn')
//   .addEventListener('click', () => filterFlowers('С'));
// letterCon
//   .querySelector('.t__btn')
//   .addEventListener('click', () => filterFlowers('Т'));
// letterCon
//   .querySelector('.f__btn')
//   .addEventListener('click', () => filterFlowers('Ф'));
// letterCon
//   .querySelector('.h__btn')
//   .addEventListener('click', () => filterFlowers('Х'));
// letterCon
//   .querySelector('.tc__btn')
//   .addEventListener('click', () => filterFlowers('Ц'));
// letterCon
//   .querySelector('.sh__btn')
//   .addEventListener('click', () => filterFlowers('Ш'));
// letterCon
//   .querySelector('.e2__btn')
//   .addEventListener('click', () => filterFlowers('Э'));
