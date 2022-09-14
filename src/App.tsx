import React, {useState} from 'react';
import Charts from "./components/charts";
import Nav from './components/charts/Nav';
import {ChartType} from "./components/charts/utills/utills";

function App(){
    const [BTabMenu,setBTabMenu] = useState<Array<string>>([]);
    console.log(':::BTabMenu::',BTabMenu)
    return(
        <div style={{display: 'flex'}}>
        <Charts mode={ChartType.CIRCLE} footer={true} tabMenu={BTabMenu}  setTabMenu={setBTabMenu}/>
        <Charts mode={ChartType.LINE} footer={true} tabMenu={BTabMenu}  setTabMenu={setBTabMenu}/>
        <Charts mode={ChartType.BAR} footer={true} tabMenu={BTabMenu}  setTabMenu={setBTabMenu}/>
            <Nav tabMenu={BTabMenu}/>
        </div>
    )
}

export default App;