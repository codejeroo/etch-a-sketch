
let container = document.querySelector(".container");



function createRows(num) {
    for ( let i = 0 ; i < num ; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.width =  `${800/num}px`;
        row.style.height = `${800/num}px`;
        row.style.border = "solid pink 0.5px"
        container.appendChild(row);
    
    
        for ( let j = 0; j < num; j ++) {
            let column = document.createElement("div");
            column.classList.add("column")
            column.style.width = `${800/num}px`;
            column.style.height = `${800/num}px`;
            column.style.border = "solid pink 1px"
            row.appendChild(column);
            
            column.addEventListener("mouseover", () => {
                column.style.backgroundColor = "black";
            })
        }
        
    }

    
}

createRows(16);

const sizeButton = document.querySelector(".button");

sizeButton.addEventListener("click", () => {
   
   let num = prompt("Change Grid Size, Enter Number 1-100");
   if ( num > 100) {
    alert("Number exceeded! Try Again!");
    return;
   } else {
   container.innerHTML = "";
   createRows(num);
   }
   
});



function changeToRgb(column) {
    
   
    red = Math.floor((Math.random()*255) + 1);
    green = Math.floor((Math.random()*255) + 1);
    blue = Math.floor((Math.random()*255) + 1);
    
    column.style.backgroundColor= `rgb(${red}, ${green}, ${blue})`;
};

const rgbButton = document.querySelector(".rgb");


let isRgbOn = false;

rgbButton.addEventListener("click", ()  => {
    
    const columns = document.querySelectorAll(".column");

    if (!isRgbOn) {
        isRgbOn = true;
        rgbButton.textContent = "Disable RGB";
        columns.forEach(column => {
            column.addEventListener("mouseover", mouseHandler);
        })


    } else {
        isRgbOn = false;
        rgbButton.textContent = "Enable RGB";
        columns.forEach(column => {
            column.removeEventListener("mouseover", mouseHandler);
        })
    }
})



function mouseHandler(event){
    changeToRgb(event.target);
}

let selectColor = document.querySelector(".change-color");

selectColor.addEventListener("click", () => {
    let setColor = prompt("Type Color, lowercase Ex: blue");
    const columns = document.querySelectorAll(".column");

    columns.forEach(column => {
        column.addEventListener("mouseover", () => {
            column.style.backgroundColor = `${setColor}`;
        })
        
    } )
});

let eraser = document.querySelector(".eraser");
eraser.addEventListener("click", () => {
    const columns = document.querySelectorAll(".column");
    columns.forEach(column => {
        column.style.backgroundColor = "transparent";
    });
});
