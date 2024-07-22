/*
TypeScript это строготипизированный язык программирования, фактически это альтернативный синтаксис JS или обертка над ним, а это значит, что в основе по прежнему лежит обычный JS. Однако для переменной, константы, для каждого аргумента функции и результата выполнения этой функции, для каждого класса, свойства и метода можно задать свой тип. 
Если задать типизацию для всех элементов, еще на стадии написания кода, можно легко отследить, где конкретно произошла ошибка.
*/
let name2: string;
name2 = "Jhon";

//? типизация объектов

type TypeUser = {
  name: string;
  age: number;
};

let user: TypeUser;
user = {
  name: "Jhon",
  age: 23,
};

type TypeAddress = {
  city: string;
  country: string;
};

let address: TypeAddress = {
  city: "Bishkrk",
  country: "Kyrgyzstan",
};
let common: TypeUser & TypeAddress;
common = {
  ...user,
  ...address,
};

//? типизация массивов
let arr: string[];
arr = ["23", "dfsfv", "23"];
// массив который можно только прочитывать, нельзя изменять
const arr2: ReadonlyArray<number> = [1, 2, 3, 4, 5];
const arr3: ReadonlyArray<any> = [1, "2", 3, "qwa", 5];

// типизация функции

type TypeGetNameReturn = {
  name: string;
};
type TypeGetNameFunction = (name: string) => TypeGetNameReturn;

const getName: TypeGetNameFunction = (name) => {
  return { name };
};
// TODO Представьте, у вас есть тип Animal, который имеет свойство name и метод makeSound(), выводящий звук животного в консоль. Напишите обьект Dog, который наследует Animal и переопределяет метод makeSound(), чтобы он выводил "Woof!" вместо общего звука животного.При вызове dog.makeSound() должно выходить Woof!
type Animal = {
  name: string;
  makeSound: () => void;
};
function createAnimal(name: string, sound: string): Animal {
  return {
    name,
    makeSound() {
      console.log(sound);
    },
  };
}

const dog: Animal = createAnimal("Buddy", "Woof!");
dog.makeSound();

// TODO Создайте функцию, которая проверяет, является ли строка палиндромом (читается одинаково в обоих направлениях)
function isPalindrome(str: string): boolean {
  let str1 = str.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let str2 = str1.split("").reverse().join("");

  return str1 === str2;
}
console.log(isPalindrome("LeveL"));
