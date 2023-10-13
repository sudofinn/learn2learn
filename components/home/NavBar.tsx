import React, {useState} from "react"
import {FaBars, FaTimes} from "react-icons/fa"

import {Link} from "react-scroll"

//import {Link} from "react-scroll" 
//( gives duplicate , might have to replace all next/link with react scroll link) ( programming with yash 1:49 h)




import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';





/* make animation from yash patel tailwind tutorial */


const NavBar : React.FC = () => {
     



   const [nav, setNav] = useState(false)

    const links = [ 
        {
            id:1,
            link: "Why",
            to: "Why",
            style: "hover:text-black hover:bg-red-600   text-white border  border-red-600 border-4 p-2   ",
        },

        {
            id:2,
            link: "Author",
            to:"Author",
            style:"hover:text-black hover:bg-red-600   text-white border  border-red-600 border-4 p-2  "
        },

        {
            id:3,
            link: "How",
            to: "How",
            style:"hover:text-black hover:bg-red-600   text-white border  border-red-600 border-4 p-2  "
        },

        {
            id:4,
            link: "Sign me up !",
            to: "SignUp",
            style:"hover:text-black hover:bg-white hover:text-black bg-red-600 text-white border  border-red-600 border-4 p-2    "
        },

        

    ]

    return (
        <div className="flex justify-between items-center 
             px-4 w-full h-20 bg-black text-white relative ">
            <div>
                <Link to="Learning" smooth duration={2000}>
                <h1 className="text-4xl font-signature hidden md:block text-black font-extrabold bg-gradient-to-r from-white to-red-600
                hover:shadow-xl shadow-white hover:text-black hover:bg-gradient-to-r hover:from-red-600 hover:to-white duration-500 ml-32">Learn2Learn</h1>
                </Link>
            </div>

            {/* desktop */}

            <ul className="hidden lg:flex">
                
             {links.map(({ id, link, to , style }) => (
           <Link to={`${to}`} smooth duration={2000}
            key={id}
            
            className={`px-4  cursor-pointer  transition duration-200  hover:border-b-4 
             text-white hover:scale-105 mr-8 
             font-bold  ${style}`}
            >

                
              {link}

              
            
            
          </Link> 
            ))}

            </ul>

            {/* logic */}
            <div onClick={() => setNav(!nav)} 
            className="cursor-pointer pr-4 z-10
             text-white lg:hidden">
                {nav ? <FaTimes size={30} color="white" /> :<FaBars size={30} /> }
            </div>


            {/* mobile */}
            {nav && (
                <ul className="flex flex-col justify-center 
                                items-center 
                                absolute   top-0 left-0 w-full h-screen   bg-black ">

                    {links.map(({ id, link, to, style}) => (
                    <Link  to={`${to}`} smooth duration={2000}
                        key={id} onClick={() => setNav(!nav)} 
                        
                        
                        className={`px-4  cursor-pointer   text-white py-4
                                my-6 text-2xl font-extrabold transition duration-500 hover:scale-110  
                                items-center  mr-3    rounded-xl ${style}`} >
                        {link}
                        
                        
                    </Link> 
                        ))}
                    

                </ul> 
            ) }



        </div>
    )

}

export default NavBar