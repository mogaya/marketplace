import AdminLogin from "./AdminLogin";
import BuyerLogin from "./BuyerLogin";
import VendorLogin from "./VendorLogin";

const loggedIn = () => {
  // return <VendorLogin />;
  // return <AdminLogin />;
  return <BuyerLogin />;
};

export default loggedIn;
