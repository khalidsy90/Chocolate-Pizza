// function to do strike for checkboxes
function doStrik(event){
    let inp=document.querySelector(`#${event.target.id}`)
    let lab=document.querySelector(`label[for=${event.target.id}]`)
    let str=lab.textContent

    if(inp.checked == true)
    {
        lab.innerHTML=str.strike()
    }
    else
    {
        lab.innerHTML=str
    }
}