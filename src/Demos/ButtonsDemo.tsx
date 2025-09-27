import MyButton from "../Components/MyUI/MyButton/MyButton";
import { VARIANT_ROLE_STYLES } from "../Options";
import DemoLayout, { DemoSection } from "./DemoLayout";

const ButtonsDemo = () => {
    const variants = Object.keys(VARIANT_ROLE_STYLES) as (keyof typeof VARIANT_ROLE_STYLES)[];
    return (
        <DemoLayout
            title="MyButton 组件"
            description="全面的按钮组合，覆盖强调操作、文本链接、警示等场景，让界面在保持一致视觉语言的同时具备灵活的交互表现。"
        >
            <DemoSection
                title="基础按钮与变体"
                accentClassName="border-blue-500"
                description={(
                    <>
                        按钮提供多种 <code>variant</code> 预设，从主操作到次级文本按钮，依据角色与颜色组合即可快速匹配页面的视觉层级。
                    </>
                )}
            >
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {variants.map((variant) => (
                        <div key={variant} className="flex flex-col items-center space-y-2">
                            <MyButton variant={{ role: variant, color: 'blue' }} size="large">
                                {variant.charAt(0).toUpperCase() + variant.slice(1)}
                            </MyButton>
                            <code className="rounded bg-black/50 px-2 py-1 text-sm">{`variant={{ role: '${variant}', color: 'blue' }}`}</code>
                        </div>
                    ))}
                </div>
            </DemoSection>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                <DemoSection
                    title="场景化颜色"
                    accentClassName="border-green-500"
                    description={(
                        <>
                            通过 <code>color</code> 属性赋予按钮语义化情绪，用颜色区分成功、警示或默认操作，让用户快速理解当前状态。
                        </>
                    )}
                    className="h-full"
                >
                    <div className="flex flex-wrap justify-center gap-6">
                        <MyButton variant={{ role: 'success', color: 'blue' }}>保存成功</MyButton>
                        <MyButton variant={{ role: 'danger', color: 'red' }}>删除警告</MyButton>
                        <MyButton variant={{ role: 'warning', color: 'yellow' }}>操作确认</MyButton>
                        <MyButton variant={{ role: 'primary', color: 'blue' }}>常规操作</MyButton>
                    </div>
                </DemoSection>

                <DemoSection
                    title="尺寸与布局"
                    accentClassName="border-purple-500"
                    description={(
                        <>
                            <code>size</code> 属性提供 small / medium / large 三档尺寸，使按钮在拥挤的工具栏或强调的 Hero 区域中都能保持舒适的触达面积。
                        </>
                    )}
                    className="h-full"
                >
                    <div className="flex items-center justify-center gap-6">
                        <MyButton size="small" variant={{ role: 'primary', color: 'blue' }}>小型</MyButton>
                        <MyButton size="medium" variant={{ role: 'success', color: 'green' }}>中型</MyButton>
                        <MyButton size="large" variant={{ role: 'danger', color: 'red' }}>大型</MyButton>
                    </div>
                </DemoSection>
            </div>

            <DemoSection
                title="交互与投影 (Elevation)"
                accentClassName="border-indigo-500"
                description={(
                    <>
                        统一的交互系统为按钮提供一致的 <code>hover</code> 与 <code>active</code> 缩放反馈，通过 <code>glass</code> 与 <code>shadow</code> 的组合可以构建不同深度层次。
                    </>
                )}
                panelProps={{ className: "space-y-8" }}
            >
                <div className="space-y-3">
                    <h3 className="font-semibold">实体阴影（glass={'{false}'})</h3>
                    <div className="flex flex-wrap gap-4">
                        {(['sm', 'md', 'lg', 'xl'] as const).map((s) => (
                            <MyButton key={s} shadow={s} glass={false} variant={{ role: 'primary', color: 'blue' }}>
                                shadow={s}
                            </MyButton>
                        ))}
                    </div>
                </div>
                <div className="space-y-3">
                    <h3 className="font-semibold">玻璃态默认投影</h3>
                    <div className="flex flex-wrap gap-4">
                        {(['primary', 'secondary'] as const).map((v) => (
                            <MyButton key={v} variant={{ role: v, color: 'blue' }} glass>
                                {v}
                            </MyButton>
                        ))}
                    </div>
                </div>
                <div className="space-y-3">
                    <h3 className="font-semibold">Text 变体交互</h3>
                    <div className="flex gap-4">
                        <MyButton variant={{ role: 'text', color: 'blue' }}>普通 Text</MyButton>
                        <MyButton variant={{ role: 'text', color: 'purple' }}>自定义颜色</MyButton>
                    </div>
                </div>
            </DemoSection>

            <DemoSection
                title="特殊状态：玻璃拟态与禁用"
                accentClassName="border-gray-500"
                description={(
                    <>
                        借助 <code>glass</code> 可以与背景图形成通透的玻璃拟态，而禁用态则通过透明度和指针状态传递不可交互的反馈。
                    </>
                )}
            >
                <div className="grid grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center space-y-3">
                        <MyButton glass variant={{ role: 'primary', color: 'purple' }}>玻璃效果</MyButton>
                        <code className="rounded bg-black/50 px-2 py-1 text-white">glass={`{true}`}</code>
                    </div>
                    <div className="flex flex-col items-center space-y-3">
                        <MyButton glass={false} variant={{ role: 'primary', color: 'purple' }}>实体效果</MyButton>
                        <code className="rounded bg-black/50 px-2 py-1 text-white">glass={`{false}`}</code>
                    </div>
                    <div className="flex flex-col items-center space-y-3">
                        <MyButton disabled>禁用状态</MyButton>
                        <code className="rounded bg-black/50 px-2 py-1 text-white">disabled</code>
                    </div>
                </div>
            </DemoSection>
        </DemoLayout>

    );
};

export default ButtonsDemo;
