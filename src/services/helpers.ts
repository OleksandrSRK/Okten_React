export const retriveLocalStorage = <T>(key: string) => {

    // дістаєм з локального сховища object по ключу
    // або пустий string якщо такого ключа не існує
    const object = localStorage.getItem(key) || '';

    // якщо об'єкта не існує то повертаєм примусово типізований об'єкт
    if (!object) {
        return {} as T;
    }

    // інакше передаєм JSON.parse в змінну parse
    // та повертаєм примусово типізований parse
    const parse = JSON.parse(object);
    return parse as T;
}