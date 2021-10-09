var land1 = document.getElementById("land1");
var land2 = document.getElementById("land2");
var land3 = document.getElementById("land3");
var stad1 = document.getElementById("stad1");


const getData = async () => {

const response = await fetch ("land.json")
const landData = await response.json();
const response2 = await fetch ("stad.json");
const cityData = await response2.json();

console.log(cityData);


function sve() {
    console.log("hallå");
    }
    land1.addEventListener("click", function () { 
        
        

        console.log(cityData);
    
    
    });

document.getElementById('land1').innerHTML= cityData.stadname[0];

}






















land2.addEventListener("click", function () {
    fetch("land.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log("hej");
    
     
        });


 })

land3.addEventListener("click", function () { 
    fetch("land.json"),
    fetch("stad.json")
.then(function(response) {
    return response.json();
})
.then(function(json) {
    console.log(json);

 
    });



})
