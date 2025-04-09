import { NavLink } from "react-router-dom";
const Navigation = () => {
    return (
        <div className="navigation">
            <ul className="flex gap-2">
                <li>
                    <NavLink to="/" className={({isActive})=>`hover:text-green-400 ${isActive ? 'nav-active':'' }`}>Accueil</NavLink>
                </li>
             
                <li>
                    <NavLink to="/about" className="hover:text-green-400">A propos</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;