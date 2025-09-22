import MyPanel from "../Components/MyUI/MyPanel";
import MyButton from "../Components/MyUI/MyButton";

const PanelsDemo = () => {
    return (
        <div className="p-8 space-y-8">
            <h2 className="text-2xl font-bold">Panel Examples</h2>

            <MyPanel>
                <h3 className="font-bold text-lg mb-2">Default Panel</h3>
                <p>This is a standard panel with default settings (medium size, glass effect).</p>
            </MyPanel>

            <MyPanel variant="primary" size="large">
                <h3 className="font-bold text-xl mb-2">Large Primary Panel</h3>
                <p>A large panel with the primary color variant.</p>
                <div className="mt-4">
                    <MyButton color="white">Inner Button</MyButton>
                </div>
            </MyPanel>

            <MyPanel glass={false} shadow="lg" color="amber">
                <h3 className="font-bold text-lg mb-2">Solid Panel with Shadow</h3>
                <p>This panel has no glass effect but a large shadow.</p>
            </MyPanel>

            <MyPanel size="small" disabled>
                <h3 className="font-bold text-md mb-2">Disabled Panel</h3>
                <p>This panel is disabled and cannot be interacted with.</p>
            </MyPanel>
        </div>
    );
};

export default PanelsDemo;
