import Image from 'next/image'
import profilePic from "../public/images/Image.png"
import { LuSettings2 } from "react-icons/lu";
import { AiFillSetting,AiFillBell,AiFillHeart } from "react-icons/ai";

const Header = () => {
    return (
        <header className="px-5 pt-5">
            <nav className="flex justify-between items-center">
                <div className="flex items-center gap-5  w-1/2 xl:w-2/5">
                    <h2 className="text-blue-600 font-bold text-2xl">MORENT</h2>
                    <div className="hidden sm:block relative  w-full ">
                        <input className=" text-slate-700 outline-none focus:shadow-sm xl:focus:shadow-md w-full border border-gray-100 rounded-lg px-2 py-1  text-sm font-medium" placeholder="search something"/>
                        <LuSettings2 size={18} className='absolute right-2 top-2'/>
                    </div>
                </div> 
                <div className="flex gap-3 ">
                    <div className="hidden  items-center justify-between sm:flex rounded-full hover:shadow-sm px-1 border border-gray-100"><AiFillHeart color='#596780'/></div>
                    <div className="hidden items-center justify-between sm:flex rounded-full hover:shadow-sm px-1 border border-gray-100"><AiFillBell color='#596780'/></div>
                    <div className="hidden items-center justify-between sm:flex rounded-full hover:shadow-sm px-1 border border-gray-100"><AiFillSetting color='#596780'/></div>
                    <Image  src={profilePic} alt="Logo"/>
                </div>
            </nav>
            <div className="sm:hidden pt-5 flex justify-between items-center w-full">
                <input className="text-slate-700 outline-none focus:shadow-sm w-3/4 border border-gray-100 rounded-md px-2 py-1  text-sm font-medium" placeholder="search something here"/>
                <button className="border border-gray-100 rounded-md p-2"><LuSettings2/></button>
            </div>
        </header>
    );
}
 
export default Header;