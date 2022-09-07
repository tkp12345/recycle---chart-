import React from 'react';
import Charts from "./components/charts";
import {ChartType} from "./components/charts/utills/utills";

function App(){
    return(
        <div>
        <Charts mode={ChartType.CIRCLE} footer={true}/>
        </div>
    )
}

export default App;