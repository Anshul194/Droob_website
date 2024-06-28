import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Import icons from react-icons
import { Link } from 'react-router-dom';const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo text-xl font-bold">
          <img src='./logo.png' className='w-1/2 p-8'></img>
        </div>

        <button
          className="block sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>

        <nav className={`flex ${isOpen ? 'block' : 'hidden'} sm:flex`}>
          <ul className="flex flex-col sm:flex-row mr-80">
            <li className="my-2 sm:my-0 sm:ml-4 "><Link to='/home' >Home</Link></li>
            <li className="my-2 sm:my-0 sm:ml-4">
            <Link to='/service' >Service</Link>
              </li>
            <li className="my-2 sm:my-0 sm:ml-4">
              <Link to='/gallery' >Gallery</Link>
            </li>
            <li className="my-2 sm:my-0 sm:ml-4">
            <Link to='/contact' >Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
