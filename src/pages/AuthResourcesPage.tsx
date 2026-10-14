import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

const AuthResourcesPage = () => {

    useEffect(() => {
        loadAuthProducts().then(products => {
            console.log(products);
        }).catch(reason => {
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