import type { Component } from 'solid-js';

export * from './button';

export interface ICompoundComponent<T extends Record<string, any>> extends Component<T> {
    [key: string]: any;
}