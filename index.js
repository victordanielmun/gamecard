//datos de cards
const cardObjectDefinitions = [
    {id:1, imagePath:'/images/card-KingHearts.png'},
    {id:2, imagePath:'/images/card-JackClubs.png'},
    {id:3, imagePath:'/images/card-QueenDiamonds.png'},
    {id:4, imagePath:'/images/AceSpades.png'},
]

const cardBackImgPath = '/images/card-back-blue.png'

{/* <div class="card">
<div class="card-inner">
    <div class="card-front">
        <img src="/images/card-JackClubs.png" alt="Card" class="card-img">
    </div>
    <div class="card-back">
        <img src="/images/card-back-Blue.png" alt="Back Card" class="card-img">
    </div>
</div>
</div> */}

//funcion creadora de card
function createdCard(){
    //crear div 
    const cardElem = document.createElement('div');
    const cardInnerElem = document.createElement('div');
    const cardFrontElem = document.createElement('div');
    const cardBackElem = document.createElement('div');
    //crear img back front 
    const cardFrontImg = createElement('img');
    const cardBackImg = createElement('img');
    //añadir clase y id al div cardElemnt
    addClassToElement(cardElem, 'card');
    addIdToElement(cardElem, cardItem.id);
    //añadir clase y id al div cardInner
    addClassToElement(cardInnerElem, 'card-inner');
    //añadir clase y id al div cardfront
    addClassToElement(cardFrontElem, 'card-front');
    //añadir clase y id al div cardback
    addClassToElement(cardBackElem, 'card-back');

    //añadir src al cardback
    addSrcToImageElem(cardBackImg, cardBackImgPath);
    //añadir src al cardfront
    addSrcToImageElem(cardFrontImg, cardItem.imagePath);

}

//funcion creador de div
function createElement(elemtype) {
    return document.createElement(elemtype);
}

//funcion añadir clase al div
function addClassToElement(elem, className) {
    elem.classList.add(className)
}

//funcion añadir id al div
function addIdToElement(elem, id){
    elem.id = id
}

//funcion añadir source al img elememt
function addSrcToImageElem(imgElem, src){
    imgElem.src = src
}