import { NavLink } from "react-router-dom"

const Header = () => {
  return (
   <header className={"min-h-16 flex justify-center items-center px-4"}>
    
    <nav className="min-h-10 w-[70rem] bg-[#A0DEFF] rounded flex justify-between items-center px-10">
     {/* So here sa navlink lang sya gumagana ha, heheheh////*/}
      <NavLink  to="/"  className={({isActive}) => isActive? 'a':undefined}  end>HomePage</NavLink>
      <NavLink to="/events" className={({isActive}) => isActive? 'a':undefined} end>EventPage</NavLink>
      <NavLink to="/events/new" className={({isActive}) => isActive? 'a':undefined}>NewEventPage</NavLink>
    </nav>
   </header>
  )
}

export default Header