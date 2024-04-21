import Link from "next/link";
import styled from "styled-components";
import BrushIconDataURL from "@/icons/BrushIcon";

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
const StyledLink = styled.div`
  padding: 2rem; /* Equivalent to p-4 in Tailwind */
  text-decoration: none; /* Override any default text-decoration */
  color: #ffffff; /* Equivalent to text-gray-100 in Tailwind */
  text-shadow: 2px 6px 20px #E1E1E1; /* Equivalent to shadow-gray-300 in Tailwind */
  background-color: transparent; /* If there's a background color set, adjust accordingly */
  cursor: none; /* Equivalent to cursor-none in Tailwind */
  transition: color 0.2s ease-in, transform 0.2s ease-in, text-decoration 0.2s ease-in; /* Transition properties */
  
  &:hover {
    color: #fec3df; 
    scale:110%; 
    text-shadow: 2px 6px 20px #0000;
    text-decoration: underline wavy; 
  }
`;
export default function NavBar() {
    return (
      <NavDiv>
        <StyledLink>
          <Link style={{ cursor: `url('${BrushIconDataURL}'), auto` }} href={'/'}>Home</Link>
        </StyledLink>
        <StyledLink>
          <Link style={{ cursor: `url('${BrushIconDataURL}'), auto` }}  href={'/projects'}>Projects</Link>
        </StyledLink>
        <StyledLink>
          <Link style={{ cursor: `url('${BrushIconDataURL}'), auto` }}  href={'/contact'}>Contact</Link>
        </StyledLink>
        <StyledLink>
          <Link style={{ cursor: `url('${BrushIconDataURL}'), auto` }}  href={'/Gallery'}>Gallery</Link>
        </StyledLink>        
      </NavDiv>
    );
    
  }
  
  