/* Descrizione:
Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti.
Gli attributi minimi del modello di un post: id, contenuto, immagine,
autore (nome, avatar), numero di likes, data creazione.
Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.
 */

let posts = [
    {
        id: 1,
        contenuto: "lorem ipsum tutte cose tutte cose tutte cose e altre cose",
        immagine: "https://picsum.photos/500/500",
        autoreNome: "Jim",
        autoreAvatar: "https://picsum.photos/50/50",
        numeroLikes: 10,
        dataCreazione: "1 giorno fa",

    },
    {
        id: 2,
        contenuto: "lorem ipsum tutte cose tutte cose tutte cose e altre cose",
        immagine: "https://picsum.photos/500/500",
        autoreNome: "Dweight",
        autoreAvatar: "https://picsum.photos/50/50",
        numeroLikes: 20,
        dataCreazione: "1 giorno fa",

    },
    {
        id: 3,
        contenuto: "lorem ipsum tutte cose tutte cose tutte cose e altre cose",
        immagine: "https://picsum.photos/500/500",
        autoreNome: "Ryan",
        autoreAvatar: "https://picsum.photos/50/50",
        numeroLikes: 50,
        dataCreazione: "1 giorno fa",

    },
    {
        id: 4,
        contenuto: "lorem ipsum tutte cose tutte cose tutte cose e altre cose",
        immagine: "https://picsum.photos/500/500",
        autoreNome: "Pam",
        autoreAvatar: "https://picsum.photos/50/50",
        numeroLikes: 30,
        dataCreazione: "1 giorno fa",

    },
    {
        id: 5,
        contenuto: "lorem ipsum tutte cose tutte cose tutte cose e altre cose",
        immagine: "https://picsum.photos/500/500",
        autoreNome: "Michael",
        autoreAvatar: "https://picsum.photos/50/50",
        numeroLikes: 49,
        dataCreazione: "1 giorno fa",

    },
    {
        id: 6,
        contenuto: "lorem ipsum tutte cose tutte cose tutte cose e altre cose",
        immagine: "https://picsum.photos/500/500",
        autoreNome: "Angela",
        autoreAvatar: "https://picsum.photos/50/50",
        numeroLikes: 100,
        dataCreazione: "1 giorno fa",

    }
];


for (let i = 0; i < posts.length; i++) {
    let post = posts[i];

    let element = ` <div class="container">

                        <div class="autore">
                            <div class="img">
                                <img src="${post.autoreAvatar}" alt="randomImg">
                            </div>
                            <div class="nomeeData">
                                <p>
                                    ${post.autoreNome}
                                </p>
                                <p>
                                    ${post.dataCreazione}
                                </p>
                            </div>
                        </div>
                        <!-- autore -->
                        <div class="contenuto">
                            <p>
                                ${post.contenuto}
                            </p>
                            <div class="img">
                                <img src="${post.immagine}" alt="immagine">
                            </div>
                        </div>
                        <!-- contenuto -->
                        <div class="likes">
                            <button id="likeBtn">
                                <i class="fas fa-thumbs-up"></i>
                                Mi Piace
                            </button>
                            <p>
                                Piace a <span class="likesNumber"> ${post.numeroLikes} </span> persone
                            </p>
                        </div>
                    </div>`
        document.querySelector(".mainContainer").innerHTML += element
    
    }
/* STAMPATO POST A SCHERMO IN HTML */

    let listaPostLike = []

    let btn = document.querySelectorAll("#likeBtn");

    let likesSpan = document.querySelectorAll(".likesNumber");

    for (let i = 0; i < btn.length; i++) {
        let singleBtn = btn[i];
         let post = posts[i]
        let span = likesSpan[i]

         singleBtn.addEventListener("click", clickLikes)

         function clickLikes () {
             singleBtn.classList.add("active");
     
             console.log(post.numeroLikes);

             span.innerHTML = post.numeroLikes + 1;

             if (parseInt(span.textContent) > post.numeroLikes + 1) {
                 post.numeroLikes = post.numeroLikes + 1;
             }
             if (singleBtn.classList.contains("active")) {
                listaPostLike.push(post.id);
            }
            console.log(listaPostLike);
            
         }
        
         
         
     }

     




    
    
    



   