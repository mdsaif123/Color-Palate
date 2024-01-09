 var box =document.querySelectorAll(".box")
 var head=document.getElementById("heading")
 var refbtn=document.getElementById('ref-btn')
 var audio = document.getElementById('audio');
colors=[]

// generate new color for all boxes
for(i=0; i<box.length;i++){
    colors.push(
        `#${Math.floor(Math.random()*255).toString(16)}${Math.floor(Math.random()*255).toString(16)}${Math.floor(Math.random()*255).toString(16)}`

        
    )
    box[i].style.background =colors[i]
    box[i].innerHTML=colors[i]
    console.log(colors)


    // copy Hex code 

    box[i].onclick=function(){
        navigator.clipboard.writeText(this.innerHTML)
        var currentColor=this.innerHTML
        this.innerHTML='Copied'
        var currentTag=this


 // Play music tune
 audio.currentTime = 0;
 audio.play();


        setTimeout(function(){
            currentTag.innerHTML= currentColor
        },1000)
    }

}

// for heading text
   head.style.color=colors[0]
   head.style.textShadow="0 0 10px "+ colors[1]


// for Generate new Color
   refbtn.onclick=function(){
    window.location=location.href
   }










