var menu = document.querySelector(".nav-bar i")
var close = document.querySelector(".full i")
var car = document.querySelector(".c1")
var vid = document.querySelector(".vido1")
var car2 = document.querySelector(".c2")
var vid2 = document.querySelector(".vido2")
var car3 = document.querySelector(".c3")
var vid3 = document.querySelector(".vido3")
var car4 = document.querySelector(".c4")
var vid4 = document.querySelector(".vido4")
var car5 = document.querySelector(".c5")
var vid5 = document.querySelector(".vido5")
var car6 = document.querySelector(".c6")
var vid6 = document.querySelector(".vido6")


function carAnimation(){
    car.addEventListener("mouseover",function(){
        vid.classList.remove("non")
    })
    
    car.addEventListener("mouseout",function(){
        vid.classList.add("non")
    })
}
function carAnimation2(){
    car2.addEventListener("mouseover",function(){
        vid2.classList.remove("nonn")
    })
    
    car2.addEventListener("mouseout",function(){
        vid2.classList.add("nonn")
    })
}
function carAnimation3(){
    car3.addEventListener("mouseover",function(){
        vid3.classList.remove("nonnn")
    })
    
    car3.addEventListener("mouseout",function(){
        vid3.classList.add("nonnn")
    })
}
function carAnimation4(){
    car4.addEventListener("mouseover",function(){
        vid4.classList.remove("lol")
    })
    
    car4.addEventListener("mouseout",function(){
        vid4.classList.add("lol")
    })
}
function carAnimation5(){
    car5.addEventListener("mouseover",function(){
        vid5.classList.remove("loll")
    })
    
    car5.addEventListener("mouseout",function(){
        vid5.classList.add("loll")
    })
}
function carAnimation6(){
    car6.addEventListener("mouseover",function(){
        vid6.classList.remove("lolll")
    })
    
    car6.addEventListener("mouseout",function(){
        vid6.classList.add("lolll")
    })
}


function mainAnimation(){
    var tl = gsap.timeline();

    tl.from(".heading",{
        y:-50,
        opacity:0,
        duration:0.5,
        delay:0.6
    })
    tl.from(".sp",{
        y:50,
        opacity:0,
        duration:0.5,
    })
    
}

function navBarAnimation(){
    var tl = gsap.timeline();


    tl.to(".full",{
        top:0,
        duration:0.5
    })

    tl.from(".full h3",{
        y:-120,
        opacity:0,
        stagger:0.2
    })

    tl.from(".full i",{
        opacity:0
    })

    tl.pause()

    menu.addEventListener("click",function(){
        tl.play()
    })

    close.addEventListener("click",function(){
        tl.reverse()
    })
}

mainAnimation()
navBarAnimation()
carAnimation()
carAnimation2()
carAnimation3()
carAnimation4()
carAnimation5()
carAnimation6()


