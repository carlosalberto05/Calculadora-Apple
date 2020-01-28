var operator = null;
var inputValueMemo = 0;

//Primero vamos a leer lo que el usuario presione
//cuando le den click a algun boton
function getContentClick(event) {
    const value = event.target.innerHTML;
    filterAction(value);
}

//Luego vamos a filtar para que ver si es un numero o alguna operacion
const filterAction = value => {
    value === "0" ? addNumberInput(0) : null;
    value === "1" ? addNumberInput(1) : null;
    value === "2" ? addNumberInput(2) : null;
    value === "3" ? addNumberInput(3) : null;
    value === "4" ? addNumberInput(4) : null;
    value === "5" ? addNumberInput(5) : null;
    value === "6" ? addNumberInput(6) : null;
    value === "7" ? addNumberInput(7) : null;
    value === "8" ? addNumberInput(8) : null;
    value === "9" ? addNumberInput(9) : null;
    value === "," ? addNumberInput(',') : null;

    value === "+" ? setOperation('+') : null;
    value === "-" ? setOperation('-') : null;
    value === "X" ? setOperation('*') : null;
    value === "/" ? setOperation('/') : null;
    value === "%" ? setOperation('%') : null;
    value === "+/-" ? setOperation('+/-') : null;

    value === "AC" ? resetCalculator() : null;
    value === "=" ? calculation() : null;

};

//Vamos a cambiar el valor de la screen al presionar algun número
function addNumberInput(value) {
    const inputScreen = document.getElementsByClassName('calculator__screen')[0];
    const inputValue = inputScreen.value;

    if (inputValue === "0" && inputValue.length === 1 && value !== ",") {
        inputScreen.value = value;
        return;
    }

    if (inputScreen.value === "" && value === ",") {
        inputScreen.vale = 0 + value;
        return;
    }

    inputScreen.value = inputValue + value;
}

//Funcion para guardar la operacion seleccionada y calcular la suma
function setOperation(operator) {
    const inputScreenValue = document.getElementsByClassName('calculator__screen')[0].value;
    this.operator = operator;

    if (inputScreenValue != 0) {
        calculation();
    }
}

function calculation() {
    const inputScreen = document.getElementsByClassName('calculator__screen')[0];
    let valueOne = transformCommaToPoint(this.inputValueMemo);
    let valueTwo = transformCommaToPoint(inputScreen.value);
    let total = 0;

    //Operacion de suma
    if (this.operator === "+" && inputScreen !== "") {
        total = valueOne + valueTwo;
    }

    //Operacion de resta
    if (this.operator === "-" && inputScreen !== "") {
        if (valueOne !== 0) {
            total = valueOne - valueTwo;
        } else {
            total = valueTwo;
        }
    }

    //Operacion de la multiplicacion
    if (this.operator === "*" && inputScreen !== "") {
        if (valueOne !== 0) {
            total = valueOne * valueTwo;
        } else {
            total = valueTwo;
        }
    }

    //Operacion de la division
    if (this.operator === "/" && inputScreen !== "") {
        if (valueOne !== 0) {
            total = valueOne / valueTwo;
        } else {
            total = valueTwo;
        }
    }

    if (this.operator === "%" && inputScreen.value !== "") {
        total = valueTwo / 100;
    }

    if (this.operator === "+/-" && inputScreen.value !== "") {
        if (valueTwo > 0) {
            total = -valueTwo;
        }
    }

    total = transformPointToComma(total);
    this.inputValueMemo = total;
    inputScreen.value = "";
    inputScreen.placeholder = total;
}

//Es una funcion tipo flecha porque no genera nada, solo operacion
const resetCalculator = () => {
    const inputScreen = document.getElementsByClassName('calculator__screen')[0];
    inputScreen.value = 0;
    this.inputValueMemo = 0;
    this.operator = null;
}

function transformCommaToPoint(value) {
    if (typeof value !== "number") {
        let resultTransform = value.replace(',', '.');
        return parseFloat(resultTransform);
    }
    return value;
}

function transformPointToComma(value) {
    let resultTransform = value.toString();
    resultTransform = resultTransform.replace('.', ',');
    return resultTransform;
}