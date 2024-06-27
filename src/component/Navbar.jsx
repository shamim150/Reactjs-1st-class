import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <nav className='py-4 bg-zinc-400 flex'>
                <div className="container mx-auto flex justify-between items-center">
                    <p>LOGO</p>

                    <ul className='flex gap-14'>
                        <li> <Link to= "/"> Home</Link>  </li>
                        <li> <Link to= "/about"> About</Link>  </li>
                        <li> <Link to= "/service"> Service</Link>  </li>
                        <li> <Link to= "/contact"> Contact</Link>  </li>
                      
    
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;