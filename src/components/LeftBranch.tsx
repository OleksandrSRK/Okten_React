import LeftBranchA from "./LeftBranchA.tsx";
import {useMemo} from "react";

const LeftBranch = () => {


    useMemo(() => {
        for (let i = 0; i < 100; i++){
            console.log(i)
        }
        return null;
    }, []);


    return (
        <div>
            LeftBranch
            <LeftBranchA/>
        </div>
    );
};

export default LeftBranch;