import LeftSection from "./sections/LeftSection";
import RightSection from "./sections/RightSection";
import NavLayout from "../components/NavLayout";

const LoggedOut = () => {
  return (
    <NavLayout
      leftContent={<LeftSection />}
      rightContent={<RightSection />}
    ></NavLayout>
  );
};

export default LoggedOut;
