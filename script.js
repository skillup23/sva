// async function getData() {
//   const result = await fetch('https://jsonplaceholder.typicode.com/posts')
//   if(!result.ok) {
//     throw new Error(Error status:" ${res.status} from ${res.url()});
// }
// return result.json();
// }

// async function getData(url) {
//   const result = await fetch(url);
//   if (!result.ok) {
//     throw new Error(Error, ' ${res.status} from ${res.url()}');
//   }
//   return result.json();
// }

// let arr = [];

// // Создаем массив Promise-объектов для запросов
// const promises = function () {
//   return getData(`https://jsonplaceholder.typicode.com/posts`);
// };

// Promise.all(promises)
//   .then((data) => {
//     // Объединяем все данные в один массив
//     // arr = data.flat();
//     data.forEach(createTable);
//     console.log(arr[0]); // Выводим первый элемент массива
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// .then((response) => response.json())
// .then((data) => {
//   console.log(data);
//   data.forEach(createTable);
// })
// .catch((err) => {
//   console.log('Ошибка. Запрос не выполнен: ', err);
// });
// getData();

async function fetchUsers(endpoint) {
  const res = await fetch(endpoint);
  const data = await res.json();
  return data;
}

fetchUsers('https://jsonplaceholder.typicode.com/posts').then((data) => {
  console.log(data);
  data.map(createTable);
  // data.forEach(createTable);

  function createTable(item) {
    const tableContainer = document.querySelector('.table__container');
    const tableTemplate = document.querySelector('#table-template').content;
    const tableElement = tableTemplate.querySelector('.table').cloneNode(true);

    tableElement.querySelector('.id__array').textContent = item.id;
    tableElement.querySelector('.title__array').textContent = item.title;
    tableElement.querySelector('.body__array').textContent = item.body;

    tableContainer.prepend(cardElement);
  }
});

// document.querySelector('.header__btn').addEventListener('click', updateArray);
