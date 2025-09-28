import type * as React from 'react';

/** 可选：多态 as 支持（需要时为交互组件提供） */
export type AsComponent<E extends React.ElementType> = {
    as?: E;
};

export type PolymorphicComponentProps<E extends React.ElementType, P> =
    P &
    AsComponent<E> &
    Omit<React.ComponentPropsWithRef<E>, keyof P | 'as'>;
