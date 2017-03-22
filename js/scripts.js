/*Створити масиви і вивести їх в консоль:
- з 20 випадкових дробових чисел від 0 до 1;
- з 30 випадкових цілих чисел від 1 до 100;
- з трьох строк тексту випадкової довжини від 8 до 16 символів;
- з 6-и чисел, що відповідають кодам символів строки "Hello!"

var a = [];
function random(){
	for (var i=0; i<20; i++){
		a[i]=(Math.random());
	}
}
random();
console.log(a);



var b = [];
function random(max, min){
	for (var i=0; i<30; i++){
		b[i]=Math.floor(Math.random()*(max-min)) + min;
	}
}
random(1, 100);
console.log(b);



var arr = [];
var str = 'Loremipsumdolorsitamet, consectetur';

function randomNumber(max, min){
	return (Math.floor(Math.random()*(max-min))+min);
}

function randomStr(n){
	var newStr = '';
	for (var i=0; i<n; i++){
		newStr += str[randomNumber(1, str.length)];
	}
	return newStr;
}
for (var i=0; i<3; i++){
	arr[i] = randomStr(randomNumber(8, 16))
}
console.log(arr);

var arr = [];
var str = 'Hello!';
function charCode(str){
	for(i=0; i<str.length; i++){
		arr[i] = str.charCodeAt(i);
	}
}
charCode(str);
console.log(arr); */


// Створіть циклом масив з цифр [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024].

// var a = [];
// for (i=0; i<11; i++){
// 	a[i] = Math.pow(2, i);
// }
// console.log(a);

// var a = [];
// for (var i =1; i <= 1024; i *= 2){
// 	a.push(i);
// }
// console.log(a);


/* Створити двовимірний масив 10х10 випадкових чисел від 1 до 10.

var a = [];
var sum = 0;
var sumR = [];
for (var i = 0; i < 10; i++) {
  a[i] = [];
  sumR.push(0);
  for (var j = 0; j < 10; j++) {
    a[i][j] = Math.floor(Math.random() * 10) + 1;
    sum += a[i][j];
    sumR[i] += a[i][j];
  }
}
res = sum / (a.length * a[0].length);


var sumC = [];
for (var j = 0; j < a[0].length; j++) {
  sumC.push(0);
  for (var i = 0; i < a.length; i++) {
    sumC[j] += a[i][j];
  }
}
console.log(sum + '(' + res + ')');
console.log(sumR);
console.log(sumC); */




/* Перевірте, що ваша функція, яка видає випадкове число від 50 до 100, 
працює правильно: викличте її 50 мільйонів разів та переконайтеся, 
що кожне число випало приблизно 1 мільйон разів.
Особливу увагу приділіть першому та останньому числу (50 та 100).
Строго кажучи, в даному випадку вірогідність випадання кожного 
числа - 980 тисяч, оскільки в проміжку [50..100] є 51 число і 50 млн.
 / 51 = 0,98 млн.

function random() {
  return Math.floor(Math.random() * 50) + 50;
}
var a = [];
		a[50] = 0;
for (var i = 51; i < 101; i++) {
  a[i] = 0;
}
for (i = 0; i < 50000; i++) {
a[random()]++;
}
console.log(a); */




/* Створіть циклом масив з 5 трійок. Змініть перший елемент на пустий 
масив, а другий - на слово "ківі".
Додайте 7-й елемент, виведіть масив в консоль.
Ініціалізуйте 6-й елемент підмасивом з 5 трійок найоптимальнішим 
способом.
Результат виведіть в консоль.  

var a = [];
a[5] = [];
for(i=0; i<5; i++){
	a[i] = 3;
  a[5][i] = 3;
}
a[0] = [];
a[1] = 'kiwi';
a[6] = '7 element';
console.log(a); */




/* Виведіть в консоль масив посортований в прямому та зворотньому 
порядку не застосовуючи метод .reverse().
Створіть масив строк кольорів райдуги, посортуйте їх у прямому та 
зворотньому напрямку.

var a = [5, 10, 15, 7, 9, 12, 4, 2, 1];
a.sort(fun);
function fun(a, b){ return a - b; }
console.log(a); */

/* var a = ['blue', 'red', 'green', 'yellow'];
a.sort();
a.reverse();
console.log(a); */



/* Програмно створіть двовимірний масив mAs 3*3 заповнений числами - 
результатом множення номера рядка на номер строки.
В другий рядок добавте на початок 5, а в кінець - 7.
Переберіть масив методом forEach, виведіть в консоль матрицю з цифр 
0 чи 1 в залежності від того - непарне чи парне число.
Виведіть в консоль.
З першого рядка вилучіть та збережіть у змінну останній елемент, 
а з третього рядка - другий елемент.
З середнього рядка вилучіть другий елемент і замініть його двома 
новими елементами, які ви вилучили перед цими.
В консоль виведіть масив, а також добуток третього вилученого 
елемента з дргим елементом, який піднятий до степеня першого 
елемента.

var a = [];
for (i = 0; i < 3; i++) {
  a[i] = [];
  for (j = 0; j < 3; j++) {
    a[i][j] = i * j;
  }
}
a[1].unshift(5);
a[1].push(7);

var s = a.map(function(e) {
	return e.map(function(b){
   return (b % 2 === 0) ? 1 : 0;
  });
});
for(var i = 0; i<s.length; i++){
	console.log(...s[i]);
}

var x = a[0].pop();
var c = a[2].splice(2, 1)[0];
var v = a[1].splice(1, 1, x, c);
console.log(a);
console.log(x);
console.log(c);
var g = v * Math.pow(c, x)
console.log(g); 




/*Потрібно:
- видалити з масива строкові дані (пошук строкових значень здійснити програмно);
- добавити числа 5 і 40;
- відсортувати масив за зростанням;
- вивести результат в консоль.

var arr = [7, 2, "35", 1, 16, 8, "html", 's', 99];
arr = arr.filter(function(e) { return typeof e != 'string'});
arr.push(5, 40);
arr.sort(function(a, b) { return a - b});
console.log(arr); */




