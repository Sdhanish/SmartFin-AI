
import { checkUser } from "@/lib/checkUser";
import HeaderClient from "./header-client";


const Header = async () => {
  await checkUser();

  return (
    <HeaderClient/>
  );
};
// SoJp4Vh6V5T7nccn
export default Header;
