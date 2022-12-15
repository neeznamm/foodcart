//TODO Ana

import {useLocation} from "react-router-dom";

const Menu = () => {
    const location = useLocation()
    return(
        <>
        <p><b>Primer info za restoran</b><br/>id:{location.state.id}<br/>{location.state.name} <br/>tags: {location.state.tags} <br/>itn itn.</p>
        </>
    )
}

export default Menu
