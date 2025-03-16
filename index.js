const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/cody-chan-GXhmQt6MFX8-unsplash.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/diego-lozano-mE6kjov4rTg-unsplash.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/huyen-bui-NHEL1M1Cv-A-unsplash.jpg" ,rating: 5, comment: "Delicious!"},
    { id: 4, name: "Diego Ramen", restaurant: "Mugo-ya", image: "images/j-lbxLlgi_8_w-unsplash.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 5, name: "Susan Ramen", restaurant: "Konichiwa-ya", image: "images/max-oh-jOFGlU-vpY8-unsplash.jpg", rating: 5, comment: "Delicious!"}
]; 

const name_res = document.getElementById('nameramen'); 
 const restaurant = document.getElementById('ramen-restaurant').value;
 const image = document.getElementById('ramen-image').value;
 const rating = document.getElementById('ramen-rating').value;
 const comment = document.getElementById('ramen-comment').value;

 
 function displayRamens () {ramens.forEach(ramen =>{
    const img = document.createElement('img');
    img.src = ramen.image;
    img.alt = ramen.name;
    img.style.cursor = 'Pointer';
    img.style.width = '250px';
    img.style.border_radius = '2px';
    document.querySelector('#ramen-menu').appendChild(img);
    img.addEventListener("click", () => handleClick(ramen));0
 })}

 function handleClick(ramen) {
    const detailDiv = document.querySelector("#ramen-detail");

    detailDiv.innerHTML = `
        <img src="${ramen.image}" alt="${ramen.name}" style="width: 300px; border-radius: 5px; position: relative;">
        <h2 style="">${ramen.name}</h2>
        <h3>Restaurant: ${ramen.restaurant}</h3>
        <p> Rating: ${ramen.rating}</p>
        <p> Comment: ${ramen.comment}</p>
    `;
   
}

function addSubmitListener () {
  const newRamen = { name_res , restaurant , image , rating , comment };
  document.addEventListener ('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit',e =>{
        e.preventDefault()
        e.target.reset()
    })
}) }

function addItUp () {
    displayRamens()
    addSubmitListener()
}
addItUp()