/* Створіть масив строк з обласних центрів України. Посортуйте 
їх в прямому порядку по другій літері, в зворотньому 
напрямку - по останній, результати виведіть в консоль.

console.clear();
var region = ['Одеськф', 'Дніпропетровська', 'Чернігівська',
'Харківська', 'Житомирська', 'Полтавська', 'Херсонська',
'Київська', 'Запорізька', 'Вінницька', 'Миколаївська', 
'Кіровоградська', 'Сумська', 'Львівська', 'Черкаська', 
'Хмельницька', 'Волинська', 'Рівненська', 'Івано-Франківська',
'Тернопільська', 'Закарпатська', 'Чернівецька'
];
region.sort(fun);
function fun(element1; element2){
var alph = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя';
	if (alph.indexOf(element1[1]) > alph.indexOf(element2[1]) )
		{return 1}
	else {return -1}
}
console.log(region); */




/*Сервер присилає список користувачів у вигляді масиву в 
порядку їх реєстрації (по ідентифікатору в базі даних).
Відображенням результату на клієнті займається функція 
userTable(a), що приймає в себе масив.
Підкогуйте масив, відсортувавши імена по алфавіту.

var us = ['Татарчук', 'Їжачкова', 'Гаврилюк', 'Оберман', 
'Саксаганський', 'Миловська', 'Аніськов', 'Єфремов', 
'Стробольський', 'Ґрант', 'SирeгНаɔkǝг', 'Кацман', 
'Ступова', 'Шамінська', 'Вороний', 'Ігнатьєва'];
us.sort(sort);
function sort(a, b){
var alph = 'sабвгґдеєжзиіїйклмнопрстуфхцчшщьюяabcd';
	if(alph.indexOf(a[0].toLowerCase()) > alph.indexOf(b[0].toLowerCase())){
	return 1;}
  else {
  return -1;}
}
console.log(us);
*/



/*Переберіть всіх користувачів та виводьте в консоль кожне 
прізвище, в якому є м'який знак.
var mass = ['Татарчук', 'Їжачкова', 'Гаврилюк', 'Оберман','Саксаганський', 'Миловська', 'Аніськов', 'Єфремов', 'Стробольський', 'Ґрант', 'Кацман', 'Ступова', 'Шамінська', 'Вороний', 'Ігнатьєва'];
function fun(){
	for(var i=0; i<mass.length; i++){
  	for(var j=0; j<mass[i].length; j++){
   		if(mass[i].charAt(j)==='ь')
   		console.log(mass[i]);
  	}
  }
}
fun();

//Second variant!
mass.forEach(function(e) {
	(e.includes('ь')) ? console.log(e) : false;
}); */



/*Дано 2 масива з 5 елементів кожен, в яких знаходяться 
строкові значення кольорів (виберіть довільні, але щоб 
не дублювалися на одних і тих же місцях в обох масивах).
В html створіть список <ul id="list"> з п'ятьох елементів, 
з іменами героїв вашого улюбленого телешоу, серіалу, 
улюблених страв...
Програмно добавте нумерацію рядків до списка і крапку 
з комою - в кінці рядка: */

/* var list = document.getElementById('list').children;
var textColor = ['green', 'red', 'blue', 'pink', 'aqua'];
var bgColor = ['yellow', 'coral', 'crimson', 'darkred', 'gold'];
for(i = 0; i < list.length; i++){
	list[i].style.listStyleType = 'none';
	if(i === list.length-1){
		list[i].innerText = i+1 + ') ' + list[i].innerText + '.';
	} else{
		list[i].innerText = i+1 + ') ' + list[i].innerText + ';';
	}
list[i].style.color = textColor[Math.floor(Math.random()*5)];
list[i].style.background = bgColor[Math.floor(Math.random()*5)];
}

//Second variant
var list = document.getElementById('list').children,
		len = list.length,
		textColor = ['darkgreen', 'darkred', 'blue', 'navy', 'red'],
		bgColor = ['yellow', 'coral', 'skyblue', 'lime', 'gold'],
    s = '';
for (var i = 0; i < len; i++) {
	s = s + 'li:nth-child('+(i+1)+') { color: '+textColor[Math.floor(Math.random() * 5)]+' } li:nth-child('+(i+1)+') { background: '+bgColor[Math.floor(Math.random() * 5)]+' } ';
}
var st = document.createElement('style');
st.innerText = s;
document.head.appendChild(st);

//Third variant
var list = document.getElementById('list').children,
		len = list.length,
		textColor = ['darkgreen', 'darkred', 'blue', 'navy', 'red'],
		bgColor = ['yellow', 'coral', 'skyblue', 'lime', 'gold'];
for (i = 0; i < len; i++) {
  list[i].innerText = i + 1 + ') ' + list[i].innerText + ';';
  list[i].style.color = textColor[Math.floor(Math.random() * 5)];
  list[i].style.background = bgColor[Math.floor(Math.random() * 5)];
}
list[len-1].innerText = list[len-1].innerText.slice(0, -1) + '.'; */