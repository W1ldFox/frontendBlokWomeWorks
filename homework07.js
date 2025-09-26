// Задание 1  pop\push

let movies = ['Звёздные войны', 'Зверополис', 'Робокоп', 'Терминатор', 'Кластелин Волец']

movies.push('Пласетлиновая ворона')
let removeLast = movies.pop()

console.log(movies)
console.log('Удалённый элемент: ', removeLast)




//задание 2 filter()

const numbers = [12, 5, 8, 130, 44];

const bigNumbers = numbers.filter(n => n > 10);
console.log(bigNumbers);



//Задание 3

const books = [

{ title: 'Мастер и Маргарита', pages: 450 },

{ title: 'Преступление и наказание', pages: 550 },

{ title: 'Евгений Онегин', pages: 300 }

];

console.log(books.sort((a, b) => a.pages - b.pages))



//Задумался о том, как отсортировать книги по алфавитному порядку, но не смог разобраться. ChatGPT посоветовал метод locateCompare, но я не очень понял, как именно он работает 

//Задание 4

const students = [

{ name: 'Аня', grade: 4 },

{ name: 'Иван', grade: 5 },

{ name: 'Маша', grade: 3 },

{ name: 'Сергей', grade: 2 },

{ name: 'Катя', grade: 4 }

];


const excellentStudent = students.filter(n => n.grade > 3)
console.log(excellentStudent)

const unableStudent = students.filter(n => n.grade <= 3)
console.log(unableStudent)
