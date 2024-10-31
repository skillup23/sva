let currentPage = 1;
const limit = 3;
let total = 0;
const factsEl = document.querySelector('.facts');
const loader = document.querySelector('.loader');

const getfacts = async (page, limit) => {
  const API_URL = `https://catfact.ninja/facts?page=${page}&limit=${limit}`;
  const response = await fetch(API_URL);
  // handle 404
  if (!response.ok) {
    throw new Error(`An error occurred: ${response.status}`);
  }
  return await response.json();
};

const showfacts = (facts) => {
  facts.forEach((fact) => {
    const factEl = document.createElement('blockfact');
    factEl.classList.add('fact');
    factEl.innerHTML = `
            ${fact.fact}
        `;
    factsEl.appendChild(factEl);
  });
};

const hideLoader = () => {
  loader.classList.remove('show');
};

const showLoader = () => {
  loader.classList.add('show');
};

const hasMorefacts = (page, limit, total) => {
  const startIndex = (page - 1) * limit + 1;
  return total === 0 || startIndex < total;
};

const loadfacts = async (page, limit) => {
  // show the loader
  showLoader();
  try {
    // if having more facts to fetch
    if (hasMorefacts(page, limit, total)) {
      // call the API to get facts
      const response = await getfacts(page, limit);
      // show facts
      showfacts(response.data);
      // update the total
      total = response.total;
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    hideLoader();
  }
};

window.addEventListener(
  'scroll',
  () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (
      scrollTop + clientHeight >= scrollHeight - 5 &&
      hasMorefacts(currentPage, limit, total)
    ) {
      currentPage++;
      loadfacts(currentPage, limit);
    }
  },
  {
    passive: true,
  }
);

loadfacts(currentPage, limit);
