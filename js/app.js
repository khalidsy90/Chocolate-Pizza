// let inp=document.querySelector('input[name=granulatedsugar]')
// let lab=document.querySelector('label[for=granulatedsugar]')

// let inp2=document.querySelector('input[name=eggyolks]')
// let lab2=document.querySelector('label[for=eggyolks]')
    
// inp.addEventListener('change',function(event){
//     let str=lab.textContent
//     if(this.checked == true)
//     {

//        console.log(inp.name);
//        lab.innerHTML=str.strike()
       
//     }
//     else{
//         lab.innerHTML=str
//     }
// })

// inp2.addEventListener('change',function(event){
//     let str=lab2.textContent
//     if(this.checked == true)
//     {
//        lab2.innerHTML=str.strike()
//     }
//     else{
//         lab2.innerHTML=str
//     }
// })


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