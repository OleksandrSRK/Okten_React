import {useLocation} from "react-router-dom";
import type {IUser} from "../models/UserModel.ts";

const SingleUserDetailsPage = () => {

    const {state} = useLocation();
    const user = state as IUser;

    return (
        <div>
            {user.email}
        </div>
    );
};

export default SingleUserDetailsPage;