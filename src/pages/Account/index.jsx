import Footer from "../../components/shared/Footer";
import NavBarHeader from "../../components/shared/NavBarHeader";
import Login from "./Login";
import "./_account.scss";

export default function Account() {
  return (
    <>

      
      <NavBarHeader title={"Login"} />

      <Login />

      <Footer />
    </>
  );
}
