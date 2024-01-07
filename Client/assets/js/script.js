let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://striveschool-api.herokuapp.com/api/deezer/artist/150');
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        let json = xhr.responseText;
        let obj = JSON.parse(json);
        console.log(obj)
    }
} 

const url = 'http://localhost:3000/';


//Funzione per vedere gli oggetti dell'array album applicati a schermo
const getAllAlbum = () => {
  fetch(url + 'album', {
    method : "GET"
  })
  .then(response => response.json())
  .then(json =>{
    let shuffletAlbum = json.sort(() => Math.random() - 0.5);
    let selectAlbums = shuffletAlbum.slice(0, 19);
    productsTable(selectAlbums);
  } )
  .catch(err => console.log(err));
}
getAllAlbum();

function productsTable(album){
    let tableBody = document.querySelector('#tableBody');
    tableBody.innerHTML = '';
    album.forEach(album => {
      const row = `
      <tr class="table-row-left">
        <td class="album-table-left">
            <a href="album.html?id=${album.id}" class="d-flex text-white ">
              
              <div class="d-flex album mt-1 me-0 ms-2 mb-0">
                <div class="icona-album me-2 rounded-2">
                  <img src="${album.cover_small}" alt="foto album" class="img-fluid rounded-1 pd-2">
                </div>
                <div class="song-info">
                  <div class="title">${album.title}</div>
                      <div>Album 
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                          </svg> ${album.artist.name}
                      </div>
                  </div>
                </div>
            </a>   
        </td>
        
        <td class="data-aggiunta m-3 d-none">
          <div class="data h-100 d-flex align-items-center">
            <span>2 giorni</span>
          </div>
        </td>
        <td class="riprodotto m-3 d-none"></td>
      </tr>
      `
      tableBody.innerHTML += row;
    });
}

//Funzione per mettere un saluto quando apri l'applicazione
function saluta() {
  var saluto = "";
  var ora = new Date().getHours();

  if (ora >= 5 && ora < 12) {
      saluto = "Buongiorno";
  } else if (ora >= 12 && ora < 18) {
      saluto = "Buon pomeriggio";
  } else {
      saluto = "Buonasera";
  }

  document.getElementById("saluto").innerHTML = saluto;
}
  
// Chiama la funzione saluta quando la pagina è completamente caricata
window.onload = saluta;

//
const getCaselle = () => {
  fetch(url + 'album', {
    method : "GET"
  })
  .then(response => response.json())
  .then(json => {
    let shuffletAlbum = json.sort(() => Math.random() - 0.5);
    let selectAlbums = shuffletAlbum.slice(0, 6);
    productsCaselle(selectAlbums);
  })
  .catch(err => console.log(err));
}
getCaselle();
  
  
function productsCaselle(album){
  let tableBody = document.querySelector('#container-caselle');
  tableBody.innerHTML = '';
  album.forEach(album => {
    const row = `
    <a href="album.html?id=${album.id}">
      <div class="d-flex album-caselle align-items-center me-2 mb-2">
      <div class="play-card">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
        </svg>
      </div> 
        <img src="${album.cover_small}" alt="foto dell'album">
        <div class="title d-flex ms-3">${album.title}</div>
        </div>
    </a>`
    tableBody.innerHTML += row;
    cardsAnimation();
  })
}

const getPlaylistcreatePerte = () => {
  fetch(url + 'album', {
    method : "GET"
  })
  .then(response => response.json())
  .then(json => {
    let shuffletAlbum = json.sort(() => Math.random() - 0.5);
    let selectAlbums = shuffletAlbum.slice(0, 5);
    PlaylistcreatePerte(selectAlbums);
  })
  .catch(err => console.log(err));
}
getPlaylistcreatePerte();

function PlaylistcreatePerte(album){
  let cardsContainer = document.querySelector("#playlist-create-per-te");
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("col-6", "col-md-4", "col-lg-3", "col-xl-2");
  cardsContainer.innerHTML = '';
  album.forEach(album => {
    const col = `
      <div class="card rounded-4 mx-2">
        <div class="play-head-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </div>
        <a href="album.html?id=${album.id}">
          <div class="rounded-4 overflow-hidden p-3">
            <img src="${album.cover}" class="card-img-top img-fluid rounded-4" alt="${album.title}">
          </div>
          <div class="card-body">            
            <h5 class="card-title text-white d-flex fs-6 fw-bold">${album.title}</h5>
            <p class="card-text fw-bold">
              <a href="artist.html?id=${album.artist.id}">
                ${album.artist.name}
              </a>
            <p>  
          </div>
        </a>
      </div>`
    cardsContainer.innerHTML += col;
    cardsAnimation();
  })
}

