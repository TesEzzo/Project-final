import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
    const auth = useSelector((state) => state.auth);

    return (
        <>
            <footer className="bg-red-300 h-96 w-screen">
            {auth.token != null ? <Link to="/whoAreWe">Chi Siamo?</Link> : ""}
            </footer>
        </>
    )
}

export default Footer;