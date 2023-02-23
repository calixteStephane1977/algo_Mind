const class_entrees=document.querySelector(".entrees");
const panier = document.querySelector(".panier");
const counterDisplay = document.querySelector(".header-icons-noti");
const total = document.getElementById("equal");
const produits = document.querySelectorAll("h5");
// ======[code super test ]======================================================
// ================================================================================
                                // DATA

const data_plats = [
{
    id:1,
    name:"Soupe_Misso",
    src:`./assets/img/entrees/0023412-soupe-miso-250.webp`,
    prix: 2.5,
    btn:"commender"
  },
  {
    id:2,
    name: "Salade_de_choux",
    src:`./assets/img/entrees/0023414-salade-de-choux-250.webp`,
    prix: 3.5,
    btn:"commender"
  },
  {
    id:3,
    name: "Salade_de_concombre",
    src:`./assets/img/entrees/0023415-salade-de-concombre-250.webp`,
    prix: 5,
    btn:"Ajouter"
  },
  {
    id:4,
    name: "Salade_de_Saumon",
    src:`./assets/img/entrees/0023416-salade-de-saumon-250.webp`,
    prix: 8,
    btn:"Ajouter"
  },
  {
    id:5,
    name: "Salade_Maison",
    src:`./assets/img/entrees/0023417-salade-maison-250.webp`,
    prix: 9.90,
    btn:"Ajouter"
    
  },
  {
    id:6,
    name: "Salade_Hiyashi",
    src:`./assets/img/entrees/0023418-salade-hiyashi-250.webp`,
    prix: 7.5,
    btn:"Ajouter"
    
  },
  {
    id:7,
    name: "Gyoza",
    src:`./assets/img/entrees/0023419-gyoza-250.webp`,
    prix: 6.5,
    btn:"Ajouter"
    
  },
  {
    id:8,
    name: "Carpaccio_Saumon",
    src:`./assets/img/entrees/0023420-carpaccio-saumon-250.webp`,
    prix: 8.00,
    btn:"Ajouter"
    
  },
  {
    id:9,
    name: "Carpaccio_Thon",
    src:`./assets/img/entrees/0023421-carpaccio-thon-250.webp`,
    prix: 10.00,
    btn:"Ajouter"
  },
  {
    id:10,
    name:"Nems_aux_Crevette",
    src:`./assets/img/entrees/0023423-nems-au-crevettes-250.webp`,
    prix: 5.90,
    btn:"Ajouter"
  },
  
]

const data_btn=
  {

      1:  2.5,
      2:  3.5,
      3:  5,
      4:  8,
      5:  9.9,
      6:  7.5,
      7:  6.5,
      8:  8,
      9:  10,
      10: 5.9
  }

// =========================================================================
// ============================================================================
                              // ALL TABLEAUX 
let Panier=[]
let array_plats=[]
let array_btn=[]
let totalE=0
// =================================================================================
//                       <<<<<<<<COUNTER>>>>>>>>>>>>
let counter=0

function myCounter(){
  counter++
}
// ==========================================================================
                          // BUILDER CARD

function builder() {
  myCounter()
  for (const [key, value] of Object.entries(data_plats)) {
    array_plats.push(value.id);
    array_plats.push(value.prix);
    array_plats.push(value.name);
    class_entrees.innerHTML+=x=
`
        <div class="card m-4  bg-dark  text-light" style="width: 15rem">
        <img src=${value.src} />
        <div class="card-body">
                  <h5 class="card-title ps-3">${value.name}</h5>
                  <p class="product_description card-text">
                  </p>
                  <div class="product_price d-flex justify-content-between" >
                      <p data-class=${value.id} class=" w-100 text-center">
                      ${value.prix} €
                      </p>
                      <button data-name=${value.name} type="button" data-id=${value.id} class="btn-send">${value.btn}</button>
                  </div>
        </div>
        </div>

        `  
      }
      for (const [key, value] of Object.entries(data_btn)) {
    console.log(key);
    array_btn.push(value.dataset);
    array_btn.push(value.name);
  }
 
}
builder()
// ========================================================================
// ===========================================================================
                        // EVENEMENT AU CLICK SUR N'IMPORTE LEQUELS DES BUTTONS

const event=window.addEventListener("click",(e)=>{
  for (const [key,value] of Object.entries(data_btn)) {
    if(e.target.dataset.id==key){
      counterDisplay.innerText=counter++
      
      panier.innerHTML+=
      `
      <div>
      <pan class="recap">${e.target.dataset.name.split("_").join(" ").toUpperCase()}  ${value}€</pan>
      
      </div>
      `
      
      Panier.push(value)
      calcul(value)
    }else
    counterDisplay.innerText
    
    
    
      
    
  }  
})
// ========================================================================
                                  // CALCULATOR
function calcul(e){
  total.innerText=Panier.reduce((acc,current)=>acc+current)
}
// ===========================================================================
                            // EVEVENEMENT AU SCROLL

window.addEventListener('scroll',(e)=>{
let scrol=window.scrollY
if(scrol>188){
  const cardPanier=document.querySelector(".card_panier")
  cardPanier.style.position="sticky"
  cardPanier.style.top="177px"
  cardPanier.style.transition="0.5s"
  console.log(window.scrollY);
  console.log("test");
}
else if(scrol<140){
  const cardPanier=document.querySelector(".card_panier")
  cardPanier.style.position="relative"
  cardPanier.style.top="0px"

}
})