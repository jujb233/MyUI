import { createContext, useContext } from 'react';

/**
 * Creates a context and provider for a compound component.
 * @param displayName - The display name of the component for debugging.
 * @returns [useContext, Provider, Context]
 */
export function createCompoundComponentContext<T>(displayName: string) {
    // 1. Create Context
    const Context = createContext<T | null>(null);
    Context.displayName = `${displayName}Context`;

    // 2. Create a custom hook to consume the context
    const useComponentContext = () => {
        const contextValue = useContext(Context);
        if (contextValue === null) {
            throw new Error(`'use${displayName}Context' must be used within a <${displayName}.Provider>`);
        }
        return contextValue;
    };

    // 3. Return the hook and provider
    return [useComponentContext, Context.Provider, Context] as const;
}
