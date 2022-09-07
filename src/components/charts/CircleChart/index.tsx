import React from "react";
import {Cell, Pie, PieChart} from "recharts";
import CircleChartData from "./CircleChartData";

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CicleChart = ({}: any) => {

    return (
        <PieChart  width={400} height={400}>
            <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                label={CircleChartData}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />

                    ))}
            </Pie>
        </PieChart>
    );
};
export default CicleChart;
