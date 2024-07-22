var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/*
TypeScript это строготипизированный язык программирования, фактически это альтернативный синтаксис JS или обертка над ним, а это значит, что в основе по прежнему лежит обычный JS. Однако для переменной, константы, для каждого аргумента функции и результата выполнения этой функции, для каждого класса, свойства и метода можно задать свой тип.
Если задать типизацию для всех элементов, еще на стадии написания кода, можно легко отследить, где конкретно произошла ошибка.
*/
var name2;
name2 = "Jhon";
var user;
user = {
    name: "Jhon",
    age: 23,
};
var address = {
    city: "Bishkrk",
    country: "Kyrgyzstan",
};
var common;
common = __assign(__assign({}, user), address);
//? типизация массивов
var arr;
arr = ["23", "dfsfv", "23"];
// массив который можно только прочитывать, нельзя изменять
var arr2 = [1, 2, 3, 4, 5];
var arr3 = [1, "2", 3, "qwa", 5];
var getName = function (name) {
    return { name: name };
};
function createAnimal(name, sound) {
    return {
        name: name,
        makeSound: function () {
            console.log(sound);
        },
    };
}
var dog = createAnimal("Buddy", "Woof!");
dog.makeSound();
// TODO Создайте функцию, которая проверяет, является ли строка палиндромом (читается одинаково в обоих направлениях)
function isPalindrome(str) {
    var str1 = str.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    var str2 = str1.split("").reverse().join("");
    return str1 === str2;
}
console.log(isPalindrome("LeveL"));
