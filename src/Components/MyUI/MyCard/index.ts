import CardRoot from "./MyCard";
import { CardImage } from "./CardImage";
import { CardHeader } from "./CardHeader";
import { CardContent } from "./CardContent";
import { CardFooter } from "./CardFooter";
import { CardActions } from "./CardActions";
import { CardTags } from "./CardTags";

export const MyCard = Object.assign(CardRoot, {
    Image: CardImage,
    Header: CardHeader,
    Content: CardContent,
    Footer: CardFooter,
    Actions: CardActions,
    Tags: CardTags,
});

export default MyCard;
export * from './MyCard';
