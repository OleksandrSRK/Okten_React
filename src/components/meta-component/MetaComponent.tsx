import type {FC} from 'react';
import type {IMeta} from "../../models/ProductModel.ts";

type MetaPropType = {
    item: IMeta
}

export const MetaComponent: FC<MetaPropType> = ({item}) => {
    return (
        <div className={'div-component'}>
            <p>
                Created at: {item.createdAt}
            </p>
            <p>
                Updated at: {item.updatedAt}
            </p>
            <p>
                Barcode: {item.barcode}
            </p>
            <p>
                QR code: {item.qrCode}
            </p>
        </div>
    );
};