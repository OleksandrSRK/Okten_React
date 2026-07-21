import './FamilyComponentStyle.css'
import {CharacterComponent} from "../character-component/CharacterComponent.tsx"
import {simpsons} from "../../data/SimpsonsModel.ts";


export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((value, index) => <CharacterComponent key={index} item={value}>
                    {value.info}
                </CharacterComponent>)
            }
        </div>
    );
};

export default FamilyComponent;