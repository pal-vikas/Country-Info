import { Link } from "react-router-dom";

function Navbar()
{
    return(
        <>
            <div className=" p-4 border-b border-neutral-200 mt-2">
                <div className="w-[900px] mx-auto flex items-center justify-between ">
                  {/* <a className="text-3xl font-semibold" href="">Instagram</a> */}
                  <Link to={'/' } className="text-3xl font-semibold">Instagram</Link>
                    <div className="flex gap-3 text-xl font-medium">
                        {/* <a href="/requests">Requests</a> */}
                        <Link to={'/Country' }>Country</Link>
                        {/* <a href="/about">About Us</a> */}
                        <Link to={'/About'}>About Us</Link>
                        <Link to={'/contact'}>Contact Us</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;