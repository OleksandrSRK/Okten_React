import './App.css'
import FormComponent from "./components/form-component/FormComponent.tsx";
import {useEffect} from "react";
import {getAllUsers, saveUser} from "./services/user.service.ts";

function App() {

    useEffect(() => {
        getAllUsers().then(value => console.log(value));

        saveUser({id: 1, name: "John", email: "john@gmail.com"}).then(value => console.log(value));
    })

  return (
    <>
        <FormComponent/>
    </>
  )
}

export default App
