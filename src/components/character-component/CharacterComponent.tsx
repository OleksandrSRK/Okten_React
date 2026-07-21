import './CharacterComponentStyle.css';
import type {ReactNode} from 'react';
import type {ISimpsonModel} from "../../models/SimpsonModel.ts";

interface CharacterComponentProps {
    item: ISimpsonModel,
    children: ReactNode,
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className="div-component">
            <h2>{item.name} {item.surname}</h2>
            <img src={item.photo} alt={item.name}/>
            <p>Age: {item.age}</p>
            <p>{children}</p>
        </div>
    );
};

export default CharacterComponent;