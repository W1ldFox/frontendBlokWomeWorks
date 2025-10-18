const book = {
  title: "Герой нашего времени",
  author: "Михаил Лермонтов",
  year: 1840,
  
  getSummary() {
    return `Название: ${this.title}, Автор: ${this.author}, Год издания: ${this.year}`;
  }
};

console.log(book.getSummary());


// 


const laptop = {
  brand: "Apple",
  model: "MacBook Air",
  processor: "M2",
  price: 120000
};

for (let key in laptop) {
  console.log(`${key}: ${laptop[key]}`);
}

const entries = Object.entries(laptop);
console.log(entries);


//


const basicInfo = {
  name: "Эдуард",
  age: 24
};

const contactInfo = {
  email: "edik.1609@mail.ru",
  phone: "+7 931 513 0252"
};

const preferences = {
  language: "ru",
  theme: "dark"
};


const userProfile = Object.assign({}, basicInfo, contactInfo, preferences);
console.log(userProfile);


userProfile.theme = "light";
console.log("После изменения:", userProfile);


Object.freeze(userProfile);

delete userProfile.email;

console.log(userProfile);
