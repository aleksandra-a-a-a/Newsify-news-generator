import React from 'react'
import { useState } from 'react'
import { IconContext } from 'react-icons/lib'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const DropdownLink = styled(Link)`
background: #52796F;
height: 60px;
padding-left: 2.5rem;
display: flex;
align-items: center;
text-decoration: none;
color: whitesmoke;
font-size: 15px;

&:hover {
  background: #ABC4B0;
  cursor: pointer;  
}
`
const SidebarLink = styled(Link)`
display: flex;
color: whitesmoke;
justify-content: space-between;
align-items: center;
padding: 20px;
list-style: none;
height: 60px;
text-decoration: none;
font-size: 18px;

&:hover {
    background: #ABC4B0;
    border-left: 4px solid #F4F6F3;
    cursor: pointer;
}
`
const SidebarLabel = styled.span`
margin-left: 16px;
`


const SubMenu = ({country}) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return(
        <>
        <IconContext.Provider value={{ color: '#f5f5f5'}}>
        <SidebarLink to={country.path} onClick={country.subNav && showSubnav}>

            <div>
                <SidebarLabel>{country.title}</SidebarLabel>
            </div>
            <div>
                {country.subNav && subnav 
                ? country.iconOpened 
                : country.subNav 
                ? country.iconClosed 
                : null}
            </div>

        </SidebarLink>
        {subnav && country.subNav.map((country, index) => {
            return (
                <DropdownLink to={country.path} key={index}>
                <img src={country.icon}/>
                <SidebarLabel>{country.title}</SidebarLabel>
                </DropdownLink>
            )
        })}
</IconContext.Provider>
        </>
    )
}
export default SubMenu