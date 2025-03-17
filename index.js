const ramens = [
    { id: 1, name: "Gyukotsu Ramen", restaurant: "Ichiran", image: "/home/daniel-kimani/Development/code/phase-1/code-challenge/ramen-rating-app/shoyu.jpg", rating: 5, comment: "Rich and flavorful!" },
    { id: 2, name: "Kojiro Ramen", restaurant: "Menya", image: "kojiro.jpg", rating: 4, comment: "Great taste and texture!" },
    { id: 3, name: "Naruto Ramen", restaurant: "Ramen Ichiban", image: "naruto.jpg", rating: 5, comment: "Perfect balance of flavors!" },
];

function displayRamens(){
    let menu =document.getElementById("ramen-menu");
    menu.innerHTML ="";

    ramens.forEach(ramen=>{
        let img = document.createElement("img");
        img.src = ramen.img;
        img.alt = ramen.name;
        img.addEventListener("click", function(){
            handleClick(ramen);
        });
        menu.appendChild(img);
    })
        
    }
