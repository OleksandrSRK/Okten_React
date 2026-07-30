import type {FC} from 'react';
import type {IDimensions} from "../../models/ProductModel.ts";

type DimensionsPropType = {
    item: IDimensions
}

export const DimensionsComponent: FC<DimensionsPropType> = ({item}) => {
    return (
        <div className={'div-component'}>
            <p>
                Width: {item.width}
            </p>
            <p>
                Height: {item.height}
            </p>
            <p>
                Depth: {item.depth}
            </p>
        </div>
    );
};