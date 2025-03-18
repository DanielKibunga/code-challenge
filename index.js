let ramens = [
    { id: 1, name: "Gyukotsu Ramen", restaurant: "Ichiran", image: "gyukotsu (1).jpg", rating: 5, comment: "Savory and rich!" },
    { id: 2, name: "Kojiro Ramen", restaurant: "Menya", image: "kojiro.jpg", rating: 4, comment: "Very tasty!" },
    { id: 3, name: "Naruto Ramen", restaurant: "Ramen-ya", image: "naruto.jpg", rating: 5, comment: "Just like in the anime!" },
    { id: 4, name: "Nirvana Ramen", restaurant: "Nirvana Ramen Shop", image: "nirvana.jpg", rating: 4, comment: "Great umami flavor!" },
    { id: 5, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Classic and delicious!" }
];

let menu = document.getElementById("ramen-menu");
let form = document.getElementById("ramen-form");

function displayRamens() {
    menu.innerHTML = ""; 

    ramens.forEach((ramen) => {
        let img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        menu.appendChild(img);
    });
}

function handleClick(ramen) {
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = ramen.rating;
    document.getElementById("ramen-comment").textContent = ramen.comment;
}

function addSubmitListener() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let newRamen = {
            name: form.name.value,
            restaurant: form.restaurant.value,
            image: form.image.value,
            rating: form.rating.value,
            comment: form.comment.value
        };

        let img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.addEventListener("click", () => handleClick(newRamen));

        menu.appendChild(img);
        form.reset();
    });
}

displayRamens();
addSubmitListener();
