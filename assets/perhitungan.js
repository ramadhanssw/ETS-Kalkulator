const calculator = {
	displayNumber: '0',
	allNumber: null,
	negative: '0',
};

function updateDisplay() {
	document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
	calculator.displayNumber = '0';
	calculator.allNumber = null;
}

function inputDigit(digit) {
	if(calculator.displayNumber === '0') {
		calculator.allNumber = digit;
		calculator.displayNumber = digit;
	}else{
		calculator.displayNumber += digit;
		calculator.allNumber += digit;
	}	
}

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
	button.addEventListener("click", function(event) {

		const target = event.target;

		if(target.classList.contains("clear")) {
			clearCalculator();
			updateDisplay();
			return;
		}

		if(target.classList.contains("negative")) {
			inverseNumber();
			updateDisplay();
			return;
		}

		if(target.classList.contains("equals")) {
			performCalculation();
			updateDisplay();
			return;
		}

		inputDigit(target.innerText);
		updateDisplay();
	});
}

function inverseNumber() {
	if(calculator.displayNumber === '0') {
		return;
	}
	if (calculator.negative == 0) {
		calculator.displayNumber = "-(" + calculator.allNumber + ")";
		calculator.allNumber = calculator.allNumber * -1;
		calculator.negative = '1';	
	} else {
		calculator.allNumber = calculator.allNumber * -1;
		calculator.displayNumber = calculator.allNumber;
		calculator.negative = '0';	
	}
}

function performCalculation() {
	if(calculator.allNumber == null) {
		alert("Anda belum menetapkan perhitungan");
		return;
	}

	let result = 0;

	if(calculator.allNumber) {
		result = eval(calculator.allNumber);
	}

	const history = {
		displayNumber: calculator.displayNumber,
		result: result
	}

	putHistory(history); 
	calculator.displayNumber = result;
 	renderHistory();
}