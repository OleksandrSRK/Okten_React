import type {FC} from 'react';

type MyComponentPropType = {
    text: string,
    children?: React.ReactNode
};

const MyComponent: FC<MyComponentPropType> = ({text, children}) => {
    return (
        <div className="text-3xl font-bold underline">
            <h2>{text}</h2>
            <p>{children}</p>
        </div>
    );
}

export default MyComponent;



/*
import React from 'react';

const MyComponent = () => {
    return (
        <div>

        </div>
    );
};

export default MyComponent;
*/