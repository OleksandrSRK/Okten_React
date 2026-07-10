import type {FC} from 'react';
import styles from './MyComponent.module.css';

type MyComponentPropType = {text: string};

const MyComponent: FC<MyComponentPropType> = ({text}) => {
    return <div className={styles.text_style}>{text}</div>
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