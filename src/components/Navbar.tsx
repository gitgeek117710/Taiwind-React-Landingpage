import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavBar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center relative">
                    {/* Left: Logo */}
                    <div className="flex items-center flex-shrink-0 z-10">
                        <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
                        <span className="text-xl tracking-tight">VirtualR</span>
                    </div>

                    {/* Center: Nav Items */}
                    <ul className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-12 z-0">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Right: Auth Buttons */}
                    <div className="hidden lg:flex space-x-4 items-center z-10">
                        <a className="py-2 px-3 border rounded-md" href="#">
                            Sign In
                        </a>
                        <a
                            className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white"
                            href="#"
                        >
                            Create an account
                        </a>
                    </div>
                    <div className='lg:hidden md:flex flex-col justify-end'>
                        <button onClick={toggleNavBar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4'>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className='flex space-x-6'>
                            <a href="#" className='py-2 px-3 border rounded-md'>
                                Sign In
                            </a>
                            <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                                Create an account
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
