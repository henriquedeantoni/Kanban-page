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
    
    let initialHtml=`<div class="item" draggable="true">
    <p>Example Task<br><br>If you want to change the status of task 
    grab and drop to others columns next to.</p>
</div>
<div class="item" draggable="true">
    <p>New Task<br><br></p>
</div>          
<div class="item" draggable="true">
    <p>Create a new Task</p>
    <br>
    <button onClick={createNewCard}> Click here</button>
</div> `

}
