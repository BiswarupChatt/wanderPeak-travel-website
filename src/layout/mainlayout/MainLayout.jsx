import { Outlet } from "react-router-dom";
// import Navbar from "./component/Navbar/Navbar";
import MainNavbar from "./component/NavbarTwo/MainNavbar";
import Footer from "./component/Footer/Footer";
import SecondaryNavbar from "./component/NavbarTwo/SecondaryNavbar";
import { useEffect, useState } from "react";

export default function MainLayout() {

    const [showSecondary, setShowSecondary] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setShowSecondary(false); // scrolling down
        } else {
            setShowSecondary(true); // scrolling up
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);


    return (
        <>
            <MainNavbar />
            <SecondaryNavbar visible={showSecondary} />
            <Outlet />
            <Footer />
        </>
    );
} 