// <T> задає очікуваний тип даних для конкретного виклику
// тому її можна використовувати для різних записів у localStorage
export const retriveLocalStorage = <T>(key: string) => {

    // дістаєм з локального сховища object по ключу
    // або пустий string якщо такого ключа не існує
    const object = localStorage.getItem(key) || '';

    // якщо значення за ключем немає то повертаємо порожній об'єкт
    // а `as T` повідомляє TypeScript очікуваний тип і не перевіряє об'єкт під час виконання
    if (!object) {
        return {} as T;
    }

    // localStorage зберігає рядки а JSON.parse відновлює значення з JSON в об'єкт
    // `as T` повідомляє TypeScript очікуваний тип і не перевіряє об'єкт під час виконання
    const parse = JSON.parse(object);
    return parse as T;
}