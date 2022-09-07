import React, {useState} from 'react';
import CicleChart from "./CircleChart";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import { Container } from './Charts.styled';
import {ChartType} from "./utills/utills";

interface PropType{
    mode : string;
    footer: boolean;
}

type MENU_OBJECT ={
    id:number,
    name:string,
}
const CONST_MENU :Array<MENU_OBJECT>=[
    {id:0,name:'사용자별'},
    {id:1,name:'자원별'},
    {id:2,name:'명령어별'},
    {id:3,name:'사유별'},
    {id:4,name:'요일별'},
]

/*******************************************************************
 * 차트 사용을위한 공용 컴포넌트
 *
 * @param mode
 * @constructor
 ********************************************************************/
const Charts = ({mode,footer=false}:PropType) => {
    const [title,setTitle] =useState<string|null>(CONST_MENU[0]?CONST_MENU[0].name:null);

    const renderfooterDataFilter = (): JSX.Element[]=>{
        const footerText = CONST_MENU.map((v:any)=>{
            return (
                <li onClick={()=>setTitle(v.name)} key={v.id} >
                    {v.name}
                </li>
            )
        })
        return footerText;
    };

    return (
        <Container>
            {/*header*/}
            {`${title} 사용 현황`}
            {/*contents*/}
            {mode === ChartType.CIRCLE &&
            <CicleChart/>
            }
            {mode === ChartType.LINE &&
            <LineChart/>
            }
            {mode === ChartType.BAR &&
            <BarChart/>
            }
            {/*footer*/}
            {footer && renderfooterDataFilter()}

        </Container>
    );
};

export default Charts;