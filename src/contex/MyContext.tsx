import {createContext} from "react";

type MyContestType = {
    counterValue: number;
    increment: (abj: number) => void
};

export const init = {
    counterValue: 0,
    increment:(obj: number) => {
        console.log(obj);
    }
};

export const MyContext = createContext<MyContestType>(init);