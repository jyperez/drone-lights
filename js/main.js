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
}


function setAllColors() {
  var lightColor = document.getElementById("allLightsColor");

  console.log("Set all lights to Color: " + lightColor.value);

  hue.setAllColors(lightColor.value);  
}



function turnOnLightN() {
  var lightNum = document.getElementById("turnOnLightNInput");

  console.log("Turn on light number: " + lightNum.value);
  
}


function turnOffLightN() {
  var lightNum = document.getElementById("turnOffLightNInput");

  console.log("Turn off light number: " + lightNum.value);

}


function setLightNColor() {
  var lightNum = document.getElementById("lightN");
  var lightColor = document.getElementById("lightNColor");

  console.log("Set lights #: " + lightN.value + " to Color: " + lightNColor.value);

}





function shortFlashAllLights() {
}

function shortFlashLightN() {
  var lightNum = document.getElementById("shortFlashLightNInput");

  console.log("Short flash light number: " + lightNum.value);
  
}



function longFlashAllLights() {
}


function longFlashLightN() {
  var lightNum = document.getElementById("longFlashLightNInput");

  console.log("Long flash light number: " + lightNum.value);
  
}



