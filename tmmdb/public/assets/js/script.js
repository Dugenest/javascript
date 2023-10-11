// Récupération données fichier json
fetch('movies.json')
    .then((response)=>{
        return response.json()
    })
    .then((datas)=>{
        // console.log(datas)
// Création de la boucle map pour l'objet
        datas.results.map(data => {
// Création des variables et récupération de chaque paramètre des objets (sauf les Id)
            let original_title = data.original_title;
            let overview = data.overview;
            let poster_path = data.poster_path;
            let vote_average = data.vote_average;
// Création de la structure des cards
            let card = `<div class="col-md-3 card">
            <img src="${poster_path}" class="card-img-top card-image" alt="...">
            <div class="card-body">
              <h5 id="card-title" class="card-title">${original_title}</h5>
              <details>
                <p class="card-text">${overview}</p>
              </details>
              <p id="card_note">Note : ${vote_average}</p>
            </div>
          </div>`
// Récupération de l'Id "lesCards"
            const divCard = document.getElementById('lesCards')
// Multiplication de la structure et insertion des données
            divCard.innerHTML += card
        });
    });
    
