import "./TodoComponent.css"
import type {FC} from 'react';
import type {ITodo} from "../../models/TodoModel.ts"

type UserPropType = {
    item: ITodo,
}

const TodoComponent: FC<UserPropType> = ({item}) => {
    return (
        <>
            <div className={'div-component'}>
                <h2>
                    {item.userId}, {item.id}
                </h2>
                <p>
                    {item.title}
                </p>
                <p>
                    {item.completed}
                </p>
            </div>
        </>
    );
};

export default TodoComponent;