const getPlaylistMixpreferiti = () => {
  fetch(url + 'album', {
    method : "GET"
  })
  .then(response => response.json())
  .then(json => {
    let shuffletAlbum = json.sort(() => Math.random() - 0.5);
    let selectAlbums = shuffletAlbum.slice(0, 5);
    PlaylistMixpreferiti(selectAlbums);
  })
  .catch(err => console.log(err));
}
getPlaylistMixpreferiti();

function PlaylistMixpreferiti(album){
  let cardsContainer = document.querySelector("#playlist-i-tuoi-mix-preferiti");
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("col-6", "col-md-4", "col-lg-3", "col-xl-2");
  cardsContainer.innerHTML = '';
  album.forEach(album => {
    const col = `
      <div class="card rounded-4 mx-2">
        <div class="play-head-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </div>
        <a href="album.html?id=${album.id}">
          <div class="rounded-4 overflow-hidden p-3">
            <img src="${album.cover}" class="card-img-top img-fluid rounded-4" alt="${album.title}">
          </div>
          <div class="card-body">            
            <h5 class="card-title text-white d-flex fs-6 fw-bold">${album.title}</h5>
            <p class="card-text fw-bold">
              <a href="artist.html?id=${album.artist.id}">
                ${album.artist.name}
              </a>
            <p>  
          </div>
        </a>
      </div>`
    cardsContainer.innerHTML += col;
    cardsAnimation();
  })
}

const getPlaylistAscoltatedirecente = () => {
  fetch(url + 'album', {
    method : "GET"
  })
  .then(response => response.json())
  .then(json => {
    let shuffletAlbum = json.sort(() => Math.random() - 0.5);
    let selectAlbums = shuffletAlbum.slice(0, 5);
    PlaylistAscoltatedirecente(selectAlbums);
  })
  .catch(err => console.log(err));
}
getPlaylistAscoltatedirecente();

function PlaylistAscoltatedirecente(album){
  let cardsContainer = document.querySelector("#playlist-ascoltate-di-recente");
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("col-6", "col-md-4", "col-lg-3", "col-xl-2");
  cardsContainer.innerHTML = '';
  album.forEach(album => {
    const col = `
      <div class="card rounded-4 mx-2">
        <div class="play-head-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </div>
        <a href="album.html?id=${album.id}">
          <div class="rounded-4 overflow-hidden p-3">
            <img src="${album.cover}" class="card-img-top img-fluid rounded-4" alt="${album.title}">
          </div>
          <div class="card-body">            
            <h5 class="card-title text-white d-flex fs-6 fw-bold">${album.title}</h5>
            <p class="card-text fw-bold">
              <a href="artist.html?id=${album.artist.id}">
                ${album.artist.name}
              </a>
            <p>  
          </div>
        </a>
      </div>`
    cardsContainer.innerHTML += col;
    cardsAnimation();
  })
}

const getPlaylistinbaseAscoltatedirecente = () => {
  fetch(url + 'album', {
    method : "GET"
  })
  .then(response => response.json())
  .then(json => {
    let shuffletAlbum = json.sort(() => Math.random() - 0.5);
    let selectAlbums = shuffletAlbum.slice(0, 5);
    PlaylistinbaseAscoltatedirecente(selectAlbums);
  })
  .catch(err => console.log(err));
}
getPlaylistinbaseAscoltatedirecente();

function PlaylistinbaseAscoltatedirecente(album){
  let cardsContainer = document.querySelector("#playlist-in-base-ascoltato-di-recente");
  cardsContainer.classList.add("mt-1");
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("col-6", "col-md-4", "col-lg-3", "col-xl-2");
  cardsContainer.innerHTML = '';
  album.forEach(album => {
    const col = `
      <div class="card rounded-4 mx-2">
        <div class="play-head-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </div>
        <a href="album.html?id=${album.id}">
          <div class="rounded-4 overflow-hidden p-3">
            <img src="${album.cover}" class="card-img-top img-fluid rounded-4" alt="${album.title}">
          </div>
          <div class="card-body">            
            <h5 class="card-title text-white d-flex fs-6 fw-bold">${album.title}</h5>
            <p class="card-text fw-bold">
              <a href="artist.html?id=${album.artist.id}">
                ${album.artist.name}
              </a>
            <p>  
          </div>
        </a>
      </div>`
    cardsContainer.innerHTML += col;
    cardsAnimation();
  })
}

