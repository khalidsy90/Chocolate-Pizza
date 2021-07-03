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
function doChecked(){
    let inp1=document.querySelector(`input[id=granulatedsugar]`).checked=true
    let label1=document.querySelector('label[for=granulatedsugar]')
    let str1='granulated sugar'
    label1.innerHTML=str1.strike();
    let inp2=document.querySelector(`input[id=eggyolks]`).checked=true
    let label2=document.querySelector('label[for=eggyolks]')
    let str2='eggyolks'
    label2.innerHTML=str2.strike()

}
doChecked()