import MyCard from "../Components/MyUI/MyCard";
import MyButton from "../Components/MyUI/MyButton";

const CardsDemo = () => {
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Basic Card */}
                <MyCard
                    title="Basic Card"
                    content="This is a simple card with default styling."
                    actions={<MyButton size="small">Action</MyButton>}
                />

                {/* Card with Image */}
                <MyCard
                    title="Card with Image"
                    image="https://images.unsplash.com/photo-1559136560-16de2b2e42c7?w=500"
                    content="This card features an image at the top."
                    actions={<>
                        <MyButton size="small" variant="primary">Accept</MyButton>
                        <MyButton size="small" variant="normal">Decline</MyButton>
                    </>}
                />

                {/* Horizontal Card */}
                <MyCard
                    title="Horizontal Layout"
                    image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
                    imagePosition="left"
                    direction="horizontal"
                    content="Image on the left, content on the right."
                    size="medium"
                />

                {/* Glassmorphism Off */}
                <MyCard
                    title="No Glass Effect"
                    glass={false}
                    color="emerald"
                    content="This card has the glassmorphism effect turned off."
                    footer={<span>Footer Content</span>}
                />

                {/* Clickable Card */}
                <MyCard
                    title="Click Me!"
                    clickable
                    hoverable
                    color="rose"
                    content="This entire card is clickable."
                    onClick={() => alert("Card clicked!")}
                />

                {/* Card with Tags */}
                <MyCard
                    title="Card with Tags"
                    tags={["React", "TypeScript", "UI/UX"]}
                    content="Tags can be used to categorize content."
                    actions={<MyButton variant="link" color="blue">Read More</MyButton>}
                />
            </div>
        </div>
    );
};

export default CardsDemo;
