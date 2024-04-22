import styled from "styled-components";
import BrushIconDataURL from "@/icons/BrushIcon";
import Link from "next/link";
import { useState } from 'react';

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

const StyledImageHolder = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/splash.png');
    opacity: ${props => props.hovered ? 1 : 0};
    background-size: cover;
    background-position: center;
    z-index: -1; /* Ensure the background image is behind other content */
  }

`;

const StyledLink = styled.div`
  display: block; /* Display link text as block element */
  padding: 2rem; /* Equivalent to p-4 in Tailwind */
  text-decoration: none; /* Override any default text-decoration */
  color: #000; /* Equivalent to text-gray-100 in Tailwind */
  text-shadow: 2px 6px 20px #E1E1E1; /* Equivalent to shadow-gray-300 in Tailwind */
  background-color: transparent; /* If there's a background color set, adjust accordingly */
  transition: color 0.2s ease-in, transform 0.2s ease-in, text-shadow 0.2s ease-in; /* Transition properties */
  
  &:hover {
    color: #fec3df; 
    scale:110%; 
    text-shadow: 2px 6px 20px #0000;
  }
  
`;

export default function NavBar() {
  const [isHomeLinkHovered, setHomeLinkHovered] = useState(false);
  const [isProjectsLinkHovered, setProjectsLinkHovered] = useState(false);
  const [isGalleryLinkHovered, setGalleryLinkHovered] = useState(false);
  const [isSomsomLinkHovered, setSomsomLinkHovered] = useState(false);

  const handleHomeLinkHover = () => {
    setHomeLinkHovered(true);
    setProjectsLinkHovered(false); 
    setGalleryLinkHovered(false)
    setSomsomLinkHovered(false)
  };

  const handleProjectsLinkHover = () => {
    setProjectsLinkHovered(true);
    setHomeLinkHovered(false); 
    setGalleryLinkHovered(false)
    setSomsomLinkHovered(false)
  };

  const handleGalleryLinkHover = () => {
    setGalleryLinkHovered(true);
    setHomeLinkHovered(false); 
    setProjectsLinkHovered(false)
    setSomsomLinkHovered(false)
  };

  const handleSomsomLinkHover = () => {
    setSomsomLinkHovered(true);
    setGalleryLinkHovered(false);
    setHomeLinkHovered(false); 
    setProjectsLinkHovered(false)
  };

  return (
    <NavDiv>
      <StyledImageHolder hovered={isHomeLinkHovered}>
        <StyledLink 
          onMouseEnter={handleHomeLinkHover} 
          onMouseLeave={() => setHomeLinkHovered(false)}
        >
          <Link style={{ cursor: `url('${BrushIconDataURL}'), auto` }}  href={'/'}>Home</Link>
        </StyledLink>
      </StyledImageHolder>

      <StyledImageHolder hovered={isProjectsLinkHovered}>
        <StyledLink
          onMouseEnter={handleProjectsLinkHover} 
          onMouseLeave={() => setProjectsLinkHovered(false)}
        >
          <Link style={{ cursor: `url('${BrushIconDataURL}'), auto` }}  href={'/projects'}>Projects</Link>
        </StyledLink>
      </StyledImageHolder>

      <StyledImageHolder hovered={isGalleryLinkHovered}>
        <StyledLink
          onMouseEnter={handleGalleryLinkHover} 
          onMouseLeave={() => setGalleryLinkHovered(false)}
        >
          <Link style={{ cursor: `url('${BrushIconDataURL}'), auto` }}  href={'/projects'}>Gallery</Link>
        </StyledLink>
      </StyledImageHolder>

      <StyledImageHolder hovered={isSomsomLinkHovered}>
        <StyledLink
          onMouseEnter={handleSomsomLinkHover} 
          onMouseLeave={() => setSomsomLinkHovered(false)}
        >
          <Link style={{ cursor: `url('${BrushIconDataURL}'), auto` }}  href={'/projects'}>Somsom</Link>
        </StyledLink>
      </StyledImageHolder>
    </NavDiv>
  );
}