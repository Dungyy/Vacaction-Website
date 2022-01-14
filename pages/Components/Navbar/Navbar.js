import Link from 'next/link'
import { Nav, StyledLink, TitleLink } from '../Navbar/NavbarStyles'

export default function Navbar()  { 
return(
  <Nav>
    <div>
      <Link href="./">
        <TitleLink>Vacation Location </TitleLink>
      </Link>
    </div>
    <div>
      <Link href="./about">
        <StyledLink>About</StyledLink>
      </Link>
      <Link href="./contact">
        <StyledLink>Contact</StyledLink>
      </Link>
    </div>
  </Nav>
)}
