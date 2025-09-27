import { MyNav } from "../Components/MyUI/MyNav";
import { MyButton } from "../Components/MyUI/MyButton";

function NavsDemo() {
    return (
        <div className="w-full p-4 space-y-4">
            <h2 className="text-xl font-bold">Solid Nav</h2>
            <MyNav
                variant={{ role: 'primary', color: 'blue' }}
                brand={<a href="#" className="font-bold text-lg">MyApp</a>}
                menu={
                    <>
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </>
                }
                actions={
                    <MyButton size="small">Login</MyButton>
                }
            />
            <h2 className="text-xl font-bold">Soft Nav</h2>
            <MyNav
                variant={{ role: 'secondary', color: 'blue' }}
                brand={<a href="#" className="font-bold text-lg">MyApp</a>}
                menu={
                    <>
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </>
                }
                actions={
                    <MyButton size="small" variant={{ role: 'secondary', color: 'blue' }}>Login</MyButton>
                }
            />
            <h2 className="text-xl font-bold">Glass Nav</h2>
            <MyNav
                glass
                brand={<a href="#" className="font-bold text-lg">MyApp</a>}
                menu={
                    <>
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </>
                }
                actions={
                    <MyButton size="small" glass>Login</MyButton>
                }
            />
        </div>
    );
}

export default NavsDemo;
