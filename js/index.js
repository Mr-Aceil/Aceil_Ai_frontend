const nav= document.getElementById("nav");
const search= document.getElementById("search");
const upper_icons= document.getElementById("upper_icons");
const p= document.getElementById("p");
const p2= document.getElementById("p2");
const icons2= document.getElementById("icons2")
const menu_btn= document.getElementById("menu_btn")
const mic= document.getElementById("mic")
const send= document.getElementById("send")
const input= document.getElementById("input")



function nav_hover(){
    nav.addEventListener("mouseover", function(){
        if (nav.style.width= '50px'){
            nav.style.width= '250px'
            upper_icons.style.width= '250px'
            search.style.display= 'flex'
            p.style.display= 'block'
            p2.style.display= 'block'
            icons2.style.display='flex'
        }
    })


    nav.addEventListener("mouseout", function(){
        if (nav.style.width='250px'){
            nav.style.width= '50px'
            upper_icons.style.width= 'fit-content'
            search.style.display= 'none'
            p.style.display= 'none'
            p2.style.display= 'none'
            icons2.style.display='none'
        }
    })
}



function send_dectect(){
    input.addEventListener("keyup", function(){
        let detect= input.value
    
        if (detect.length>0){
            mic.classList.add("hide")
            send.classList.remove("hide")
        }
        else{
            mic.classList.remove("hide")
            send.classList.add("hide")
        }
    })
}


function menu_press(){
    menu_btn.addEventListener("click", function(){
        if (nav.style.width == '50px'){
            nav.style.width = '250px'
            upper_icons.style.width= '250px'
            search.style.display= 'flex'
            p.style.display= 'block'
            p2.style.display= 'block'
            icons2.style.display='flex'
        }
        else{
            nav.style.width= '50px'
            upper_icons.style.width= 'fit-content'
            search.style.display= 'none'
            p.style.display= 'none'
            p2.style.display= 'none'
            icons2.style.display='none'
        }
    })
}

send_dectect()
menu_press()
nav_hover()