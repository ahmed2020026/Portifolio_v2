import logo from './image/logo.png'
import { NavElements } from './data'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
export const Header = () => {
    const [order , setOrder] =useState(true);
    const OpenMenu = (e) =>{ 
        setOrder(e);
    };

    return (
        <>
            <div className="container flex items-center justify-between">
                <div className="logo">
                    <img src={logo} />
                </div>
                {/* menu in DiskTop */}
                <nav className={'flex-1 hidden md:flex relative px-3'}>
                    {NavElements.map((a , i) => (
                        <Link to={a.url} key={i} className='px-3 py-2 text-white hover:text-green-500  rounded-2xl'>{a.text}</Link>
                    ))}
                </nav>
                {/* menu in Mobile */}
                <nav className={order ? 'px-3 absolute top-full left-0 shadow hidden md:hidden w-full bg-[#212222]' : 'px-3 py-3 left-0 absolute top-[100%] md:hidden shadow block w-full z-0 bg-[#212222]'}>
                    {NavElements.map((a , i) => (
                        <Link to={a.url} key={i} className='px-3 block py-2 text-white hover:text-green-500 rounded'>{a.text}</Link>
                    ))}
                </nav>
                <div className='text-white cursor-pointer p-2 rounded block md:hidden' onClick={() => OpenMenu(!order)}>
                    <MenuIcon />
                </div>
            </div>
        </>
    )
}
