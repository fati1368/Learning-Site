import { NavLink } from "react-router-dom"
export default function Menu({menuItems=[]}) {
    function renderMenu(){
        return menuItems.map(({id,title,LinkMenu})=>{
            return(
             <li key={id}  className="">
                <NavLink to={LinkMenu} className="submenu__link">{title}</NavLink> 
            </li>
            )
        })
    }
return <ul>{renderMenu()}</ul>
}
