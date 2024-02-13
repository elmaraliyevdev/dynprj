// RenderProducts

let bestSeller = document.getElementById("best_seller");

const renderData = async () => {
  best_seller.innerHTML = ""
  const res = await fetch(
    `http://localhost:3000/posts`
  );
  const data = await res.json();
  console.log(data);
  data.forEach((item) => {
    let miniDiv = document.createElement("div");
    miniDiv.className = "miniDiv";
    miniDiv.innerHTML = `
    <a href="${item.link}" target="_blank">
    <img src="${item.image}" alt="${item.name}">
    <div class="markaName">  
    <p>${item.marka}</p>
    <h4>${item.name}</h4>
    </div>
    <p class= "lowerPrice"><i class="fa-regular fa-arrow-trend-down"></i> Son 30 Günün En Düşük Fiyatı!</p>
    <p>${item.price} TL</p>
    </a>
    `;
    bestSeller.append(miniDiv);
  });
};

window.onload = () => {
  renderData();
};


// SearchByName
const serachInput = document.getElementById("serachInput");
const best_seller = document.getElementById("best_seller");

const searchByName = async (name) => {
  try {
    const res = await fetch(`http://localhost:3000/posts`);
    const data = await res.json();

    let filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );

    best_seller.innerHTML = "";

    filteredData.forEach((item) => {
      let card = document.createElement("div");
      card.className = "miniDiv";
      card.innerHTML = `
    <a href="${item.link}" target="_blank">
    <img src="${item.image}" alt="${item.name}">
    <div class="markaName">  
    <p>${item.marka}</p>
    <h4>${item.name}</h4>
    </div>
    <p class= "lowerPrice"><i class="fa-regular fa-arrow-trend-down"></i> Son 30 Günün En Düşük Fiyatı!</p>
    <p>${item.price} TL</p>
    </a>
      `;
      best_seller.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

serachInput.addEventListener("input", (e) => {
  searchByName(e.target.value);
});


// Sort Defacto
const defactoButton = document.getElementById("defacto");

defactoButton.addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/posts");
    const data = await res.json();

    const defactoPosts = data.filter(item => item.marka === "Defacto");

    defactoPosts.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    renderPosts(defactoPosts);
  }
  catch (error) {
    console.error("Error fetching data:", error);
  }
});

function renderPosts(posts) {
  best_seller.innerHTML = "";
  posts.forEach(item => {
    let card = document.createElement("div");
    card.className = "miniDiv";
    card.innerHTML = `
    <a href="${item.link}" target="_blank">
    <img src="${item.image}" alt="${item.name}">
    <div class="markaName">  
    <p>${item.marka}</p>
    <h4>${item.name}</h4>
    </div>
    <p class= "lowerPrice"><i class="fa-regular fa-arrow-trend-down"></i> Son 30 Günün En Düşük Fiyatı!</p>
    <p>${item.price} TL</p>
    </a>
      `;
    best_seller.appendChild(card);
  });
}

// Sort Bershka
const bershkaButton = document.getElementById("bershka");

bershkaButton.addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/posts");
    const data = await res.json();

    const bershkaPosts = data.filter(item => item.marka === "Bershka");

    bershkaPosts.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    renderPosts(bershkaPosts);
  }
  catch (error) {
    console.error("Error fetching data:", error);
  }
});

function renderPosts(posts) {
  best_seller.innerHTML = "";
  posts.forEach(item => {
    let card = document.createElement("div");
    card.className = "miniDiv";
    card.innerHTML = `
    <a href="${item.link}" target="_blank">
    <img src="${item.image}" alt="${item.name}">
    <div class="markaName">  
    <p>${item.marka}</p>
    <h4>${item.name}</h4>
    </div>
    <p class= "lowerPrice"><i class="fa-regular fa-arrow-trend-down"></i> Son 30 Günün En Düşük Fiyatı!</p>
    <p>${item.price} TL</p>
    </a>
      `;
    best_seller.appendChild(card);
  });
}




// Sort Pull Bear
const pullBearButton = document.getElementById("pullBear");

pullBearButton.addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/posts");
    const data = await res.json();

    const pullBearPosts = data.filter(item => item.marka === "Pull & Bear");

    pullBearPosts.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    renderPosts(pullBearPosts);
  }
  catch (error) {
    console.error("Error fetching data:", error);
  }
});

