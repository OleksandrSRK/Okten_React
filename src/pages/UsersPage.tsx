import UsersComponent from "../components/users-component/UsersComponent.tsx";
import PaginationComponent from "../components/pagination-component/PaginationComponent.tsx";

const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default UsersPage;