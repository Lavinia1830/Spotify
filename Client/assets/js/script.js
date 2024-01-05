let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://striveschool-api.herokuapp.com/api/deezer/album/99999392');
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
  .then(json => productsTable(json))
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
          <div class="d-flex m-3 mb-0">
            <a href="album.html?id=${album.id}" class="d-flex text-white">
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
          </div>
        </td>
        
        <td class="data-aggiunta m-3">
          <div class="data h-100 d-flex align-items-center">
            <span>2 giorni</span>
          </div>
        </td>
        <td class="riprodotto m-3"></td>
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
    .then(json => productsCaselle(json))
    .catch(err => console.log(err));
  }
  getCaselle();
  
  
  function productsCaselle(albums){
    let tableBody = document.querySelector('#container-caselle');
    tableBody.innerHTML = '';
    for(let i=19; i<Math.min(25, albums.length); i++ ){
      const album = albums[i];
      const row = `
      <a href="album.html?id=${album.id}">
        <div class="d-flex album-caselle align-items-center me-2 mb-2">
          <img src="${album.cover_small}" alt="foto dell'album">
          <div class="title d-flex ms-3">${album.title}</div>
          </div>
      </a>`
      tableBody.innerHTML += row;
    }
  
      
        
  }
  
  const getPlaylist = () => {
    fetch(url + 'album', {
      method : "GET"
    })
    .then(response => response.json())
    .then(json => productsPlaylist(json))
    .catch(err => console.log(err));
  }
  getPlaylist();
  
  function productsPlaylist(albums){
    let cardsContainer = document.querySelector(".playlist-cards-container");
    cardsContainer.classList.add("mt-1");
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("col-6", "col-md-4", "col-lg-3", "col-xl-2");
    cardsContainer.innerHTML = '';
    for(let i=26; i<Math.min(33,albums.length); i++ ){
      const album = albums[i];
      const row = `
      <div class="card rounded-4 m-0">
        <div class="play-artist-head-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </div> 
        <a href="album.html?id=${album.id}">
          <div class="rounded-4 overflow-hidden p-4">
            <img src="${album.cover}" class="card-img-top img-fluid rounded-4" alt="${album.title}">
          </div>
          <div class="card-body">            
            <h5 class="card-title text-white d-flex fs-6">${album.title}</h5>
            <a href="artist.html?id=${album.artist.id}">
              <p class="card-text">
                ${album.artist.name}
              <p>
            </a>
          </div> 
        </a>
      </div>`
      cardsContainer.innerHTML += row;
    };  
  }
