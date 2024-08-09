import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    let navigate = useNavigate();

    return (
        <>
            <div className="bg-blue-600 text-white p-4">
                <div className="container mx-auto flex justify-between">
                    <img src="/logo_color.svg" onClick={() => navigate("/")} alt="" className=" hover: cursor-pointer"/>
                    <ul className="flex space-x-4">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contato</Link>
                    </li>
                    <li>
                        <Link to={"/products"}>Produtos</Link>
                    </li>
                    <li>
                        <Link to={"/about-us"}>Sobre nós</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;