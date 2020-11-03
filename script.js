var images = [
    "images/cry.png",
    "images/devil.png",
    "images/ghost.png",
    "images/kiss.png",
    "images/cry.png",
    "images/devil.png",
    "images/ghost.png",
    "images/kiss.png",
    "images/cry.png",
    "images/devil.png",
    "images/ghost.png",
    "images/kiss.png",
    "images/cry.png",
    "images/devil.png",
    "images/ghost.png",
    "images/kiss.png"
];
var poop = "images/poop.png";
var clickCount = 0;
var urClicks = [];
var finalAns ;
function randomize(images){
    var currentIndex = images.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = images[currentIndex];
    images[currentIndex] = images[randomIndex];
    images[randomIndex] = temporaryValue;
  }

  return images;
}

function createGrid(images) {
    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");
    tableBody.style.alignContent.center;
    table.style.width = 2;
    for (let index = 0; index < 4; index++) {
        var row = document.createElement("tr");
        
        for (let j = index*4; j < (index*4)+4; j++) {
            var cell = document.createElement("td");
            let img = document.createElement("img");
            img.src = images[j];
            setTimeout(()=>{
                img.src=poop;
            },3000);
            img.height = 75;
            img.width = 75;
            //img.src = "images/kiss.png";
            img.addEventListener("click",()=>{
                img.setAttribute( 'src',images[j]);
                clickCount++;
                
                var str = images[j];
                let ans = str.substring(
                    str.lastIndexOf("/") + 1, 
                    str.lastIndexOf(".")
                );
                
                urClicks.push( ans);
                console.log(clickCount);
                console.log(urClicks);
                if(clickCount===4){
                    console.log("ran..");
                    finalAns = check(urClicks);
                    setTimeout(()=>{
                        finalAns?win():loose();
                    },100 );
                    
                }
            })
            cell.appendChild(img);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);        
    }
    table.appendChild(tableBody);
    document.querySelector(".grid").appendChild(table);
}
var randomImage = randomize(images);
createGrid(randomImage);
var head = document.querySelector("h1");
setTimeout(() => {
    head.innerText = "Let's Begin!";
}, 3000);

function win() {
   
    alert('You win');
    setTimeout(()=>{
        location.reload();
    },10 );
    
}
function loose() {
    
    alert('You loose');
    setTimeout(()=>{
        location.reload();
    },10 );
    
}

function check(urClicks) {
    return urClicks.every( (val, i, arr) => val === arr[0]);
}