function renderPosts(posts) {
  best_seller.innerHTML = "";
  posts.forEach(item => {
    let card = document.createElement("div");
    card.className = "miniDiv";
    card.innerHTML = `
    <a href="${item.link}" target="_blank">
    <img src="${item.image}" alt="${item.name}">
    <div class="markaName">  
    <p>${item.marka}</p>
    <h4>${item.name}</h4>
    </div>
    <p class= "lowerPrice"><i class="fa-regular fa-arrow-trend-down"></i> Son 30 Günün En Düşük Fiyatı!</p>
    <p>${item.price} TL</p>
    </a>
      `;
    best_seller.appendChild(card);
  });
}




// Sort Koton
const kotonButton = document.getElementById("koton");

kotonButton.addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/posts");
    const data = await res.json();

    const kotonPosts = data.filter(item => item.marka === "Koton");

    kotonPosts.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    renderPosts(kotonPosts);
  }
  catch (error) {
    console.error("Error fetching data:", error);
  }
});

function renderPosts(posts) {
  best_seller.innerHTML = "";
  posts.forEach(item => {
    let card = document.createElement("div");
    card.className = "miniDiv";
    card.innerHTML = `
    <a href="${item.link}" target="_blank">
    <img src="${item.image}" alt="${item.name}">
    <div class="markaName">  
    <p>${item.marka}</p>
    <h4>${item.name}</h4>
    </div>
    <p class= "lowerPrice"><i class="fa-regular fa-arrow-trend-down"></i> Son 30 Günün En Düşük Fiyatı!</p>
    <p>${item.price} TL</p>
    </a>
      `;
    best_seller.appendChild(card);
  });
}


// Sort Stradivarius
const stradivariusButton = document.getElementById("stradivarius");

stradivariusButton.addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/posts");
    const data = await res.json();

    const stradivariusPosts = data.filter(item => item.marka === "Stradivarius");

    stradivariusPosts.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    renderPosts(stradivariusPosts);
  }
  catch (error) {
    console.error("Error fetching data:", error);
  }
});

function renderPosts(posts) {
  best_seller.innerHTML = "";
  posts.forEach(item => {
    let card = document.createElement("div");
    card.className = "miniDiv";
    card.innerHTML = `
    <a href="${item.link}" target="_blank">
    <img src="${item.image}" alt="${item.name}">
    <div class="markaName">  
    <p>${item.marka}</p>
    <h4>${item.name}</h4>
    </div>
    <p class= "lowerPrice"><i class="fa-regular fa-arrow-trend-down"></i> Son 30 Günün En Düşük Fiyatı!</p>
    <p>${item.price} TL</p>
    </a>
      `;
    best_seller.appendChild(card);
  });
}


// Sort Mavi
const maviButton = document.getElementById("mavi");

maviButton.addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/posts");
    const data = await res.json();

    const maviPosts = data.filter(item => item.marka === "Mavi");

    maviPosts.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    renderPosts(maviPosts);
  }
  catch (error) {
    console.error("Error fetching data:", error);
  }
});

function renderPosts(posts) {
  best_seller.innerHTML = "";
  posts.forEach(item => {
    let card = document.createElement("div");
    card.className = "miniDiv";
    card.innerHTML = `
    <a href="${item.link}" target="_blank">
    <img src="${item.image}" alt="${item.name}">
    <div class="markaName">  
    <p>${item.marka}</p>
    <h4>${item.name}</h4>
    </div>
    <p class= "lowerPrice"><i class="fa-regular fa-arrow-trend-down"></i> Son 30 Günün En Düşük Fiyatı!</p>
    <p>${item.price} TL</p>
    </a>
      `;
    best_seller.appendChild(card);
  });
}

// Sort Penti

const pentiButton = document.getElementById("penti");

pentiButton.addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/posts");
    const data = await res.json();

    const pentiPosts = data.filter(item => item.marka === "Penti");

    pentiPosts.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    renderPosts(pentiPosts);
  }
  catch (error) {
    console.error("Error fetching data:", error);
  }
});

function renderPosts(posts) {
  best_seller.innerHTML = "";
  posts.forEach(item => {
    let card = document.createElement("div");
    card.className = "miniDiv";
    card.innerHTML = `
    <a href="${item.link}" target="_blank">
    <img src="${item.image}" alt="${item.name}">
    <div class="markaName">  
    <p>${item.marka}</p>
    <h4>${item.name}</h4>
    </div>
    <p class= "lowerPrice"><i class="fa-regular fa-arrow-trend-down"></i> Son 30 Günün En Düşük Fiyatı!</p>
    <p>${item.price} TL</p>
    </a>
      `;
    best_seller.appendChild(card);
  });
}


// Default halı

const defaultProducts = document.getElementById("defaultProducts")
defaultProducts.addEventListener("click",renderData)