alert("Kasenov Yerniyaz, cs2121");
var dt = new Date("February, 2022 15:23:00");
document.write("Today : " + dt.getDay());
var value = dt.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var day = daylist[value];
document.write('<br>' + "Day: " + day);
const d = new Date();
let year = d.getFullYear();
document.getElementById("demo").innerHTML = 'Year is: ' + year;
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const df = new Date();
let name = month[df.getMonth()];
document.getElementById("month").innerHTML ="Month: " + name;
function multiplyBy()
{
num1 = document.getElementById("firstNumber").value;
num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy()
{
num1 = document.getElementById("firstNumber").value;
num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}
