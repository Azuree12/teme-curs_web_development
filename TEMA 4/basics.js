/*John Doe | M | BMI: 24 | Normal Weight
Mary Anne | F | BMI: 30 | Obese*/

/*BMI formula:
BMI = x KG / (y M * y M)
x=bodyweight in KG
y=height in m */


var personOne = {
    name: "John Doe",
    gender: "M",
    height: 1.6,
    weight: 70,
};
var personTwo = {
    name: "Mary Anne",
    gender: "F",
    height: 1.7,
    weight: 60,
};

function bmi(weight, height) {
    var bmi = parseInt(weight / height ** 2);

    if(bmi < 18.5){
        return bmi + "underweight";
    }
    else if (bmi < 25){
        return bmi + "normal";
    }
    else if (bmi < 30){
        return bmi + "overweight";
    }
    else {
        return bmi + "obese";
    }
}

console.log(
    personOne.name,
    "|",
    personOne.gender,
    "|",
    bmi(personOne.weight, personOne.height)
);

console.log(
    personTwo.name,
    "|",
    personTwo.gender,
    "|",
    bmi(personTwo.weight, personTwo.height)
);