
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let btn=document.getElementById("btn");
let inputEl=document.getElementById("input");




let pLen=document.getElementById("len-para");
let pVolm=document.getElementById("volm-para");
let pMass=document.getElementById("mass-para");


btn.addEventListener("click",function(){

    let value=parseFloat(inputEl.value);
    
    const metersToFeet = (value * 3.28084).toFixed(3);
    const feetToMeters = (value / 3.28084).toFixed(3);

    // Volume conversion
    const litersToGallons = (value * 0.264172).toFixed(3);
    const gallonsToLiters = (value / 0.264172).toFixed(3);

    // Mass conversion
    const kilosToPounds = (value * 2.20462).toFixed(3);
    const poundsToKilos = (value / 2.20462).toFixed(3);

    // Update results
    pLen.innerText = 
        `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;

    pVolm.innerText = 
        `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;

    pMass.innerText = 
        `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos`;
})