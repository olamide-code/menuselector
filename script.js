var select = document.getElementById("Field");
var selectText = document.getElementById("selectText"); 
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrow = document.getElementById("arrow");



Field.onclick = function()
{
     list.classList.toggle("hide");
 }



for(option of options)
{
    option.onclick = function()
    {
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrow.classList.toggle("rotate");


    }
}





