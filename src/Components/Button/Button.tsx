import * as React from 'react';

export interface Props {
    text: string,
    loading: boolean,
}

const Button: React.FC<Props> = ({ text, loading }) => {
    return (
        <button>{text}</button>
    );
}

export default Button;