const getPlaylistepisodiperTe = () => {
  fetch(url + 'album', {
    method : "GET"
  })
  .then(response => response.json())
  .then(json => {
    let shuffletAlbum = json.sort(() => Math.random() - 0.5);
    let selectAlbums = shuffletAlbum.slice(0, 5);
    PlaylistepisodiperTe(selectAlbums);
  })
  .catch(err => console.log(err));
}
getPlaylistepisodiperTe();

function PlaylistepisodiperTe(album){
  let cardsContainer = document.querySelector("#playlist-episodi-per-te");
  cardsContainer.classList.add("mt-1");
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("col-6", "col-md-4", "col-lg-3", "col-xl-2");
  cardsContainer.innerHTML = '';
  album.forEach(album => {
    const col = `
      <div class="card rounded-4 mx-2">
        <div class="play-head-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </div>
        <a href="album.html?id=${album.id}">
          <div class="rounded-4 overflow-hidden p-3">
            <img src="${album.cover}" class="card-img-top img-fluid rounded-4" alt="${album.title}">
          </div>
          <div class="card-body">            
            <h5 class="card-title text-white d-flex fs-6 fw-bold">${album.title}</h5>
            <p class="card-text fw-bold">
              <a href="artist.html?id=${album.artist.id}">
                ${album.artist.name}
              </a>
            <p>  
          </div>
        </a>
      </div>`
    cardsContainer.innerHTML += col;
    cardsAnimation();
  })
}

const getPlaylisttuttedaScoprire = () => {
  fetch(url + 'album', {
    method : "GET"
  })
  .then(response => response.json())
  .then(json => {
    let shuffletAlbum = json.sort(() => Math.random() - 0.5);
    let selectAlbums = shuffletAlbum.slice(0, 5);
    PlaylisttuttedaScoprire(selectAlbums);
  })
  .catch(err => console.log(err));
}
getPlaylisttuttedaScoprire();

function PlaylisttuttedaScoprire(album){
  let cardsContainer = document.querySelector("#playlist-tutte-da-scoprire");
  cardsContainer.classList.add("mt-1");
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("col-6", "col-md-4", "col-lg-3", "col-xl-2");
  cardsContainer.innerHTML = '';
  album.forEach(album => {
    const col = `
      <div class="card rounded-4 mx-2">
        <div class="play-head-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </div>
        <a href="album.html?id=${album.id}">
          <div class="rounded-4 overflow-hidden p-3">
            <img src="${album.cover}" class="card-img-top img-fluid rounded-4" alt="${album.title}">
          </div>
          <div class="card-body">            
            <h5 class="card-title text-white d-flex fs-6 fw-bold">${album.title}</h5>
            <p class="card-text fw-bold">
              <a href="artist.html?id=${album.artist.id}">
                ${album.artist.name}
              </a>
            <p>  
          </div>
        </a>
      </div>`
    cardsContainer.innerHTML += col;
    cardsAnimation();
  })
}

const getPlaylistmeglioArtisti = () => {
  fetch(url + 'album', {
    method : "GET"
  })
  .then(response => response.json())
  .then(json => {
    let shuffletAlbum = json.sort(() => Math.random() - 0.5);
    let selectAlbums = shuffletAlbum.slice(0, 5);
    PlaylistmeglioArtisti(selectAlbums);
  })
  .catch(err => console.log(err));
}
getPlaylistmeglioArtisti();

function PlaylistmeglioArtisti(album){
  let cardsContainer = document.querySelector("#playlist-il-meglio-degli-artisti");
  cardsContainer.classList.add("mt-1");
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("col-6", "col-md-4", "col-lg-3", "col-xl-2");
  cardsContainer.innerHTML = '';
  album.forEach(album => {
    const col = `
      <div class="card rounded-4 mx-2">
        <div class="play-head-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </div>
        <a href="album.html?id=${album.id}">
          <div class="rounded-4 overflow-hidden p-3">
            <img src="${album.cover}" class="card-img-top img-fluid rounded-4" alt="${album.title}">
          </div>
          <div class="card-body">            
            <h5 class="card-title text-white d-flex fs-6 fw-bold">${album.title}</h5>
            <p class="card-text fw-bold">
              <a href="artist.html?id=${album.artist.id}">
                ${album.artist.name}
              </a>
            <p>  
          </div>
        </a>
      </div>`
    cardsContainer.innerHTML += col;
    cardsAnimation();
  })
}

const getPlayliststazioniConsigliate = () => {
  fetch(url + 'album', {
    method : "GET"
  })
  .then(response => response.json())
  .then(json => {
    let shuffletAlbum = json.sort(() => Math.random() - 0.5);
    let selectAlbums = shuffletAlbum.slice(0, 5);
    PlayliststazioniConsigliate(selectAlbums);
  })
  .catch(err => console.log(err));
}
getPlayliststazioniConsigliate();

