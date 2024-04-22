/* Реализуйте и экспортируйте по умолчанию функцию get(), 
которая извлекает из массива элемент по указанному индексу,
 если индекс существует, либо возвращает значение по умолчанию. 
 Исходный массив меняться не должен. Функция принимает на вход три аргумента:
 - Массив
 - Индекс
 - Значение по умолчанию (равно null) */


 const get = (array, index, defaultValue = null) => {
    return index >= 0 && index < array.length ? array[index] : defaultValue;
}

const cities = ['ulan-ude', 'seoul', 'irkutsk', 'moscow', '', null, undefined];

console.log(get(cities, 1)); // 'seuol'
console.log(get(cities, 4)); // ''
console.log(get(cities, 10, 'paris')); // 'paris'
console.log(get(cities, -1, 'oops')); // 'oops'
console.log(get(cities, 5, 'oops')); // null
console.log(get(cities, 6, 'oops')); // undefined
console.log(get(cities, 7)); // null