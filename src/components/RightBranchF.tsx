import {useContext} from "react";
import {MyContext} from "../contex/MyContext.tsx";

const RightBranchF = () => {


    const {darkTheme, changingTheme} = useContext(MyContext);

    return (
        <div>
            RightBranchF
            <br/>
            <button onClick={changingTheme}>{darkTheme ? 'Turn off dark theme' : 'Turn on dark theme'}</button>
        </div>
    );
};

export default RightBranchF;