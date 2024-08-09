const urlLink = "https://jsonplaceholder.typicode.com/posts";
const urlLink2 = "https://jsonplaceholder.typicode.com/albums";

const tableContainer = document.querySelector(".table__container");
const buttonUpdate = document.querySelector(".header__btn");

async function getResponse(url) {
  let response = await fetch(url);
  let content = await response.json();

  tableContainer.innerHTML = "";

  content.reverse().forEach((element) => {
    createTable(element);
  });
}

getResponse(urlLink);

function createTable(item) {
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
}

buttonUpdate.addEventListener("click", function () {
  getResponse(urlLink2);
});