function PlayliststazioniConsigliate(album){
  let cardsContainer = document.querySelector("#playlist-stazioni-consigliate");
  cardsContainer.classList.add("mt-1");
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("col-6", "col-md-4", "col-lg-3", "col-xl-2");
  cardsContainer.innerHTML = '';
  album.forEach(album => {
    const col = `
      <div class="card rounded-4 mx-2">
        <div class="play-head-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </div>
        <a href="album.html?id=${album.id}">
          <div class="rounded-4 overflow-hidden p-3">
            <img src="${album.cover}" class="card-img-top img-fluid rounded-4" alt="${album.title}">
          </div>
          <div class="card-body">            
            <h5 class="card-title text-white d-flex fs-6 fw-bold">${album.title}</h5>
            <p class="card-text fw-bold">
              <a href="artist.html?id=${album.artist.id}">
                ${album.artist.name}
              </a>
            <p>  
          </div>
        </a>
      </div>`
    cardsContainer.innerHTML += col;
    cardsAnimation();
  })
}

const getPlayliststazioniRadio = () => {
  fetch(url + 'album', {
    method : "GET"
  })
  .then(response => response.json())
  .then(json => {
    let shuffletAlbum = json.sort(() => Math.random() - 0.5);
    let selectAlbums = shuffletAlbum.slice(0, 5);
    PlayliststazioniRadio(selectAlbums);
  })
  .catch(err => console.log(err));
}
getPlayliststazioniRadio();

function PlayliststazioniRadio(album){
  let cardsContainer = document.querySelector("#playlist-stazioni-radio-popolari");
  cardsContainer.classList.add("mt-1");
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("col-6", "col-md-4", "col-lg-3", "col-xl-2");
  cardsContainer.innerHTML = '';
  album.forEach(album => {
    const col = `
      <div class="card rounded-4 mx-2">
        <div class="play-head-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </div>
        <a href="album.html?id=${album.id}">
          <div class="rounded-4 overflow-hidden p-3">
            <img src="${album.cover}" class="card-img-top img-fluid rounded-4" alt="${album.title}">
          </div>
          <div class="card-body">            
            <h5 class="card-title text-white d-flex fs-6 fw-bold">${album.title}</h5>
            <p class="card-text fw-bold">
              <a href="artist.html?id=${album.artist.id}">
                ${album.artist.name}
              </a>
            <p>  
          </div>
        </a>
      </div>`
    cardsContainer.innerHTML += col;
    cardsAnimation();
  })
}

const getPlaylistAnni80 = () => {
  fetch(url + 'album', {
    method : "GET"
  })
  .then(response => response.json())
  .then(json => {
    let shuffletAlbum = json.sort(() => Math.random() - 0.5);
    let selectAlbums = shuffletAlbum.slice(0, 5);
    PlaylistAnni80(selectAlbums);
  })
  .catch(err => console.log(err));
}
getPlaylistAnni80();

function PlaylistAnni80(album){
  let cardsContainer = document.querySelector("#playlist-altri-come-anni-80");
  cardsContainer.classList.add("mt-1");
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("col-6", "col-md-4", "col-lg-3", "col-xl-2");
  cardsContainer.innerHTML = '';
  album.forEach(album => {
    const col = `
      <div class="card rounded-4 mx-2">
        <div class="play-head-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </div>
        <a href="album.html?id=${album.id}">
          <div class="rounded-4 overflow-hidden p-3">
            <img src="${album.cover}" class="card-img-top img-fluid rounded-4" alt="${album.title}">
          </div>
          <div class="card-body">            
            <h5 class="card-title text-white d-flex fs-6 fw-bold">${album.title}</h5>
            <p class="card-text fw-bold">
              <a href="artist.html?id=${album.artist.id}">
                ${album.artist.name}
              </a>
            <p>  
          </div>
        </a>
      </div>`
    cardsContainer.innerHTML += col;
    cardsAnimation();
  })
}

const getPlaylistMood = () => {
  fetch(url + 'album', {
    method : "GET"
  })
  .then(response => response.json())
  .then(json => {
    let shuffletAlbum = json.sort(() => Math.random() - 0.5);
    let selectAlbums = shuffletAlbum.slice(0, 5);
    PlaylistMood(selectAlbums);
  })
  .catch(err => console.log(err));
}
getPlaylistMood();

