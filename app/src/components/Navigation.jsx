import { NavLink } from "react-router-dom";
const Navigation = () => {
    return (
        <div className="navigation sticky top-4 z-50">
            <ul className="flex gap-2 pl-8 ">
                <li>
                    <NavLink to="/" className={({isActive})=>`hover:text-green-400 ${isActive ? 'nav-active':'' }`}>Accueil</NavLink>
                </li>
             
                <li>
                    <NavLink to="/about" className={({isActive})=>`hover:text-green-400 ${isActive ? 'nav-active':'' }`}>A propos</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;