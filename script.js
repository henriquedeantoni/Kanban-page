const columns = document.querySelectorAll(".column");

document.addEventListener("dragstart", (element)=>{
    element.target.classList.add("dragging");
});

document.addEventListener("dragend", (element)=>{
    element.target.classList.remove("dragging");
});


columns.forEach((item)=>{
    item.addEventListener("dragover", (element)=>{
        const dragging = document.querySelector(".dragging");
        const applyAfter = getNewPosition(item, element.clientY);

        if(applyAfter){
            applyAfter.insertAdjacentElement("afterend", dragging);
        }else{
            item.prepend(dragging);
        }
    });
});

function getNewPosition(column, posY){
    const cards = column.querySelectorAll(".item:not(.dragging)");
    let result;

    for(let refer_card of cards){
        const box = refer_card.getBoundingClientRect();
        const boxCenterY = box.y + box.height/2;

        if(posY >= boxCenterY){
            result = refer_card;
        }
    }
    return result;
}

createNewCard = () => {

    const card = document.querySelector('.columnToDo')
    const creationCard = document.querySelector('.newCard')

    console.log(card)
    
    /*const initialHtml=`<div class="item" draggable="true">
    <p>Write here<br><br></p>
    </div>`

    
    let newCard=initialHtml+card.outerHTML*/



    console.log(card + newCard)

    //card.innerHTML = newCard

}
