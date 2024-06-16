



let text = document.querySelector(".text");
let pointer = document.querySelector(".pointer");

let movePointer = (e) => {
    let x = e.pageX;
    let y = epageY;
    console.log(x,y);

    pointer.style.left= x + "px";
    pointer.style.top= y + "px";

    let rect = text.getBoundingClientRect();

    if(x > rect.left && x < rect.right
        && y > rect.top && y < rect.bottom
    ){
        pointer.style.width= 100 + "px";
        pointer.style.height= 100 + "px";
    }else{
        pointer.style.width= 30 + "px";
        pointer.style.height= 30 + "px";

    }
};

document.addEventListener("mousemove", (e) =>{
    movePointer(e)
});