var color = document.getElementById("bgColor")
var newColor = "cyan"   
var chAnge = color.style.backgroundColor = newColor

var heading = document.getElementById("textColor")
var para = document.getElementById("para")
var txtColor = "black"   

var paraGraph = para.style.color = txtColor
var text = heading.style.color = txtColor



function change(){
    newColor = prompt("Enter Color")
    chAnge = color.style.backgroundColor = newColor
    return chAnge ; 
}
function fntColor(){
    txtColor = prompt("Enter Color")
    text = heading.style.color = txtColor
    paraGraph = para.style.color = txtColor
    return text ; 
}



var image = document.getElementById("image")

image.style.display = "none"

function IMGhandle(change){
    if(change == "show"){
        image.style.display ="block"
    }
    else if(change == "hide"){
        image.style.display="none"
    }
    else if(change == "large"){
        image.style.width = "900px"
    }
    else if(change == "small"){
        image.style.width = "400px"
    }
    
}

function Bulb(plug){

  var bulb = document.getElementById("bulb")


  if(plug == "bulbOn"){
      bulb.src = "./Bulb on.jfif"
  }
  else{
    bulb.src = "./Bulb off.jfif"
}

}
function pColorCH() {
    
var parent = document.getElementById("paraGraph")

var paraColor = parent.getElementsByTagName("p")

var pColor = prompt("Enter Color Name")

for(i = 0 ; i < paraColor.length ; i++){
    paraColor[i].style.color = pColor
    
}

}
function paraChange(){
    newColor = prompt("Enter Color Name")
    chAnge = color.style.backgroundColor = newColor
    return chAnge ; 
}



















