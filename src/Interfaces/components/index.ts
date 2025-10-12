export * from './button';

export interface ICompoundComponent<T> extends React.ForwardRefExoticComponent<T> {
    [key: string]: any;
}