const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/cody-chan-GXhmQt6MFX8-unsplash.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/diego-lozano-mE6kjov4rTg-unsplash.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/huyen-bui-NHEL1M1Cv-A-unsplash.jpg", rating: 5, comment: "Delicious!" },
    { id: 4, name: "Diego Ramen", restaurant: "Mugo-ya", image: "images/j-lbxLlgi_8_w-unsplash.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 5, name: "Susan Ramen", restaurant: "Konichiwa-ya", image: "images/max-oh-jOFGlU-vpY8-unsplash.jpg", rating: 5, comment: "Delicious!" }
]; 
const ramenMenu = document.querySelector('#ramen-menu');
function displayRamens(ramens) {
    ramenMenu.innerHTML=""
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.style.cursor = 'pointer';
        img.style.width = '250px';
        img.style.borderRadius = '20px';
        img.style.margin = '3px';
        
        ramenMenu.appendChild(img);
        img.addEventListener("click", () => handleClick(ramen));
        
    });
}
displayRamens(ramens)
function handleClick(ramen) {
    const detailDiv = document.querySelector("#ramen-detail");

    detailDiv.innerHTML = `
        <img src="${ramen.image}" alt="${ramen.name}" style="width: 300px; border-radius: 20px;">
        <h2>${ramen.name}</h2>
        <h3>Restaurant: ${ramen.restaurant}</h3>
        <p>Rating: ${ramen.rating}</p>
        <p>Comment: ${ramen.comment}</p>
    `;
}
   
function addSubmitListener() {
    console.log(document.querySelector('form'));

    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();

        const name = document.getElementById('ramen-name').value;
        const restaurant = document.getElementById('ramen-restaurant').value;
        const image = document.getElementById('ramen-image').value;
        const rating = document.getElementById('ramen-rating').value;
        const comment = document.getElementById('ramen-comment').value;

        if (!name || !restaurant || !image || !rating || !comment) {
            alert("Please fill out all fields!"); 
            return;
        }

        const newRamen = {
            name,
            restaurant,
            image, 
            rating, 
            comment, 
        };
       console.log(newRamen);
        ramens.push(newRamen)
        displayRamens(ramens)
        e.target.reset(); 
        
    });
}

// addSubmitListener()
        
function addItUp() {
    addSubmitListener();
    handleClick(ramens[0]);
}
addItUp();
