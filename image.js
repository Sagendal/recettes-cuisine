const ImageStock = ["./image/poichicheSalade.jpg", "./image/crevettes.jpg", "./image/panna cotta.jpg", "./image/pate aubergines.jpg"] 
image.src = ImageStock[0];
let i=0;

function imageRouletteSwipe(){
let image = document.getElementById('image');
for(i=0; i<3; i++){
image.src = ImageStock[i];
}
}

const SwipeBoutton = document.getElementById("swipe");

SwipeBoutton.addEventListener("click", function () {
if(i<=2){
    i++;
    image.src = ImageStock[i];
    console.log(i)
    newUL.textContent = ingredientsImage[i];
}
else{
    i =0;
    newUL.textContent = ingredientsImage[i];
    image.src = ImageStock[i];
    
}
});

// retour

function imageRouletteRetour(){
    for(i=3; i<=0; i--){
    image.src = ImageStock[i];
    
    }
    }
    
    let retourBoutton = document.getElementById("retour");
    
    retourBoutton.addEventListener("click", function () {
    newUL.textContent = ingredientsImage[i];
    if(i>=1){
        i--;
        image.src = ImageStock[i];
        console.log(i)
        newUL.textContent = ingredientsImage[i];
    }
    else{
        i =3;
        newUL.textContent = ingredientsImage[i];
        image.src = ImageStock[i];
    }
    });

    //like 
    const ingredientsImage = [
        ["poichiche", "salade", "jkdjd"],
        ["crevettes", "crevettes", "crevettes"],
        ["annanas", "annanas", "annanas"],
        ["aubergines", "aubergines", "aubergines"]
      ];

const ingredientsPoichiche = ingredientsImage[0];
const ingredientsCrevettes = ingredientsImage[1];
const igredientsPannacotta = ingredientsImage[2];
const ingredientsAubergine = ingredientsImage[3];

let boutonLike = document.getElementById('like')


const popup = document.getElementById('popup');
let clickOpen = false;

function ouverturePopup(){
    if (!clickOpen) {
        popup.setAttribute("style", "display:block");
        console.log('Popup ouvert');
        clickOpen = true;
      }
    
}

function fermeturePopup(){
    if (clickOpen) {
        popup.setAttribute("style", "display:None");
        console.log('Popup fermé');
        clickOpen = false;
      }
    
}


const AllPage =  document.querySelector('body');

if(!clickOpen){
boutonLike.addEventListener("click", function () {
    if (!clickOpen) {
        ouverturePopup();
        console.log('o', clickOpen);
      } else {
        fermeturePopup();
        console.log('f', clickOpen);
      }
    });}

   AllPage.addEventListener("click", function () {
    if(clickOpen&& !event.target.closest('#popup') && !event.target.closest('#like')){
        fermeturePopup();
    }
})

let textIngredientPopup = document.querySelector('.listPopup');
let newUL = document.createElement("ul");

textIngredientPopup.appendChild(newUL);

newUL.textContent = ingredientsImage[i];


