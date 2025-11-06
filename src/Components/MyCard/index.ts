import MyCardRoot from "./MyCard"
import { CardActions } from "./subcomponents/CardActions"
import { CardContent } from "./subcomponents/CardContent"
import { CardFooter } from "./subcomponents/CardFooter"
import { CardHeader } from "./subcomponents/CardHeader"
import { CardImage } from "./subcomponents/CardImage"
import { CardTags } from "./subcomponents/CardTags"
import type { ICompoundComponent } from "../../Interfaces"
import type { IMyCardProps } from "./types"

type MyCardComponent = ICompoundComponent<IMyCardProps> & {
    Actions: typeof CardActions
    Content: typeof CardContent
    Footer: typeof CardFooter
    Header: typeof CardHeader
    Image: typeof CardImage
    Tags: typeof CardTags
}

const MyCard = MyCardRoot as MyCardComponent

MyCard.Actions = CardActions
MyCard.Content = CardContent
MyCard.Footer = CardFooter
MyCard.Header = CardHeader
MyCard.Image = CardImage
MyCard.Tags = CardTags

export { MyCard }
export default MyCard
export * from './types'
