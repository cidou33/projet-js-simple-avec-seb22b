//declaration des variables ciblant les éléments du DOM

let crossTop = document.getElementById("stickTop");
let crossBottom = document.getElementById("stickBottom");
let card = document.getElementById("mainArticle");
let banana = document.getElementById("bananaBtn");
let strawberry = document.getElementById("strawberryBtn");
let raspberry = document.getElementById("raspberryBtn");
let kiwi = document.getElementById("kiwiBtn");
let orange = document.getElementById("orangeBtn");
let picture = document.getElementById("imgFruit");
let fruitName = document.getElementById("fruitName");
let fruitDescription = document.getElementById("fruitDescription");
let fruitCarac = document.getElementById("fruitCarac");
let caracOne = document.getElementById("caracOne");
let caracTwo = document.getElementById("caracTwo");
let caracThree = document.getElementById("caracThree");
let caracFour = document.getElementById("caracFour");
let caracFive = document.getElementById("caracFive");
let fruitText = document.getElementById("fruitText");

//déclaration des fonctions pour les couleurs de fond du texte
function colorStraw(){
    fruitText.className="";
    fruitText.classList.add("colorStraw");
}

function colorBanana(){
    fruitText.className="";
    fruitText.classList.add("colorBanana");
}

function colorRasp(){
    fruitText.className="";
    fruitText.classList.add("colorRasp");
}

function colorKiwi(){
    fruitText.className="";
    fruitText.classList.add("colorKiwi");
}

function colorOrange(){
    fruitText.className="";
    fruitText.classList.add("colorOrange");
}
//déclaration des fonctions faisant apparaitre les cards 
function addBananaCard(){
    card.className = '';
    card.classList.add("flex");
    picture.className = '';
    picture.classList.add("bananaPic");
    picture.classList.add("fruitPic");
    fruitName.innerHTML = "La Banane";
    fruitDescription.innerHTML = "Riche en antioxydants, la banane préviendrait l’apparition de nombreuses maladies. De plus, les sucres qu’elle contient contribueraient à maintenir une bonne santé gastro-intestinale. D’un point de vue culinaire, on distingue 2 types de bananes : les bananes à dessert, comme celles que nous mangeons au petit-déjeuner, et les bananes à cuire, comme le plantain.";
    fruitCarac.innerHTML = "Caractéristiques :";
    caracOne.innerHTML = "Source de fibres douces ;";
    caracTwo.innerHTML = "Excellente source de potassium ;";
    caracThree.innerHTML = "Favorise la satiété ;";
    caracFour.innerHTML = "Régule le transit ;";
    caracFive.innerHTML = "Riche en vitamines, minéraux et antioxydants.";
};

function addStrawberryCard(){
    card.className = '';
    card.classList.add("flex");
    picture.className = '';
    picture.classList.add("strawberryPic");
    picture.classList.add("fruitPic");
    fruitName.innerHTML = "La Fraise";
    fruitDescription.innerHTML = "A l'arrivée du printemps, la fraise fait son apparition sur nos étals pour le bonheur des plus gourmands. Ce petit fruit rouge est riche en vitamines et minéraux et possède de nombreux bienfaits pour la santé. On la consomme généralement en dessert, crue avec du sucre ou de la chantilly, mais elle se marie également très bien avec des salades pour un mélange sucré/salé.";
    fruitCarac.innerHTML = "Caractéristiques :";
    caracOne.innerHTML = "Peu calorique ;";
    caracTwo.innerHTML = "Riche en fibres ;";
    caracThree.innerHTML = "Riche en vitamine C ;";
    caracFour.innerHTML = "Source d'antioxydants ;";
    caracFive.innerHTML = "Stimule le système immunitaire.";
};

function addRaspberryCard(){
    card.className = '';
    card.classList.add("flex");
    picture.className = '';
    picture.classList.add("raspberryPic");
    picture.classList.add("fruitPic");
    fruitName.innerHTML = "La Framboise";
    fruitDescription.innerHTML = "Les framboises sont de petits fruits rouges stars de l’été. On les apprécie pour leur saveur sucrée et acidulée autant que pour leurs jolies couleurs vives. Côté cuisine, les fruits rouges se prêtent à toutes les associations et peuvent être dégustés aussi bien crus que cuits, seuls ou associés à d’autres ingrédients. Pour ne rien gâcher, la framboise bénéficie d’un profil nutrition remarquable.";
    fruitCarac.innerHTML = "Caractéristiques :";
    caracOne.innerHTML = "Pouvoir antioxydant";
    caracTwo.innerHTML = "Pauvres en sucre ;";
    caracThree.innerHTML = "Favorisent la santé cardiovasculaire ;";
    caracFour.innerHTML = "Peu caloriques ;";
    caracFive.innerHTML = "Stimulent le transit intestinal.";
};

function addKiwiCard(){
    card.className = '';
    card.classList.add("flex");
    picture.className = '';
    picture.classList.add("kiwiPic");
    picture.classList.add("fruitPic");
    fruitName.innerHTML = "Le Kiwi";
    fruitDescription.innerHTML = "Un seul kiwi renferme une quantité impressionnante de fibres. Grâce aux antioxydants qu’il contient, le consommer régulièrement préviendrait l’apparition de maladies cardiovasculaires et de certains cancers. Côté cuisine, le kiwi permet la réalisation de recettes à la fois saines, colorées et gourmandes.";
    fruitCarac.innerHTML = "Caractéristiques :";
    caracOne.innerHTML = "Fort pouvoir antioxydant ;";
    caracTwo.innerHTML = "Peu calorique ;";
    caracThree.innerHTML = "Très bonne source de fibres ;";
    caracFour.innerHTML = "Favorise la santé cardiovasculaire ;";
    caracFive.innerHTML = "Contribue à prévenir les pathologies chroniques.";
};

function addOrangeCard(){
    card.className = '';
    card.classList.add("flex");
    picture.className = '';
    picture.classList.add("orangePic");
    picture.classList.add("fruitPic");
    fruitName.innerHTML = "L'Orange";
    fruitDescription.innerHTML = "L'orange est l'un des fruits les plus consommés en France dont on se régale en hiver puisqu'on la trouve principalement de décembre à avril sur nos étals. Elle se consomme principalement crue en dessert mais elle ajoute également une touche sucrée aux salades.";
    fruitCarac.innerHTML = "Caractéristiques :";
    caracOne.innerHTML = "Riche en vitamine C ;";
    caracTwo.innerHTML = "Source de fibres ;";
    caracThree.innerHTML = "Pauvre en calories ;";
    caracFour.innerHTML = "Source de calcium et magnésium ;";
    caracFive.innerHTML = "Stimule le système immunitaire.";
};
//fonction de fermeture des cards
function removeCard(){
    card.className = '';
    card.classList.add("none");
};
//appel a l'écoute de différents événements
banana.addEventListener("click",addBananaCard);
strawberry.addEventListener("click",addStrawberryCard);
raspberry.addEventListener("click",addRaspberryCard);
kiwi.addEventListener("click",addKiwiCard);
orange.addEventListener("click",addOrangeCard);
crossTop.addEventListener("click", removeCard);
crossBottom.addEventListener("click", removeCard);
strawberry.addEventListener("click", colorStraw);
banana.addEventListener("click", colorBanana);
raspberry.addEventListener("click", colorRasp);
kiwi.addEventListener("click", colorKiwi);
orange.addEventListener("click", colorOrange);


