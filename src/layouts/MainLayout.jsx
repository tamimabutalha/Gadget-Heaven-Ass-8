import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <div className="min-h-screen"></div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;