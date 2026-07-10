import type {FC} from 'react';

type MyComponentPropType = {text: string};

const MyComponent: FC<MyComponentPropType> = ({text}) => {
    return <div className="text-3xl font-bold underline">{text}</div>
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