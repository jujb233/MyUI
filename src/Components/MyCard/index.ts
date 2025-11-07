import MyCardRoot from "./MyCard"
import { CardActions } from "./subcomponents/CardActions"
import { CardContent } from "./subcomponents/CardContent"
import { CardFooter } from "./subcomponents/CardFooter"
import { CardHeader } from "./subcomponents/CardHeader"
import { CardImage } from "./subcomponents/CardImage"
import { CardTags } from "./subcomponents/CardTags"
import type { Component } from "solid-js"
import type { IMyCardProps } from "./types"

type MyCardComponent = Component<IMyCardProps> & {
    Actions: typeof CardActions
    Content: typeof CardContent
    Footer: typeof CardFooter
    Header: typeof CardHeader
    Image: typeof CardImage
    Tags: typeof CardTags
}

const MyCard: MyCardComponent = Object.assign(MyCardRoot, {
    Actions: CardActions,
    Content: CardContent,
    Footer: CardFooter,
    Header: CardHeader,
    Image: CardImage,
    Tags: CardTags
})

export { MyCard }
export default MyCard
export * from "./types"
