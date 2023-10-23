import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">

      {isLoading && <Loader/>}
      <Header />

      <main>
        
        <Outlet />  {/** Used to render whatever route is to be displayed */} 
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
