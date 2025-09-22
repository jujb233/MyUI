import MyButton from "../Components/MyUI/MyButton";
import { COLOR_PRESET_NAMES, VARIANTS } from "../styles";

const ButtonsDemo = () => {
    return (
        <div className="p-8 space-y-8">
            <h2 className="text-2xl font-bold">Button Variants</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {VARIANTS.map((variant) => (
                    <MyButton key={variant} variant={variant} size="large">
                        {variant.charAt(0).toUpperCase() + variant.slice(1)}
                    </MyButton>
                ))}
            </div>

            <h2 className="text-2xl font-bold">Button Colors</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {COLOR_PRESET_NAMES.map((color) => (
                    <MyButton key={color} color={color}>
                        {color}
                    </MyButton>
                ))}
            </div>

            <h2 className="text-2xl font-bold">Button Sizes</h2>
            <div className="flex items-center gap-4">
                <MyButton size="small" color="blue">Small</MyButton>
                <MyButton size="medium" color="green">Medium</MyButton>
                <MyButton size="large" color="red">Large</MyButton>
            </div>

            <h2 className="text-2xl font-bold">Glass Effect</h2>
            <div className="flex items-center gap-4">
                <MyButton glass color="purple">Glass On</MyButton>
                <MyButton glass={false} color="purple">Glass Off</MyButton>
            </div>

            <h2 className="text-2xl font-bold">Disabled State</h2>
            <div className="flex items-center gap-4">
                <MyButton disabled>Disabled</MyButton>
                <MyButton disabled glass>Disabled Glass</MyButton>
            </div>
        </div>
    );
};

export default ButtonsDemo;
