import CardRoot from "./MyCard"
import { CardImage } from "./CardImage"
import { CardHeader } from "./CardHeader"
import { CardContent } from "./CardContent"
import { CardFooter } from "./CardFooter"
import { CardActions } from "./CardActions"
import { CardTags } from "./CardTags"

// Export subcomponents as named exports to encourage composition
export { CardImage, CardHeader, CardContent, CardFooter, CardActions, CardTags }

// Keep named export for MyCard (component root) for compatibility, but
// do NOT attach subcomponents onto it (breaking old MyCard.X access).
export const MyCard = CardRoot
export default MyCard
export * from './MyCard'
