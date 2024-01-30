import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer"

export default function Master() {
    return (
        <>
            {/* <div style={{ height: '100vh' }}> */}
                <NavBar />
                <Outlet />
            {/* </div> */}
            <Footer />
        </>
    )
}