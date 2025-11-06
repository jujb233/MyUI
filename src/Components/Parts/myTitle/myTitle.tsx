import { type Component, type JSX, Show, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import clsx from 'clsx'

export type MyTitleProps = {
    children?: JSX.Element
    /** Heading level 1-6 (defaults to 3) */
    level?: 1 | 2 | 3 | 4 | 5 | 6
    class?: string
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const tagMap: Record<NonNullable<MyTitleProps['level']>, HeadingTag> = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
}

export const MyTitle: Component<MyTitleProps> = (props) => {
    const [local] = splitProps(props, ["children", "level", "class"]);
    const tag = () => tagMap[local.level ?? 3] ?? 'h3';

    return (
        <Show when={local.children}>
            <Dynamic component={tag()} class={clsx('myui-title', local.class)}>
                {local.children}
            </Dynamic>
        </Show>
    )
}

export default MyTitle
