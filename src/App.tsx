import React, {useState} from 'react';
import Charts from "./components/charts";
import Nav from './components/charts/Nav';
import {ChartType} from "./components/charts/utills/utills";


type MENU_OBJECT ={
    id:number,
    name:string,
    isShow:boolean,
}
function App(){
    const CHART_DATA :Array<MENU_OBJECT>=[
        {id:0,name:'사용자별',isShow:true},
        {id:1,name:'자원별',isShow:true},
        {id:2,name:'명령어별',isShow:true},
        {id:3,name:'사유별',isShow:true},
        {id:4,name:'요일별',isShow:true},
    ]

    const [chartData,setChartData]=useState<Array<MENU_OBJECT>>(CHART_DATA);

    const [BTabMenu,setBTabMenu] = useState<Array<string>>([]);
    console.log(':::BTabMenu::',BTabMenu)
    console.log(':::chartData::',chartData)
    return(
        <div>
        <div style={{    display: 'flex',
            flexFlow: 'wrap',
            alignItems: 'center',
            justifyContent: 'center'}}>
            {chartData.map((chart)=>{
                return(
                    chart.isShow &&
                    <Charts mode={ChartType.CIRCLE} id={chart.id} footer={true}  chartData={chartData} setChartData={setChartData}/>
                )
            }
            )}
        </div>
            <Nav tabMenu={chartData} chartData={chartData} setChartData={setChartData}/>
        </div>
    )
}

export default App;