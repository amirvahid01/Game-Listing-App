import React, { useContext } from 'react'
import logo from './../assets/Images/logo.png'
import { HiMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from '../Context/ThemeContext';

function Header() {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div className='flex items-center p-3'>
            <img src={logo} width={70} height={70} />
            <div className='flex items-center bg-slate-200 w-full p-2 mx-2 rounded-full'>
                <HiMagnifyingGlass />
                <input type="text" placeholder='Search Games'
                    className='bg-transparent outline-none w-full p-1'
                />
            </div>
            <div className='text-[30px] bg-slate-200 rounded-full text-black p-2 m-2 cursor-pointer'>
                {theme == 'light' ?
                    <HiMoon onClick={() => setTheme('dark')} />
                    : <HiSun onClick={() => setTheme('light')} />
                }
            </div>
        </div>
    )
}

export default Header