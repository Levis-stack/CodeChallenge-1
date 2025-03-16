const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/cody-chan-GXhmQt6MFX8-unsplash.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/diego-lozano-mE6kjov4rTg-unsplash.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/huyen-bui-NHEL1M1Cv-A-unsplash.jpg", rating: 5, comment: "Delicious!" },
    { id: 4, name: "Diego Ramen", restaurant: "Mugo-ya", image: "images/j-lbxLlgi_8_w-unsplash.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 5, name: "Susan Ramen", restaurant: "Konichiwa-ya", image: "images/max-oh-jOFGlU-vpY8-unsplash.jpg", rating: 5, comment: "Delicious!" }
]; 

function displayRamens() {
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.style.cursor = 'pointer';
        img.style.width = '250px';
        img.style.borderRadius = '2px';
        
        document.querySelector('#ramen-menu').appendChild(img);
        img.addEventListener("click", () => handleClick(ramen));
    });
}

function handleClick(ramen) {
    const detailDiv = document.querySelector("#ramen-detail");

    detailDiv.innerHTML = `
        <img src="${ramen.image}" alt="${ramen.name}" style="width: 300px; border-radius: 5px;">
        <h2>${ramen.name}</h2>
        <h3>Restaurant: ${ramen.restaurant}</h3>
        <p>Rating: ${ramen.rating}</p>
        <p>Comment: ${ramen.comment}</p>
    `;
}

function addSubmitListener() {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('form').addEventListener('submit', e => {
            e.preventDefault();

            const name = document.getElementById('new-name').value; 
            const restaurant = document.getElementById('new-restaurant').value;
            const image = document.getElementById('new-image').value;
            const rating = document.getElementById('new-rating').value;
            const comment = document.getElementById('new-comment').value;

            const newRamen = { name, restaurant, image, rating, comment };

            const newImg = document.createElement('img');
            newImg.src = newRamen.image;
            newImg.alt = newRamen.name;
            newImg.style.cursor = 'pointer';
            newImg.style.width = '250px';
            newImg.style.borderRadius = '2px';

            document.querySelector('#ramen-menu').appendChild(newImg);
            newImg.addEventListener("click", () => handleClick(newRamen));

            e.target.reset(); 
        });
    });
}

function addItUp() {
    displayRamens();
    addSubmitListener();
}

addItUp();
