import {createContext} from "react";

type MyContestType = {
    darkTheme: boolean;
    changingTheme: () => void;
};

export const init = {
    darkTheme: false,
    changingTheme: () => {},
};

export const MyContext = createContext<MyContestType>(init);