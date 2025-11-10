import MyCardRoot from "./MyCard"
import { CardOptions } from "./subcomponents/CardOptions"
import { CardContent } from "./subcomponents/CardContent"
import { CardFooter } from "./subcomponents/CardFooter"
import { CardTitle } from "./subcomponents/CardTitle"
import { CardImage } from "./subcomponents/CardImage"
import { CardTags } from "./subcomponents/CardTags"
import type { Component } from "solid-js"
import type { IMyCardProps } from "./types"

type MyCardComponent = Component<IMyCardProps> & {
    Options: typeof CardOptions
    Content: typeof CardContent
    Footer: typeof CardFooter
    Title: typeof CardTitle
    Image: typeof CardImage
    Tags: typeof CardTags
}

const MyCard: MyCardComponent = Object.assign(MyCardRoot, {
    Options: CardOptions,
    Content: CardContent,
    Footer: CardFooter,
    Title: CardTitle,
    Image: CardImage,
    Tags: CardTags
})

export { MyCard }
export default MyCard
export * from "./types"
