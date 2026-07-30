import type {FC} from 'react';
import type {IProduct} from "../../models/ProductModel.ts";
import {MetaComponent} from "../meta-component/MetaComponent.tsx";
import {DimensionsComponent} from "../dimensions-component/DimensionsComponent.tsx";
import {ReviewsComponent} from "../reviews-component/ReviewsComponent.tsx";

type ProductPropType = {
    item: IProduct
}

export const ProductComponent: FC<ProductPropType> = ({item}) => {
    return (
        <div className={'div-component'}>
            <h3>
                {item.id}) {item.title}
            </h3>
            <p>
                {item.description}
            </p>
            <p>
                Category: {item.category}
            </p>
            <p>
                Price: {item.price}, {item.discountPercentage}%
            </p>
            <p>
                Rating: {item.rating}
            </p>
            <p>
                Stock: {item.stock}
            </p>
            <p>
                Tags: {item.tags.map(tag => (<span key={tag}> {tag}</span>))}
            </p>
            <p>
                Brand: {item.brand}
            </p>
            <p>
                Brand: {item.brand}
            </p>
            <p>
                sku: {item.sku}
            </p>
            <p>
                Weight: {item.weight}
            </p>
            <h4>
                Dimensions:
            </h4>
            <DimensionsComponent item={item.dimensions}/>
            <p>
                Warranty Information: {item.warrantyInformation}
            </p>
            <p>
                Shipping Information: {item.shippingInformation}
            </p>
            <p>
                Availability Status: {item.availabilityStatus}
            </p>
            <h4>
                Reviews:
            </h4>
            <ReviewsComponent items={item.reviews}/>
            <p>
                Return Policy: {item.returnPolicy}
            </p>
            <p>
                Minimum Order Quantity: {item.minimumOrderQuantity}
            </p>
            <h4>
                Meta:
            </h4>
            <MetaComponent item={item.meta}/>
            <img src={item.thumbnail} alt={item.title} width={150}/>
            <div>
                {item.images.map((image, index) => (
                    <img key={index} src={image} alt={item.title} width={200}/>
                ))}
            </div>


        </div>
    );
};