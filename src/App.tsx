import './App.css'
import LeftBranch from "./components/LeftBranch.tsx";
import RightBranch from "./components/RightBranch.tsx";
import {init, MyContext} from "./contex/MyContext.tsx";
import {useState} from "react";

function App() {

    const [booleanTheme, setDarkTheme] = useState<boolean> (init.darkTheme)


    return (
        <>
            <MyContext.Provider value={{
                darkTheme: booleanTheme,
                changingTheme: () => {
                    setDarkTheme(current => !current)
                }
            }}>
                <div className={booleanTheme ? "dark" : "light"}>
                    <LeftBranch/>
                    <RightBranch/>
                </div>
            </MyContext.Provider>
        </>
    )
}

export default App