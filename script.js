//navbar
let home =document.getElementById('home');
let destinations = document.getElementById("destinations");
let crew = document.getElementById("crew");
let technology = document.getElementById("technology");
let display = document.getElementById("display")
let explore = document.getElementById('explore')

explore.addEventListener("click", function(){
    document.getElementById('destination').style.display="flex";
    document.getElementById('main').style.display="none";
    document.getElementById('crews').style.display="none";
    destinations.style.borderBottom="1px solid white";
    home.style.borderBottom="0";
    crew.style.borderBottom ="0"
    display.style.backgroundImage =`url("assets/destination/background-destination-desktop.jpg")`
    getJsonData("0");
})

home.addEventListener('click', function(){
    document.getElementById('main').style.display="flex";
    document.getElementById('destination').style.display="none";
    document.getElementById('crews').style.display="none";
    document.getElementById('technologys').style.display = "none"
    this.style.borderBottom="1px solid white";
    destinations.style.borderBottom="0";
    crew.style.borderBottom="0";
    crew.style.borderBottom ="0"
    display.style.backgroundImage =`url("assets/home/background-home-desktop.jpg")`
})

destinations.addEventListener("click", function(){
    document.getElementById('destination').style.display="flex";
    document.getElementById('main').style.display="none";
    document.getElementById('crews').style.display="none";
    document.getElementById('technologys').style.display = "none"
    this.style.borderBottom="1px solid white";
    home.style.borderBottom="0";
    crew.style.borderBottom ="0"
    display.style.backgroundImage =`url("assets/destination/background-destination-desktop.jpg")`
    getJsonData("0");

})

crew.addEventListener("click", function(){
    document.getElementById('crews').style.display="flex";
    document.getElementById('destination').style.display="none";
    document.getElementById('main').style.display="none";
    document.getElementById('technologys').style.display = "none"
    this.style.borderBottom="1px solid white";
    home.style.borderBottom="0"
    destinations.style.borderBottom ="0"
    display.style.backgroundImage =`url("assets/crew/background-crew-desktop.jpg")`;
    getJsonData("0");
})

technology.addEventListener("click", function(){
    document.getElementById('crews').style.display="none";
    document.getElementById('destination').style.display="none";
    document.getElementById('main').style.display="none";
    document.getElementById('technologys').style.display = "flex"
    this.style.borderBottom="1px solid white";
    home.style.borderBottom="0";
    crew.style.borderBottom ="0";
    destinations.style.borderBottom ="0"
    display.style.backgroundImage =`url("assets/technology/background-technology-desktop.jpg")`;
    getJsonData("0");
})

//destination

let Moon = document.getElementById('moon');
let Mars = document.getElementById('mars');
let Europa = document.getElementById('europa');
let Titan = document.getElementById('titan')

Moon.addEventListener("click", function(){
     getJsonData("0");
     this.style.borderBottom = "2px solid white";
     Mars.style.borderBottom = "0px";
     Europa.style.borderBottom = "0px ";
     Titan.style.borderBottom = "0px";
})

Mars.addEventListener("click", function(){
    getJsonData("1");
    this.style.borderBottom = "2px solid white";
    Moon.style.borderBottom = "0px ";
    Europa.style.borderBottom = "0px";
    Titan.style.borderBottom = "0px";
})

Europa.addEventListener("click", function(){
    getJsonData("2");
    this.style.borderBottom = "2px solid white";
    Moon.style.borderBottom = "0px";
    Mars.style.borderBottom = "0px";
    Titan.style.borderBottom = "0px";
})

Titan.addEventListener("click", function(){
    getJsonData("3");
    this.style.borderBottom = "2px solid white";
    Moon.style.borderBottom = "0px";
    Mars.style.borderBottom = "0px ";
    Europa.style.borderBottom = "0px";
})


//crew
let First = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');

First.addEventListener('click', function(){
    getJsonData("0");
    this.style.opacity = "1";
    second.style.opacity = "0.5";
    third.style.opacity = "0.5";
    fourth.style.opacity = "0.5"
})

second.addEventListener('click',function(){
    getJsonData("1")
    First.style.opacity = "0.5";
    this.style.opacity = "1";
    third.style.opacity = "0.5";
    fourth.style.opacity = "0.5"
})

third.addEventListener("click" , function(){
    getJsonData("2");
    First.style.opacity = "0.5";
    second.style.opacity = "0.5";
    this.style.opacity = "1";
    fourth.style.opacity = "0.5"
})

fourth.addEventListener("click" , function(){
    getJsonData("3");
    fourth.style.opacity = "0.5";
    second.style.opacity = "0.5";
    third.style.opacity = "0.5";
    this.style.opacity = "1";
})

//technology

let techFirst = document.getElementById('tech-first');
let techSecond = document. getElementById('tech-second');
let techThird = document.getElementById('tech-third')


techFirst.addEventListener("click" ,function(){
    getJsonData("0");
})

techSecond.addEventListener("click", function(){
    getJsonData("1");
})

techThird.addEventListener("click" , function(){
    getJsonData("2");
})


function getJsonData(index){
    fetch('data.json').then(response => response.json())
    .then(data => {
        let destination = data.destinations[index];

        document.getElementById('title').textContent = destination.name;
        document.getElementById('info').textContent = destination.description;
        document.getElementById('planet').src = destination.images.webp;
        document.getElementById('km').textContent =destination.distance;
        document.getElementById('days').textContent =destination.travel;


        let crew = data.crew[index];

        document.getElementById('crew-name').textContent = crew.name;
        document.getElementById('job').textContent = crew.role;
        document.getElementById('crew-info').textContent = crew.bio;
        document.getElementById('crew-img').src = crew.images.png;

        let technology = data.technology[index];

        document.getElementById('tech-name').textContent = technology.name;
        document.getElementById('tech-info').textContent = technology.description;
        document.getElementById('tech-img').src = technology.images.landscape;
    })
}