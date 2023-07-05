import React from 'react';
import logo from '../logo.png';
import './Navbar.css'
import { Link } from 'react-scroll'

// import { AiOutlineSearch } from 'react-icons/ai';
// import { IoMdFunnel } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa';


const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <>
      <div class="fixed z-50  top-0 w-full">
        <div className="relative bg-black ">
          <div className="w-full mx-auto px-2 sm:px-2 ">
            <div className="flex justify-between items-center   md:justify-start md:space-x-10 ">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-20 w-auto md:h-32"
                    src={logo}
                    alt=""
                  />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <button
                  type="button"
                  style={{ "color": "#C04BF2" }}
                  className=" rounded-md p-2 inline-flex items-center justify-center  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open menu</span>
                  {/* Heroicon name: outline/menu */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <nav className="hidden md:flex sm:space-x-6 md:space-x-8  ">


                <Link className="text-white  navitem text-[14px] lg:text-2xl hover:cursor-pointer"
                  activeClass='wlink' to="whoweare" spy={true} smooth={true} offset={-100} >
                  Who Are We?
                </Link>
                <Link className="navitem text-white text-[14px] lg:text-2xl hover:cursor-pointer"
                  activeClass='slink' to="services" spy={true} smooth={true} offset={-130} >
                  Services
                </Link>
                <Link className="navitem text-white text-[14px] lg:text-2xl hover:cursor-pointer"
                  activeClass='slink' to="portfolio" spy={true} smooth={true} offset={-130} >
                  Our Portfolio
                </Link>


                <Link className="navitem text-white text-[14px] lg:text-2xl hover:cursor-pointer"
                  activeClass='slink' to="whychooseus" spy={true} smooth={true} offset={-130} >
                  Why Choose Us?
                </Link>
                <Link className="navitem text-white text-[14px] lg:text-2xl  hover:cursor-pointer"
                  activeClass='slink' to="contactus" spy={true} smooth={true} offset={-130} >
                  Contact Us
                </Link>

              </nav>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <button class="hidden lg:block callbtn">
                  <span>Call Now</span>
                </button>
                {/* <a
                  href="#"
                  className="ml-8 sm:hidden md:block lg:hidden text-lg md:text-2xl whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base  contacticon"
                >
                  <FaPhone />
                </a> */}
              </div>

            </div>
          </div>


          <div
            className={
              open
                ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            }
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-black ">
              <div className="pt-2 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-20 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      style={{ "color": "#C04BF2" }}
                      className=" rounded-md p-2 inline-flex items-center justify-center  "
                      onClick={() => setOpen(!open)}
                    >
                      <span className="sr-only">Close menu</span>
                      {/* Heroicon name: outline/x */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
              <div className="py-6 px-5 space-y-6" >
                <div className="grid gap-y-4 gap-x-8 " >


                  <Link className="text-white navitem hover:cursor-pointer text-xl"
                    activeClass='wlink' to="whoweare" spy={true} smooth={true} offset={-130} >
                    Who Are We?
                  </Link>
                  <Link className="navitem text-white  hover:cursor-pointer text-xl"
                    activeClass='slink' to="services" spy={true} smooth={true} offset={-150} >
                    Services
                  </Link>
                  <Link className="navitem text-white  hover:cursor-pointer text-xl"
                    activeClass='slink' to="portfolio" spy={true} smooth={true} offset={-150} >
                    Our Portfolio
                  </Link>


                  <Link className="navitem text-white  hover:cursor-pointer text-xl"
                    activeClass='slink' to="whychooseus" spy={true} smooth={true} offset={-150} >
                    Why Choose Us?
                  </Link>
                  <Link className="navitem text-white  hover:cursor-pointer text-xl"
                    activeClass='slink' to="contactus" spy={true} smooth={true} offset={-150} >
                    Contact Us
                  </Link>








                </div>
                <div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};




export default NavBar;