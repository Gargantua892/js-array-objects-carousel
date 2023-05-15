// dichiarazione di un array per lo storage delle immagini
const images = [
    {
        image: 'img/01.webp',
        title: "Marvel\\'s Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel\\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

let activeItem = 0;

//definizione costanti per frecce di navigazione
const topArrow = document.getElementById("top-arrow");
const bottomArrow = document.getElementById("bottom-arrow");
const thumbContainer = document.getElementById("thumbnail-container");



//dichiarazione costante per lo slider container
const  sliderContainer = document.getElementById('slider-container');


let myMapArray = images.map((immagine) => {
        //creazione div per slider item
        let element = document.createElement('div');
        let thumb = document.createElement('div');
    
        //aggiunta classe per slider item
        element.classList.add("slider-item");
    
        //aggiunta classe per slider thumb
        thumb.classList.add("slider-thumb", "overlay");
    
    
        //append slider thumb
        thumbContainer.append(thumb);
    
    
        //append slider item
        sliderContainer.append(element);
    
        //inserimento immagini nello slider item
        element.innerHTML = `<img src="${immagine.image}" alt="">`;
        thumb.innerHTML = `<img src="${immagine.image}" alt="">`;
});




// //ciclo per creare dinamicamente gli slider items
// for(key in images){

//     //creazione div per slider item
//     let element = document.createElement('div');
//     let thumb = document.createElement('div');

//     //aggiunta classe per slider item
//     element.classList.add("slider-item");

//     //aggiunta classe per slider thumb
//     thumb.classList.add("slider-thumb", "overlay");


//     //append slider thumb
//     thumbContainer.append(thumb);


//     //append slider item
//     sliderContainer.append(element);

//     //inserimento immagini nello slider item
//     element.innerHTML = `<img src="${key.image}" alt="">`;
//     thumb.innerHTML = `<img src="${key.image}" alt="">`;

//     console.log(key.title);

// }

//dichiaro la variabile items per selezionare la classe di tutti gli elementi slider-items
let items = document.querySelectorAll(".slider-item");
let thumbItems = document.querySelectorAll(".slider-thumb");

//attribuisco la classe active all'indice 0 dell'array
// items[activeItem].classList.add("active");
// thumbItems[activeItem].classList.remove("overlay");

//Dichiaro in due variabili i bottoni per comandare lo slider
let prev = document.getElementById("top-arrow");
let next = document.getElementById("bottom-arrow");

items[activeItem].classList.add("active");
thumbItems[activeItem].classList.toggle("overlay");

// //aggiunta event listner freccia di navigazione next
next.addEventListener("click", 
function(){
    items[activeItem].classList.remove("active");
    thumbItems[activeItem].classList.toggle("overlay");

    if(activeItem == items.length -1){
    activeItem = 0;
    }
    else{
        activeItem++;
    }
    items[activeItem].classList.add("active");
    thumbItems[activeItem].classList.toggle("overlay");

});

// //aggiunta event listner freccia di navigazione prev
prev.addEventListener("click", 
function(){
    items[activeItem].classList.remove("active");
    thumbItems[activeItem].classList.toggle("overlay");

    if(activeItem == 0){
    activeItem = items.length -1;
    }
    else{
        activeItem--;
    }
    items[activeItem].classList.add("active");
    thumbItems[activeItem].classList.toggle("overlay");

});
    


// items[activeItem].classList.remove("active");
// thumbItems[activeItem].classList.toggle("overlay");

// //esecuzione condizionale per verificare se resettare lo slider o no
// if(activeItem == items.length){
//     activeItem = 0;
// }
// else{
//     activeItem++;
// }







