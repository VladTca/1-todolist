// @flow
import * as React from 'react';

type Props = {
    title: string
    className: string
};

export const MainTitle = ({title, className}: Props) => {
    return (
        <h1 className={className}>{title}</h1>
    );
};