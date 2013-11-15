var hue = hue || window.hue,
    onState = { on: true },
    offState = { on: false },
    fullBrightness = { bri: 254 },
    IPAddress = '192.168.2.2',
    APIKey = 'newdeveloper';


// set Hue bridge IP address and API key to use for test suite
hue.setIpAndApiKey(IPAddress, APIKey);



function turnOnAllLights() {
  hue.turnOnAll();
}


function turnOffAllLights() {
  hue.turnOffAll();
}


function setAllColors() {
  var lightColor = document.getElementById("allLightsColor");

  console.log("Set all lights to Color: " + lightColor.value);

  hue.setAllColors(lightColor.value);  
}



function turnOnLightN() {
  var lightNum = document.getElementById("turnOnLightNInput");

  console.log("Turn on light number: " + lightNum.value);
  hue.turnOn(lightNum.value);
}


function turnOffLightN() {
  var lightNum = document.getElementById("turnOffLightNInput");

  console.log("Turn off light number: " + lightNum.value);
  hue.turnOff(lightNum.value);

}


function setLightNColor() {
  var lightNum = document.getElementById("lightN");
  var lightColor = document.getElementById("lightNColor");

  console.log("Set lights #: " + lightN.value + " to Color: " + lightNColor.value);
  hue.setColor(lightN.value, lightNColor.value);

}



function setTransTime() {
  var transTime = document.getElementById("transTime");

  console.log("Set transition time to: " + transTime.value);

  hue.setTransitionTime(transTime.value);
}


function getTransTime() {
  var transTimeGet = document.getElementById("transTimeGet");

  transTimeGet.value = hue.getTransitionTime();
  hue.getTransitionTime(transTimeGet.value);
}










function shortFlashAllLights() {
   hue.flashAll();
 }

function shortFlashLightN() {
  var lightNum = document.getElementById("shortFlashLightNInput");

  console.log("Short flash light number: " + lightNum.value);
  hue.flash(lightNum.value);
}



function longFlashAllLights() {
  console.log("here"); 
  hue.longFlashAll();
}


function longFlashLightN() {
  var lightNum = document.getElementById("longFlashLightNInput");

  console.log("Long flash light number: " + lightNum.value);
  hue.longFlash(lightNum.value);
}


function dimAll() {

  console.log("here");
  hue.dimAll();
}

function dimLightN() {

console.log("dim lights:" + lightNum.value)
hue.dimLight(lightNum.value) 
}




