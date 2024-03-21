var input = document.getElementById("input");
var div = document.getElementById("div");
input.addEventListener("keyup",(e)=>{
    if(e.code=="Enter"){
      add();
    }
  })
function add(){
    if(input.value==""){
        alert("Please enter the value to Add");
    }
    else{
        var innerdiv=document.createElement("div");
        var button=document.createElement("button");
        var elements = document.createElement("li");
        elements.innerHTML = input.value;
        innerdiv.setAttribute("id","innerdiv");
        button.innerText="Delete";
        button.setAttribute("id","del-btn");
        button.onclick=()=>{
            deleteitem(event);
        }
        innerdiv.append(elements);
        innerdiv.append(button);
        div.append(innerdiv);
        input.value="";
    }
}
function deleteitem(event){
    event.target.parentElement.remove();
}