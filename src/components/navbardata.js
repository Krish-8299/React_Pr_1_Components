import { FiSearch } from "react-icons/fi";
import { HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi";

const navbarData = {
  brand: {
    name: "AUDIO PRO",
    logo: "/images/logo.png",
  },

  menu: [
    { label: "Home", href: "/" },
    { label: "Catalog", href: "/catalog" },
    { label: "Speakers", href: "/speakers" },
    { label: "Amplifiers", href: "/amplifiers" },
    { label: "Subwoofers", href: "/subwoofers" },
    { label: "Accessories", href: "/accessories" },
    { label: "Blog", href: "/blog" },
  ],

  actions: [
    { icon: <FiSearch size={18} /> },
    { icon: <HiOutlineUser size={18} />, text: "My account" },
    { icon: <HiOutlineShoppingBag size={18} />, text: "0,00 €" },
  ],
};

export default navbarData;
