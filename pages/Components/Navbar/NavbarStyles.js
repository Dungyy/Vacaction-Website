import styled from 'styled-components';


export const Nav = styled.nav`
  height: 80px;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledLink = styled.a`
  padding 0rem 2rem;
  margin-right: 5rem;
  transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`

export const TitleLink = styled.a`
font-size: 25px;
margin-left: 2rem;
transition: 0.3s ease;
color: white;
border-radius: 50px;
padding: 8px;
cursor: pointer;

`