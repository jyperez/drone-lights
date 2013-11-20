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
  hue.setColor(lightNum.value,lightNColor.value);
}



function setTransTime() {
  var transTime = document.getElementById("transTime");

  console.log("Set transition time to: " + transTime.value);
  hue
  hue.setTransitionTime(transTime.value);
}


function getTransTime() {
  var transTimeGet = document.getElementById("transTimeGet");

  transTimeGet.value = hue.getTransitionTime();
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

function setAllBrightness() {
  var brightNum = document.getElementById("setAllBrightness");
  console.log("Set all Brightness:" + parseInt(brightNum.value));
  var obj = hue.setAllBrightness(parseInt(brightNum.value));
}

function setBrightness() {
  var lightNum = document.getElementById("lightNum");
  var brightNum = document.getElementById("setBrightness");
  console.log("Set Brightness:" + parseInt(brightNum.value));
  var obj = hue.setBrightness(lightNum.value, parseInt(brightNum.value));
}

function dimAll() {
  var dimNum = document.getElementById("dimAll");
  console.log("Dim All: " + parseInt(dimNum.value));
  hue.dimAll(parseInt(dimNum.value));
}

