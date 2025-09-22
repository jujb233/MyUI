import MyButton from "../Components/MyUI/MyButton";
import MyPanel from "../Components/MyUI/MyPanel";
import { COLOR_PRESET_NAMES, VARIANTS } from "../styles";

const ButtonsDemo = () => {
    return (
        <div className="p-4 md:p-8 space-y-8">
            <MyPanel>
                <h2 className="text-2xl font-bold mb-4">按钮变体 (Variants)</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {VARIANTS.map((variant) => (
                        <MyButton key={variant} variant={variant} size="large">
                            {variant.charAt(0).toUpperCase() + variant.slice(1)}
                        </MyButton>
                    ))}
                </div>
            </MyPanel>

            <MyPanel>
                <h2 className="text-2xl font-bold mb-4">按钮颜色 (Colors)</h2>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                    {COLOR_PRESET_NAMES.map((color) => (
                        <MyButton key={color} color={color}>
                            {color}
                        </MyButton>
                    ))}
                </div>
            </MyPanel>

            <MyPanel>
                <h2 className="text-2xl font-bold mb-4">按钮尺寸 (Sizes)</h2>
                <div className="flex items-center gap-4">
                    <MyButton size="small" color="blue">小</MyButton>
                    <MyButton size="medium" color="green">中</MyButton>
                    <MyButton size="large" color="red">大</MyButton>
                </div>
            </MyPanel>

            <MyPanel>
                <h2 className="text-2xl font-bold mb-4">玻璃效果 (Glass)</h2>
                <div className="flex items-center gap-4">
                    <MyButton glass color="purple">开启</MyButton>
                    <MyButton glass={false} color="purple">关闭</MyButton>
                </div>
            </MyPanel>

            <MyPanel>
                <h2 className="text-2xl font-bold mb-4">禁用状态 (Disabled)</h2>
                <div className="flex items-center gap-4">
                    <MyButton disabled>禁用</MyButton>
                    <MyButton disabled glass>禁用 + 玻璃效果</MyButton>
                </div>
            </MyPanel>
        </div>
    );
};

export default ButtonsDemo;
