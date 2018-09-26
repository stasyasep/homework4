// Створіть функцію, що повертає протилежне значення х. Результат виводьте в консоль:
// x = 5;
// в консоль вивести число -5
// x = -4;
// в консоль вивести число 4

console.groupCollapsed('Протилежне значення х');

let a = -4;

function getOppositeValue(){
	return -a;
}

console.log(getOppositeValue());

console.groupEnd();

// Створіть функцію, що розраховує об'єм коробки і повертає результат розрахунку.
// Розміри коробки x, y та z питайте у користувача за допомогою prompt

console.groupCollapsed("Об'єм коробки");

let x = +prompt('Введіть x :','0');
let y = +prompt('Введіть y :','0');
let z = +prompt('Введіть z :','0');

function getVolume(){
	return x*y*z;
}

console.log(getVolume());

console.groupEnd();

// Створіть функцію, що повертає одне зі значень:
// x більше 20 - квадрат цього числа
// х менше 0 - куб цього числа
// х дорівнює 0 - null
// x від 0 до 20 і парне - половину цього числа
// x від 0 до 20 і непарне - потрійне число (наприклад, x = 17, результат = 171717)

console.groupCollapsed('Функція, що повертає одне із значень');

let b = +prompt('Введіть число :','0');
function fun(){
	if(b>20){
		return b*b;
	}
	else if(b<0){
		return b*b*b;
	}
	else if(b===0){
		return null;
	}
	else if(b%2===0){
		return b/2;
	}
	else{
		let res = ""+b+b+b;
		return parseInt(res);
	}
}

console.log(fun());

console.groupEnd();

// Створіть функцію, яка запитує в користувача його ім'я (prompt) і повертає вітання виду: "Ласкаво просимо, %username% !".
// Викличте цю функцію для того, щоб задати текст для <h1> сторінки:
// document.querySelector('h1').innerText = ???;

function showGreetings(){
	let username = prompt("Представтесь, будь ласка!","");
	if(!username){
		return "Ласкаво просимо, містер х!";
	}
	else{
		return "Ласкаво просимо, %"+username+"%!";
	}
}
document.querySelector('h1').innerText = showGreetings();

// Дано кнопку і чотири текстових поля: first-name, last-name, phone, email (не огортайте їх в тег form, нам поки що не потрібно нічого відправляти на сервер).
// Звернутися до введеного в поле значення можна таким чином:
// document.querySelector('[name="phone"]').value
// Створіть функцію валідації форми - перевірки на те, чи немає пустих полів.
// Якщо пустих полів немає, то функція повинна повертати true, інакше - false;
// Валідацію виконуйте при натисканні на кнопку.
// Порада: почніть з одного поля. Коли скрипт буде працювати - додайте ще одне і т.д.

let Butt = document.getElementById('span_like_button');

Butt.onclick = function verifyValidation(){

	let firstName = document.querySelector('[name="first-name"]').value;
	let lastName = document.querySelector('[name="last-name"]').value;
	let phone = document.querySelector('[name="phone"]').value;
	let email = document.querySelector('[name="email"]').value;

	if(firstName.length>0&&lastName.length>0&&phone.length>0&&email.length>0){
		return true;
	}
	else{
		return false;
	}
}
