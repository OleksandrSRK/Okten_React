import {useContext} from "react";
import {MyContext} from "../contex/MyContext.tsx";

const LeftBranchF = () => {


    const {darkTheme} = useContext(MyContext)

    return (
        <div>
            LeftBranchF

            <p>Dark Theme = {String(darkTheme)}</p>
            <hr/>
        </div>
    );
};

export default LeftBranchF;