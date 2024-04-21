import Link from "next/link";
import styled from "styled-components";
import Painter from "./Painter";

const NavDiv = styled.div`
  display:flex;
  justify-content:space-between;
  padding:20px;
  margin:20px 40px 20px 40px;
  font-size:40px;
  background:transparent;
  z-index:2;
  border-radius:10px;
`
export default function NavBar() {
    return (
      <NavDiv>
        <Link className="[text-shadow:_2px_6px_20px_var(--tw-shadow-color)] text-gray-100 shadow-gray-300 px-4 rounded-lg cursor-none hover:text-black hover:scale-110 transition ease-in duration-200" href={'/'}>Home</Link>
        <Link className="[text-shadow:_2px_6px_20px_var(--tw-shadow-color)] text-gray-100 shadow-gray-300 px-4 rounded-lg cursor-none hover:text-white transition ease-in duration-200" href={'/projects'}>Projects</Link>
        <Link className="[text-shadow:_2px_6px_20px_var(--tw-shadow-color)] text-gray-100 shadow-gray-300 px-4 rounded-lg cursor-none hover:text-white transition ease-in duration-200" href={'/contact'}>Contact</Link>
        <Link className="[text-shadow:_2px_6px_20px_var(--tw-shadow-color)] text-gray-100 shadow-gray-300 px-4 rounded-lg cursor-none hover:text-white transition ease-in duration-200" href={'/Gallery'}>MISC</Link>
      </NavDiv>
    );
    
  }
  
  