import React from 'react';
import {Nav_menu, Nav_Wrraper } from './Nav.styped';
import {Footer_Li} from "../Charts.styled";

interface propType{
    tabMenu? :any;
    chartData?:any;
    setChartData?:any;
}

const Nav = ({tabMenu,chartData,setChartData=()=>{}}:propType) => {
    const onClickNavItem = (data:any)=>{
        let newState = [...chartData];
        const findIndex = chartData.findIndex((chart:any)=>chart.id === data.id);
        newState[findIndex].isShow=true;
        setChartData(newState)
    }

    return (
        <Nav_Wrraper>
            {tabMenu.map((menu:any, index:number)=>{
                return(
                    <>
                    {!menu.isShow &&
                  <Nav_menu onClick={()=>onClickNavItem(menu)} key={index}>
                      {menu.name}
                </Nav_menu>
             }
             </>
            )})}

        </Nav_Wrraper>
    );
};

export default Nav;