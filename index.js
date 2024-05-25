const input=document.getElementById("input")
const botton=document.getElementById("button-addon2")
const todolist =document.getElementById("list")
document.getElementById("button-addon2").addEventListener("click",function(e){
    if(input.value===""){
        alert("kindly write something")
    }
    else{
        const list=document.createElement("list")
        list.textContent=input.value
        list.classList.add("list-group-item","category-Tag")
        todolist.append(list)
    }
    input.value=""
})

list.addEventListener("click", function(e){
    e.target.remove()
})


document.addEventListener("keydown",function(e){
    if((e.key==="Enter")){

        const list=document.createElement("list")
        list.textContent=input.value;
        list.classList.add("list-group-item","category-Tag")
        todolist.append(list)
        input.value=""
    }
   
    dontRepeat();
    
})