function PlaylistMood(album){
  let cardsContainer = document.querySelector("#playlist-mood");
  cardsContainer.classList.add("mt-1");
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("col-6", "col-md-4", "col-lg-3", "col-xl-2");
  cardsContainer.innerHTML = '';
  album.forEach(album => {
    const col = `
      <div class="card rounded-4 mx-2">
        <div class="play-head-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </div>
        <a href="album.html?id=${album.id}">
          <div class="rounded-4 overflow-hidden p-3">
            <img src="${album.cover}" class="card-img-top img-fluid rounded-4" alt="${album.title}">
          </div>
          <div class="card-body">            
            <h5 class="card-title text-white d-flex fs-6 fw-bold">${album.title}</h5>
            <p class="card-text fw-bold">
              <a href="artist.html?id=${album.artist.id}">
                ${album.artist.name}
              </a>
            <p>  
          </div>
        </a>
      </div>`
    cardsContainer.innerHTML += col;
    cardsAnimation();
  })
}

const getPlaylistAllenamento = () => {
  fetch(url + 'album', {
    method : "GET"
  })
  .then(response => response.json())
  .then(json => {
    let shuffletAlbum = json.sort(() => Math.random() - 0.5);
    let selectAlbums = shuffletAlbum.slice(0, 5);
    PlaylistAllenamento(selectAlbums);
  })
  .catch(err => console.log(err));
}
getPlaylistAllenamento();

function PlaylistAllenamento(album){
  let cardsContainer = document.querySelector("#playlist-allenamento");
  cardsContainer.classList.add("mt-1");
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("col-6", "col-md-4", "col-lg-3", "col-xl-2");
  cardsContainer.innerHTML = '';
  album.forEach(album => {
    const col = `
      <div class="card rounded-4 mx-2">
        <div class="play-head-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </div>
        <a href="album.html?id=${album.id}">
          <div class="rounded-4 overflow-hidden p-3">
            <img src="${album.cover}" class="card-img-top img-fluid rounded-4" alt="${album.title}">
          </div>
          <div class="card-body">            
            <h5 class="card-title text-white d-flex fs-6 fw-bold">${album.title}</h5>
            <p class="card-text fw-bold">
              <a href="artist.html?id=${album.artist.id}">
                ${album.artist.name}
              </a>
            <p>  
          </div>
        </a>
      </div>`
    cardsContainer.innerHTML += col;
    cardsAnimation();
  })
}

const getPlaylistgrandisuccessiOggi = () => {
  fetch(url + 'album', {
    method : "GET"
  })
  .then(response => response.json())
  .then(json => {
    let shuffletAlbum = json.sort(() => Math.random() - 0.5);
    let selectAlbums = shuffletAlbum.slice(0, 5);
    PlaylistgrandisuccessiOggi(selectAlbums);
  })
  .catch(err => console.log(err));
}
getPlaylistgrandisuccessiOggi();

function PlaylistgrandisuccessiOggi(album){
  let cardsContainer = document.querySelector("#playlist-i-grandi-successi-di-oggi");
  cardsContainer.classList.add("mt-1");
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("col-6", "col-md-4", "col-lg-3", "col-xl-2");
  cardsContainer.innerHTML = '';
  album.forEach(album => {
    const col = `
      <div class="card rounded-4 mx-2">
        <div class="play-head-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </div>
        <a href="album.html?id=${album.id}">
          <div class="rounded-4 overflow-hidden p-3">
            <img src="${album.cover}" class="card-img-top img-fluid rounded-4" alt="${album.title}">
          </div>
          <div class="card-body">            
            <h5 class="card-title text-white d-flex fs-6 fw-bold">${album.title}</h5>
            <p class="card-text fw-bold">
              <a href="artist.html?id=${album.artist.id}">
                ${album.artist.name}
              </a>
            <p>  
          </div>
        </a>
      </div>`
    cardsContainer.innerHTML += col;
    cardsAnimation();
  })
}

function cardsAnimation() {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    let freccia = card.querySelector(".play-head-card");
    card.addEventListener("mouseover", () => {
      freccia.style.opacity = "1";
      freccia.style.transform = "translateY(-10px)";
      freccia.style.transition = "all 0.3s ease";
      card.style.backgroundColor = "#2e2e2e";
    });

    card.addEventListener("mouseout", () => {
      freccia.style.opacity = "0";
      freccia.style.transform = "";
      card.style.backgroundColor = "#181818";
    });
  });
}

cardsAnimation();

/* const searchURL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
let query = "Axwell";
search(query);

async function search(query) {
  const response = await fetch(`${searchURL}/${query}`);
  const data = await response.json();
  console.log(data);
} */