const btn=document.querySelector('#btn')
const container=document.querySelector('.container')
let mousedown=false
container.onmousedown = () => {mousedown=true}
container.onmouseup = () => {mousedown=false}


btn.addEventListener('click',(e)=>{
    const grids=parseInt(prompt('how many grids type shi'))
    container.setAttribute("style","grid-template-rows:" + "repeat("+ grids + ",1fr); " + "grid-template-columns:" + "repeat("+ grids + ",1fr);" + "min-width:90vw;" + "min-height:95vh;")
    
    makegrid(grids)

})

function makegrid(grids){
    container.innerHTML=""
    for (let i=0;i<grids ** 2;i++){
        const grid=document.createElement("div")
        grid.style.opacity=0
        container.appendChild(grid)
    }

    
}
container.addEventListener('mouseover',(e)=>{
        if(e.target.classList.value != "container" && mousedown){ 
            e.target.style.backgroundColor="black"
            e.target.style.opacity = (parseFloat(e.target.style.opacity) + .1)

        }



    })


