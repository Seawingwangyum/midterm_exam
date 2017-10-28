var hidden = 0;
var controls = document.getElementById("controls");
var background = document.getElementById("background");
var imgx = 0;
var imgy = 0;
var imgh = 300;


function changeBG(text){
    if(text.indexOf("epic") != -1){
        background.style.backgroundImage = "url(img/bg4.jpg)"
    }
    else{
        if (text == "horse"){
        background.style.backgroundImage = "url(img/bg1.jpg)"
    }   else if (text == "night"){
        background.style.backgroundImage = "url(img/bg2.jpg)"
    }   else if (text == "mountain"){
        background.style.backgroundImage = "url(img/bg2.jpg)"
    }
        else{
            background.style.backgroundImage = "url("+text+")";
        }
    }   
}

function changetitle(text){
    console.log(text);
    document.getElementById("bgtitle").innerHTML = text;
}

function changedescription(text){
    document.getElementById("bgdescription").innerHTML = text;
}

function changecolor(rgb){
    document.getElementById("bgtitle").style.color = rgb;
    document.getElementById("bgdescription").style.color = rgb;
    document.getElementById("bgtitle").style.borderBottom = "2px solid "+rgb;
}

function expandmenu(){
    if(hidden == 0){
        controls.style.display = "block";
        document.getElementById("controls2").style.display = "none";
        hidden = 1;
    }   else if(hidden == 1){
        controls.style.display = "none";
        document.getElementById("controls2").style.display = "block";
        hidden = 0;
    }
}

function moveBG(Code){
    if(Code == 38){
        imgy = imgy - 10;
        background.style.backgroundPositionY = imgy + "px";
    }   else if(Code == 40){
        imgy = imgy + 10;
        background.style.backgroundPositionY = imgy + "px";
    }   else if(Code == 37){
        imgx = imgx - 10;
        background.style.backgroundPositionX = imgx + "px";
    }   else if(Code == 39){
        imgx = imgx + 10;
        background.style.backgroundPositionX = imgx + "px";
    }   else if (Code == 187){
        imgh = imgh + 10;
        background.style.height = imgh + "px"
    }   else if (Code == 189){
        imgh = imgh - 10;
        background.style.height = imgh + "px"
    }
}

document.getElementById("backgroundname").addEventListener("keyup", function(ev){
   if(ev.keyCode == 13){
      changeBG(document.getElementById("backgroundname").value);
       
   }
})

document.getElementById("menu").addEventListener("click", function(){
    expandmenu()
});

document.getElementById("controls2").addEventListener("click", function(){
    expandmenu()
});

document.getElementById("title").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){    
        changetitle(document.getElementById("title").value);
    }
});

document.getElementById("description").addEventListener("keyup", function(ev){
    changedescription(document.getElementById("description").value)
});

document.getElementById("color").addEventListener("change", function(){
    changecolor(document.getElementById("color").value)
});

document.addEventListener("keydown", function(ev){
   console.log(ev.keyCode);
    moveBG(ev.keyCode);
})
