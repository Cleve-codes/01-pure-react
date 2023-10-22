import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        
        <Outlet />  {/** Used to render whatever route is to be displayed */} 
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
