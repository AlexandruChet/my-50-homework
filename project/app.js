const myPole1 = 'Привіт'
const myPole2 = 'Світ'

function myFunctionForPole(pole1, pole2) {
	if (pole1 !== '' && pole2 !== '') {
		console.log('Обидва поля заповнені')
	} else {
		console.log('Не всі поля заповнені')
	}
}

myFunctionForPole(myPole1, myPole2)

const const1 = 5
const const2 = 7
const result = const1 + const2

if (result > 10) {
	console.log('Сума більша за 10')
} else {
	console.log('Сума менша або дорівнює 10')
}

const myText = 'JavaScript'

if (myText.includes('JavaScript')) {
	console.log('Текст містить слово JavaScript')
} else {
	console.log('Текст не містить слово JavaScript')
}

const MyNumber = 15

if (MyNumber > 10 && MyNumber < 20) {
	console.log('Число входить в діапазон від 10 до 20')
} else {
	console.log('Число не входить в діапазон від 10 до 20')
}

const myName = 'Sascha'
const email = 'sascha@emaqil.com'
const mypassword = 'mypassword'

if (
	myName.length >= 3 &&
	email.includes('@') &&
	email.includes('.') &&
	mypassword.length >= 6
) {
	console.log('Перенаправлення на іншу сторінку')
} else {
	console.log('Помилка: неправильне заповнення')
}

function myFunctionForField() {
	const button1 = document.getElementById('textbutton1')
	const button2 = document.getElementById('textbutton2')

	if (button1 !== '' && button2 !== '') {
		alert('Обидва поля заповнені')
	} else {
		alert('Не всі поля заповнені')
	}
}

function myFunctionForNumberButton() {
	const numbutton1 = parseFloat(document.getElementById('numbutton1'))
	const numbutton2 = parseFloat(document.getElementById('numbutton2'))
	const myNewResult = numbutton1 + numbutton2

	if (myNewResult > 10) {
		alert('Сума більша за 10')
	} else {
		alert('Сума менша або дорівнює 10')
	}
}

function checkForJS() {
    const myNewText = document.getElementById('TextFieldInput').value;

    if (myNewText.includes('JavaScript')) {
        alert('True JS here');
    } else {
        alert('False');
    }
}

function checkForNumberRange() {
    const number = parseFloat(document.getElementById("myNewnumberField").value);

    if (number > 10 && number < 20) {
        alert("Число входить в діапазон від 10 до 20");
    } else {
        alert("Число не входить в діапазон від 10 до 20");
    }
}

const myNewName = document.getElementById("myNewEmail").value;
const myNewEmail = document.getElementById("myNewEmail").value;
const password = document.getElementById("myNewPassword").value;

const emailProverka = myNewEmail.includes("@") && email.includes(".");
const passwordProverka = password.length >= 7;

function myFunctionForNameEmailPassword() {

    if (myNewName.length >= 3 && emailProverka && passwordProverka) {
        alert("True");
    } else {
        alert("False");
    }
}