import { Outlet } from "react-router";
import Header from './Header';

const MainRoot = () => {
  return (
    <>
     <Header/>
     <Outlet/>
    
    </>
  )
}

export default MainRoot