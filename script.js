function volume_sphere() {
const radiusInput = document.getElementById('radius');
const volumeOutput = document.getElementById('volume');
const radius = parseFloat(radiusInput.value);
const volume = (4/3)*Math.PI*Math.pow(radius, 3);
volumeOutput.value = volume.toFixed(2);
} 

 window.onload = function () {
 	document.getElementById('MyForm').onsubmit = volume_sphere;
 }
