const btn=document.querySelector('#btn')
const container=document.querySelector('.container')



btn.addEventListener('click',(e)=>{
    const grids=parseInt(prompt('how many grids type shi'))
    container.setAttribute("style","grid-template-rows:" + "repeat("+ grids + ",1fr); " + "grid-template-columns:" + "repeat("+ grids + ",1fr);" + "min-width:90vw;" + "min-height:95vh;")
    
    makegrid(grids)

})

function makegrid(grids){
    while(container.hasChildNodes()){
        const child= container.firstChild
        container.removeChild(child)

    }

    for (let i=0;i<grids ** 2;i++){
        const grid=document.createElement("div")
        container.appendChild(grid)
    }

    container.addEventListener('mouseover',(e)=>{
        if(e.target.classList.value != "container"){
            e.target.setAttribute('style',"background-color:black;")


        }



    })
}



