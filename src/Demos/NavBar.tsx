import { NavLink } from 'react-router-dom'
import { MyButton } from '../index'

function NavBar() {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-30 w-[calc(100%-1.5rem)] md:w-auto">
            <div className="mx-auto flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md shadow-lg">
                <div className="mr-2 hidden md:block select-none text-white/90 font-semibold">MyUI 导航</div>
                <NavLink to="/" end className={({ isActive }) => isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'}>
                    <MyButton size="small" variant="link" color="blue">🏠 首页</MyButton>
                </NavLink>
                <NavLink to="/cards" className={({ isActive }) => isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'}>
                    <MyButton size="small" variant="link" color="blue">🎴 卡片演示</MyButton>
                </NavLink>
                <NavLink to="/buttons" className={({ isActive }) => isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'}>
                    <MyButton size="small" variant="link" color="blue">🔘 按钮演示</MyButton>
                </NavLink>
                <NavLink to="/panels" className={({ isActive }) => isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'}>
                    <MyButton size="small" variant="link" color="blue">📋 面板演示</MyButton>
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar
