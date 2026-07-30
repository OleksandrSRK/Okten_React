import type { FC } from "react";
import type { IReview } from "../../models/ProductModel";
import {ReviewComponent} from "../review-component/ReviewComponent.tsx";

type ReviewsPropType = {
    items: IReview[]
}

export const ReviewsComponent: FC<ReviewsPropType> = ({items}) => {
    return (
        <div className={'div-component'}>
            {
                items.map((review, index) => <ReviewComponent key={index} item={review}/>)
            }
        </div>
    );
};