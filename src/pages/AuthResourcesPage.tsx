import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

const AuthResourcesPage = () => {

    useEffect(() => {  // хук useEffect для виконання loadAuthProducts
        loadAuthProducts().then(products => {
            console.log(products); // отримує products та виводить їх
        }).catch(reason => {
            // при помилці виводимо її, оновлює токени та повторює запит
            console.log(reason);
            refresh()
                .then(() => loadAuthProducts())
                .then(value => console.log(value))
        })
    }, []);

    return (
        <div>
            Auth Resources Page
        </div>
    );
};

export default AuthResourcesPage;