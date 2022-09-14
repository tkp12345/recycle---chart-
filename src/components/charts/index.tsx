import React, {useState} from 'react';
import CicleChart from "./CircleChart";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import {Container, Contents, Footer, Footer_Li, Header} from './Charts.styled';
import {ChartType} from "./utills/utills";
interface PropType {
    mode: string;
    footer: boolean;
    tabMenu?: any;
    setTabMenu?:React.Dispatch<React.SetStateAction<(string)[]>>;
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
const Charts = ({mode,footer=false,tabMenu,setTabMenu=()=>{}}:PropType) => {
    const [title,setTitle] =useState<string|null>(CONST_MENU[0]?CONST_MENU[0].name:null);

    const renderfooterDataFilter = (): JSX.Element[]=>{
        const footerText = CONST_MENU.map((v:any)=>{
            return (
                <Footer_Li onClick={()=>setTitle(v.name)} key={v.id} >
                    {v.name}
                </Footer_Li>
            )
        })
        return footerText;
    };



    return (
        <div>
        <Container>

            <Header>
                {`${title} 사용 현황`}
                <button onClick={()=>setTabMenu([...tabMenu,title])}>최소화</button>
            </Header>

            <Contents>
                {mode === ChartType.CIRCLE &&
                <CicleChart/>
                }
                {mode === ChartType.LINE &&
                <LineChart/>
                }
                {mode === ChartType.BAR &&
                <BarChart/>
                }
            </Contents>

            <Footer>
             {footer && renderfooterDataFilter()}
            </Footer>

        </Container>
        </div>
    );
};

export default Charts;