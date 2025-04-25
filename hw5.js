//==================>ex 1
let yourChoise = ""
const drink = prompt("оберіть напій : кава , чай або сік").toLowerCase()
switch (drink){
    case "кава":
    yourChoise = "кава"
    break

    case "чай":
        yourChoise = "чай"
        break

        case "сік":
    yourChoise = "сік"
    break

    default:
        console.log("перевірте чи обраний вами напій є в меню");
        break
}
console.log(yourChoise);
//=================================


//====================ex 2
let day = ""
const choiseDay = prompt("введіть будь який день тижня").toLowerCase()
if (choiseDay === "понеділок" || choiseDay === "вівторок" || choiseDay === "середа" || choiseDay === "четверг" || choiseDay === "п'ятниця"){
day = "робочий день"
}else if (choiseDay === "субота" || choiseDay === "неділя"){
    day = "вихідний"
}else {
    console.log("перевірте введені дані");
    
}
console.log(day);


//=======================



//===========================ex 3
let num = ""
const monthDay = Number(prompt("введіть номер місяця щоб дізнатися пору року"))
if (monthDay === 1 || monthDay === 2 || monthDay === 12){
    num = "зима"
}else if (monthDay === 3 || monthDay === 4 || monthDay === 5){
    num = "весна"
}else if(monthDay === 6 || monthDay === 7 || monthDay === 8){
    num = "літо"
}else if(monthDay === 9 || monthDay === 10 || monthDay === 11){
    num = "осінь"
}else{
    console.log("такого місяця не існує");
    
}
console.log(num);
//==================================

//===============================ex 4
let color = ""
const uwaga = prompt("введіть колір : зелений , жовтий або червоний").toLowerCase()
switch (uwaga){
    case "зелений":
    color = "йти!"
    break
    case "жовтий":
        color = "зачекай!"
        break
        case "червоний":
            color = "стоп!"
            break
                default:
                    console.log("перевіртечи правильно введений колір");
                    break
}
console.log(color);

//================================================





//====================================ex5
let sum = ""
const firstNumber = Number(prompt("введіть будь-яке число"))
const secondeNumber = Number(prompt("введіть будь-яке число"))
const operator = prompt("введіть будь-який математичний оператор (+ , - , / , *)")
if(operator === "+"){
    sum = firstNumber + secondeNumber
}else if(operator === "-"){
    sum = firstNumber - secondeNumber
}else if (operator === "/"){
    sum = firstNumber / secondeNumber
}else if(operator === "*"){
    sum = firstNumber * secondeNumber
}else {
console.log("перевірте чи правильно введені дані");

}
console.log(sum);





//==================================================
