/* Simple Interest Calculator in JavaScript */
function calculate() {
    let P = parseFloat(prompt("Enter Principal Amount:"));
    let R = parseFloat(prompt("Enter Rate of Interest:"));
    let T = parseFloat(prompt("Enter Time in Years:"));
    let SI = (P * R * T) / 100;
    alert("The Simple Interest is: " + SI);
    console.log("The Simple Interest is:", SI);
}
