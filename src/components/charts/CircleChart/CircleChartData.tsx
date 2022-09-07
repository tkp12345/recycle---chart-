import React from "react";

const RADIAN = Math.PI / 180;

/**************************************************************
 *  CicleChart 데이터 컴포넌트
 *
 *
 * @param cx
 * @param cy
 * @param midAngle
 * @param innerRadius
 * @param outerRadius
 * @param percent
 * @param index
 * @constructor
 **************************************************************/
const CicleChartData = ({
                        cx,
                        cy,
                        midAngle,
                        innerRadius,
                        outerRadius,
                        percent,
                        index
                    }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);


    return (
        <g>
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
            <text
                x={x+12}
                y={y+12}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"

            >
                {/*{`데이터`}*/}
            </text>
        </g>
    );
};
export default CicleChartData;
