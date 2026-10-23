import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

const AuthResourcesPage = () => {

    useEffect(() => {  // хук useEffect для виконання loadAuthProducts
        loadAuthProducts().then(products => {
            console.log(products); // отримує products та виводить їх
        }).catch(reason => {
            // якщо access token із часом дії в одну хвилину вже прострочений то захищений запит відхиляється
            // і ми оновлюємо токени (refresh()) та повторюємо запит

            console.log(reason);

            // Promise-ланцюжок виконується послідовно: перший then чекає завершення refresh і повертає Promise повторного запиту
            // наступний then чекає на цей запит і отримує список продуктів.
            refresh()
                .then(() => loadAuthProducts())
                .then(value => console.log(value))
        })
    }, []); // після першого рендеру сторінки один раз запускаємо завантаження захищених продуктів

    return (
        <div>
            Auth Resources Page
        </div>
    );
};

export default AuthResourcesPage;