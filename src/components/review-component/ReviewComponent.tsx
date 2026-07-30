import type {FC} from 'react';
import type {IReview} from "../../models/ProductModel.ts";

type ReviewPropType = {
    item: IReview
}

export const ReviewComponent: FC<ReviewPropType> = ({item}) => {
    return (
        <div className={'div-component'}>
            <p>
                Rating: {item.rating}
            </p>
            <p>
                Comment: {item.comment}
            </p>
            <p>
                Date: {item.date}
            </p>
            <p>
                Reviewer Name: {item.reviewerName}
            </p>
            <p>
                Reviewer Email: {item.reviewerEmail}
            </p>
        </div>
    );
};