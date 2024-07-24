import "./Nabvar.css";
import Link from "next/link";
export default function Navbar() {
    return (
        <div className="navbar">
            <Link className="navbar-link"
                href="/">
                Madzia & Szymon
            </Link>
        </div>
    )
}