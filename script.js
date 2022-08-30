const inputEl = document.querySelector("#input_el");
const resetBtn = document.querySelector("#reset_btn");
const convertBtn = document.getElementById("convert_btn");
const lengthEl = document.getElementById("length_el");
const volumeEl = document.getElementById("volume_el");
const massEl = document.getElementById("mass_el");

convertBtn.addEventListener("click", function () {
    if(inputEl.value > 0){
        Conversion();
       }
});

resetBtn.addEventListener('click', function(){
    lengthEl.innerHTML = "";
    volumeEl.innerHTML = "";
    massEl.innerHTML = "";
    document.getElementById("input_el").value = '';
    
})

function onInput(){
    inputEl.value = inputEl.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
}

function Conversion() {
    let data = +inputEl.value;
    let length = `${data} meters = ${(data * 3.281).toFixed(3)} feet | ${data} feet = ${(data / 3.281).toFixed(3)} meters`;
    lengthEl.innerHTML = length;
    
    let mass = `${data} Liters = ${(data * 0.264).toFixed(3)} gallons | ${data} gallons = ${(data / 0.264).toFixed(3)} liters`;
    massEl.innerHTML = mass;
    
    let volume = `${data} kilos = ${(data * 2.204).toFixed(3)} pounds | ${data} pounds = ${(data / 2.204).toFixed(3)} kilos`;
    volumeEl.innerHTML = volume;
}


