import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

import * as palette from '../Variables';
import logo from '../assets/images/logo.png'
import profilePic from '../assets/images/profile.png'
import Home from '../assets/svg/home-solid.svg'
import LogOut from '../assets/svg/power-off-solid.svg'

const Sidebar = () => {
   const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click);

   const [profileClick, setProfileClick] = useState(false);
   const handleProfileClick = () => setProfileClick(!profileClick);

   return (
      <Container>
         <Button clicked={click} onClick={() => handleClick()}></Button>
         <SidebarContainer>
            <Logo>
               <img src={logo} alt="logo" />
            </Logo>
            <SlickBar clicked={click}>
               <Item onClick={() => setClick(false)} activeclassname="active" to="/">
                  <img src={Home} alt="Home" />
                  <Text clicked={click}>Home</Text>
               </Item>
               <Item onClick={() => setClick(false)} activeclassname="active" to="/a">
                  <img src={Home} alt="Other 1" />
                  <Text clicked={click}>OtherDASDA</Text>
               </Item>
               <Item onClick={() => setClick(false)} activeclassname="active" to="/b">
                  <img src={Home} alt="Other 2" />
                  <Text clicked={click}>Other</Text>
               </Item>
               <Item onClick={() => setClick(false)} activeclassname="active" to="/c">
                  <img src={Home} alt="Other 3" />
                  <Text clicked={click}>Other</Text>
               </Item>
            </SlickBar>
            <Profile clicked={profileClick}>
               <img onClick={() => handleProfileClick()} src={profilePic} alt="" />
               <Details clicked={profileClick}>
                  <Name>
                     <h4>Cosmin G.</h4>
                     <a href="#">view profile</a>
                  </Name>
                  <Logout>
                     <img src={LogOut} alt="logout" />
                  </Logout>
               </Details>
            </Profile>
         </SidebarContainer>
      </Container>
   )
}

const Container = styled.div`
   position: fixed;

   .active{
      border-right: 2px solid ${palette.LIGHT_COLOR};

      img{
         filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
      }
   }
`;

const Button = styled.button`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 2.5rem;
   height: 2.5rem;
   background: ${palette.DARK_COLOR};
   border: none;
   border-radius: 50%;
   margin: 0.5rem 0 0 0.5rem;
   cursor: pointer;

   &::before, &::after{
      content: '';
      position: absolute;
      width: 1rem;
      height: 2px;
      background-color: ${palette.LIGHT_COLOR};
      transition: all 0.3s ease;
   }

   &::before{
      top: ${props => props.clicked ? "1.5" : "1rem"};
      transform: ${props => props.clicked ? "rotate(135deg)" : "rotate(0)"};
   }

   &::after{
      top: ${props => props.clicked ? "1.2" : "1.5rem"};
      transform: ${props => props.clicked ? "rotate(-135deg)" : "rotate(0)"};
   }
`;

const SidebarContainer = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   width: 3.5rem;
   height: 80vh;
   background: ${palette.DARK_COLOR};
   border-radius: 0 30px 30px 0;
   margin-top: 1rem;
   padding: 1rem 0;
`;

const Logo = styled.div`
   width: 2rem;

   img {
      width: 100%;
      height: auto;
   }
`;

const SlickBar = styled.ul`
   position: absolute;
   top: 5rem;
   left: 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: ${props => props.clicked ? "12rem" : '3.5rem'};
   color: ${palette.LIGHT_COLOR};
   background: ${palette.DARK_COLOR};
   border-radius: 0 30px 30px 0;
   padding: 2rem 0;
   list-style: none;
   transition: all 0.5s ease;
`;

const Item = styled(NavLink)`
   display: flex;
   width: 100%;
   color: ${palette.LIGHT_COLOR};
   padding: 1rem 0;
   text-decoration: none;
   cursor: pointer;

   &:hover{
      border-right: 2px solid ${palette.LIGHT_COLOR};

      img{
         filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
      }
   }

   img{
      width: 1.2rem;
      height: auto;
      filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg) brightness(78%) contrast(85%);
      padding-left: 1rem;
   }
`;

const Text = styled.span`
   width: ${props => props.clicked ? "100%" : '0%'};
   margin-left: ${props => props.clicked ? "1.5rem" : "0"};
   font-size: ${palette.FONTSIZE_S};
   overflow: hidden;
   transition: all 0.3 ease;
`;

const Profile = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: ${props => props.clicked ? "14rem" : "3rem"};
   height: 3rem;
   color: ${palette.LIGHT_COLOR};
   background: ${palette.DARK_COLOR};
   border-radius: 20px;
   margin-left: ${props => props.clicked ? "9rem" : "0"};
   transition: all 0.3 ease;

   img{
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;

      &:hover{
         border: 2px solid ${palette.LIGHT_COLOR};
         cursor: pointer;
      }
   }
`;

const Details = styled.div`
   display: ${props => props.clicked ? "flex" : "none"};
   justify-content: space-between;
   align-items: center;
`;

const Name = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;      
   padding: 0 1.5rem;
   font-size: 0.8rem;

   a{
      color: ${palette.LIGHT_COLOR};
      text-decoration: none;

      &:hover{
         text-decoration: underline;
      }
   }
`;

const Logout = styled.button`
   width: 2rem;
   height: 2rem;
   background: transparent;
   border: none;

   img{
      width: 100%;
      height: auto;
      filter: invert(15%) sepia(70%) saturate(6673%) hue-rotate(2deg) brightness(100%) contrast(126%);
      transition: all 0.3s ease;

      &:hover{
         border: none;
         padding: 0;
         opacity: 0.5;
         cursor: pointer;
      }
   }
`;

export default Sidebar
