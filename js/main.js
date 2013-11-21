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

function setAllColors(color) {
  console.log("Set all lights to Color: " + color);
  hue.setAllColors(color);  
}


function turnOnLightN(index) {
  console.log("Turn on light number: " + index);
  hue.turnOn(index);
}

function turnOffLightN(index) {
  console.log("Turn off light number: " + index);
  hue.turnOff(index);

}

function setLightNColor(index, color) {
  console.log("Set lights #: " + index + " to Color: " + color);
  hue.setColor(index, color);
}


function setTransTime(transTime) {
  console.log("Set transition time to: " + transTime);
  hue.setTransitionTime(transTime);
}

function getTransTime(transTime) {
  transTime.value = hue.getTransitionTime();
}


function shortFlashAllLights() {
   hue.flashAll();
 }

function shortFlashLightN(index) {
  console.log("Short flash light number: " + index);
  hue.flash(index);
}


function longFlashAllLights() {
  hue.longFlashAll();
}

function longFlashLightN(index) {
  console.log("Long flash light number: " + index);
  hue.longFlash(index);
}


function setAllBrightness(briVal) {
  console.log("Set all Brightness: " + briVal);
  hue.setAllBrightness(briVal);
}

function setBrightness(index, briVal) {
  console.log("Set light: " + index + " Brightness: " + briVal);
  hue.setBrightness(index, briVal);
}


function dimAll(dimVal) {
  console.log("Dim All: " + parseInt(dimVal));
  hue.dimAll(parseInt(dimVal));
}

function dimLightN(index, dimVal) {
  console.log("Dim light: " + index + " value: " + parseInt(dimVal));
  hue.dim(index, parseInt(dimVal));
}


