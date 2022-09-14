import React from 'react';
import {Nav_menu, Nav_Wrraper } from './Nav.styped';
import {Footer_Li} from "../Charts.styled";

interface propType{
    tabMenu? :any;
}
const Nav = ({tabMenu}:propType) => {

 console.log('tabMenu:',tabMenu)
    return (
        <Nav_Wrraper>
            {tabMenu.map((menu:string, index:number)=>{
                return(
                  <Nav_menu key={index}>
                      {menu}
                </Nav_menu>
                )})}
        </Nav_Wrraper>
    );
};

export default Nav;