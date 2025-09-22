import MyPanel from "../Components/MyUI/MyPanel"

export default function PanelsDemo() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            <MyPanel variant="primary" color="indigo" size="large" glassMorphism>
                <h2 className="text-xl font-bold mb-2">主面板</h2>
                <p>这是一个带玻璃态和主色主题的大面板。</p>
            </MyPanel>
            <MyPanel variant="secondary" color="cyanBlue" size="medium">
                <h2 className="text-lg font-semibold mb-2">次面板</h2>
                <p>次级内容区域，适合分区展示。</p>
            </MyPanel>
            <MyPanel variant="danger" color="rose" size="small" shadow={false}>
                <span className="font-bold">警告面板</span>
                <p className="text-sm">无阴影，适合提示类内容。</p>
            </MyPanel>
            <MyPanel variant="normal" color="slate" size="medium" disabled>
                <h2 className="text-lg">禁用面板</h2>
                <p>不可交互，仅做内容展示。</p>
            </MyPanel>
        </div>
    )
}
