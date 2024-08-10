const apiLink = "https://jsonplaceholder.typicode.com/posts";
const apiLink2 = "https://jsonplaceholder.typicode.com/albums";

const tableContainer = document.querySelector(".table__container");
const buttonUpdate = document.querySelector(".header__btn");

async function getResponse(api) {
  try {
    const response = await fetch(api);
    if (response.ok) {
      const data = await response.json();

      createTable(data);
    } else {
      console.log("Error HTTP: " + response.status);
    }
  } catch (error) {
    console.log("Ошибка в запросе:" + error.message);
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

getResponse(apiLink);

function createTable(array) {
  array.reverse().forEach((item) => {
    const tableTemplate = document.querySelector("#table-template").content;
    const tableElement = tableTemplate.querySelector(".table").cloneNode(true);

    if (!item.id) {
      tableElement.querySelector(".id__array").textContent = "нет данных";
    } else {
      tableElement.querySelector(".id__array").textContent = item.id;
    }

    if (!item.title) {
      tableElement.querySelector(".title__array").textContent = "нет данных";
    } else {
      tableElement.querySelector(".title__array").textContent = item.title;
    }

    if (!item.body) {
      tableElement.querySelector(".body__array").textContent = "нет данных";
    } else {
      tableElement.querySelector(".body__array").textContent = item.body;
    }

    tableContainer.prepend(tableElement);
  });
}

buttonUpdate.addEventListener("click", function () {
  tableContainer.innerHTML = "";
  getResponse(apiLink2);
});
