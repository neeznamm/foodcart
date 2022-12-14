//TODO Ana

import {useLocation} from "react-router-dom";

const Menu = () => {
    const location = useLocation()
    return <>
        <h1>TODO Ana</h1>
        {/*Koga stranicava ja otvaras preku klik na nekoj od restoranite vo offers, go imas objektot restoran (si pisuvas location.state.[atribut]).
        {/*ID-to go koristis za da go napravis bukvalno istoto kako vo Offers.js (samo GET requestot vaka: /products?_start=[...]&_end=[...])
        i posle si go crtas gridot so podatocite od artiklite. Za artiklite kje stavis kopce ADD TO CART i kje mu go predades
        selektiraniot atribut na Marko klasata (Cart.js), isto so useNavigate() vo ovaa komponenta, a on kje si iskoristi useLocation*/}
        {/*sry ako iskomplicirav, ama kje go bide, veruvam :) (ps bazata e 142MB i github ne dozvoluva, pa nad drive ja staiv, kje ja simeneme i kje ja
	stavime u src/data/)*/}

        <p><b>Primer info za restoran</b><br/>id:{location.state.id}<br/>{location.state.name} <br/>tags: {location.state.tags} <br/>itn itn.</p>
        </>
}

export default Menu
