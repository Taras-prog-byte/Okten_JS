// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// let a='hello',
//     b='owu',
//     c='com',
//     d='ua',
//     f=1,
//     g=10,
//     h=-999,
//     i=123,
//     j=3.14,
//     k=2.7,
//     l=16,
//     m=true,
//     n=false;
//
// console.log(a);
// alert(a);
// document.write(a+'<br>');
// console.log(b);
// alert(b);
// document.write(b+'<br>');
// console.log(c);
// alert(c);
// document.write(c+'<br>');
// console.log(d);
// alert(d);
// document.write(d+'<br>');
// console.log(f);
// alert(f);
// document.write(f+'<br>');
// console.log(g);
// alert(g);
// document.write(g+'<br>');
// console.log(h);
// alert(h);
// document.write(h+'<br>');
// console.log(i);
// alert(i);
// document.write(i+'<br>');
// console.log(j);
// alert(j);
// document.write(j+'<br>');
// console.log(k);
// alert(k);
// document.write(k+'<br>');
// console.log(l);
// alert(l);
// document.write(l+'<br>');
// console.log(m);
// alert(m);
// document.write(m+'<br>');
// console.log(n);
// alert(n);
// document.write(n+'<br>');
//
//
// console.log('--------------------------------------------------')
// document.write('<br>'+'---------------------------------------------'+'<br>')
//
// //Переприсвоїти кожній змінній з завдання значення на довільне.
// //   Вивести кожну змінну за допомогою: console.log , alert, document.write
//
// a=1;
// b=2;
// c=3;
// d=NaN;
// f=undefined;
// g=false;
// h=true;
// i='hello';
// j='goodbye';
// k='';
// l=12;
// m=153;
// n='good';
//
// console.log(a);
// alert(a);
// document.write(a+'<br>');
// console.log(b);
// alert(b);
// document.write(b+'<br>');
// console.log(c);
// alert(c);
// document.write(c+'<br>');
// console.log(d);
// alert(d);
// document.write(d+'<br>');
// console.log(f);
// alert(f);
// document.write(f+'<br>');
// console.log(g);
// alert(g);
// document.write(g+'<br>');
// console.log(h);
// alert(h);
// document.write(h+'<br>');
// console.log(i);
// alert(i);
// document.write(i+'<br>');
// console.log(j);
// alert(j);
// document.write(j+'<br>');
// console.log(k);
// alert(k);
// document.write(k+'<br>');
// console.log(l);
// alert(l);
// document.write(l+'<br>');
// console.log(m);
// alert(m);
// document.write(m+'<br>');
// console.log(n);
// alert(n);
// document.write(n+'<br>');
//


//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// let firstName = 'Тарас',
//     middleName = 'Кропивницький',
//     lastName = 'Сергійович';
//
// let person = middleName + ' ' + firstName + ' ' + lastName;
// console.log(person);


//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let firstName, middleName, lastName;
// firstName = prompt('input your firstName')
// lastName = prompt('input your lastName')
// age = prompt('input your age')
//
// document.write('Вітаю ' + firstName + ' ' + lastName + '. Тобі ' + age + ' років')



// //- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//  let a = 100; let b = '100'; let c = true;
// console.log(typeof a + '||' + typeof b + '||' + typeof c)

//- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!

// 5 < 6, ->true
// 5 > 6 -> false
// 5 >= 6 -> false
// 5 == 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 != 10 -> false
// 10 < 10 -> false
// 10 > 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true



//- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>");      205- стрічка + число = стрічка
//      document.write(str - a + "<br/>");      15 - приведення типів
//      document.write(str * "2" + "<br/>");    40 - приведення типів
//      document.write(str / 2 + "<br/>");      10 - приведення типів






//===========classwork===================\\
//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

// let a = [], result=0;
// const max = 50, min = 5;
//
// for (let i = 0; i < 10; ++i){
//     a[i]=Math.floor(Math.random() * (max - min)) + min
//     result+=a[i]
// }
//
// console.log(a)
// console.log(result)



//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
//
// let book = {
//     name: 'Зона покриття',
//     numOfPages: '370',
//     type:'Horror'
// };
// console.log(book);



//Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
// let book = {
//     name: 'Зона покриття',
//     numOfPages: '370',
//     type:'Horror',
//     authors:['1-st author', "2-nd author", "3-rd author"]
// };
// console.log(book);


//4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
//
// let books=[
//     {
//         name: '1-st book',
//         numOfPages: 370,
//         type:'Horror',
//         authors:['1-st author', "2-nd author", "3-rd author"]
//     },
//     {
//         name: '2-nd book',
//         numOfPages: 200,
//         type:'Horror',
//         authors:['1-st author', "2-nd author", "3-rd author"]
//     },
//     {
//         name: '3-rd book',
//         numOfPages: 520,
//         type:'Horror',
//         authors:['1-st author', "2-nd author", "3-rd author"]
//     },
//     {
//         name: '4-th book',
//         numOfPages: 430,
//         type:'Horror',
//         authors:['1-st author', "2-nd author", "3-rd author"]
//     },
// ];
// for (let book of books){
//     console.log(book);
// }



//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.
// let S,
//     figure={
//         height:23,
//         width:10
//     };
//
// S= figure.height*figure.width
// console.log('Площа прямокутника: ' + S + 'см')



//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.
// let V,
//     figure={
//         height:10,
//         dC:4
//     };
// V=Math.PI*Math.pow(figure.dC, 2)*figure.height;
// console.log("Об'єм циліндра: " + V + 'см');



//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//        Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
// let k,
//     figure={
//         n:3,
//         m:4
//     };
//
// k = Math.pow(Math.pow(figure.m, 2)+Math.pow(figure.n, 2), 1/2)
// console.log('Гіпотенуза = ' + k + 'см')