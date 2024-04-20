import Link from "next/link";
import styled from "styled-components";

const NavDiv = styled.div`
  display:flex;
  justify-content:space-between;
  padding:20px;
  margin:20px 40px 20px 40px;
  font-size:40px;
  
  border-radius:10px;
`
export default function NavBar() {
    return (
      <NavDiv>
        <Link className="[text-shadow:_0_4px_0_var(--tw-shadow-color)]  shadow-teal-600 px-4 rounded-lg" href={'/'}>Home</Link>
        <Link className="[text-shadow:_0_4px_0_var(--tw-shadow-color)]  shadow-teal-600 px-4 rounded-lg" href={'/projects'}>Projects</Link>
        <Link className="[text-shadow:_0_4px_0_var(--tw-shadow-color)]  shadow-teal-600 px-4 rounded-lg" href={'/contact'}>Contact</Link>
        <Link className="[text-shadow:_0_4px_0_var(--tw-shadow-color)]  shadow-teal-600 px-4 rounded-lg" href={'/Gallery'}>MISC</Link>
      </NavDiv>
    );
    
  }
  
  