const resizeChartHnadler = (dataLength:number)=>{
    if(dataLength === 1 ){
        return '100%'
    }
    if(dataLength === 2 ){
        return '50%'
    }
    if(dataLength/3 === 1 ){
        return '50%'
    }
    if(dataLength/3 === 2 || 0 ){
        return '30%'

    }
}