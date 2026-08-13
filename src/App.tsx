import './App.css'
import PaginationComponent from "./components/pagination/PaginationComponent.tsx";
import UsersComponent from "./components/users-component/UsersComponent.tsx";

function App() {

  return (
    <>
        <UsersComponent/>
        <hr/>
        <PaginationComponent/>
    </>
  )
}

export default App
