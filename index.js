const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/cody-chan-GXhmQt6MFX8-unsplash.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/diego-lozano-mE6kjov4rTg-unsplash.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/j-lbxLlgi_8_w-unsplash.jpg" },
    { id: 4, name: "diego Ramen", restaurant: "Mugo-ya", image: "images/huyen-bui-NHEL1M1Cv-A-unsplash.jpg"},
    { id: 5, name: "susan Ramen", restaurant: "Konichiwa-ya", image: "images/max-oh-jOFGlU-vpY8-unsplash.jpg"}
]; 

 ramens.forEach(ramen =>{
    const img = document.createElement('img');
    img.src = ramen.image;
    img.alt = ramen.name;
    img.style.cursor = 'Pointer';
    img.style.width = '300px';
    img.style.alignItems = 'center';
    document.querySelector('#ramen-menu').appendChild(img);
 }
 )

