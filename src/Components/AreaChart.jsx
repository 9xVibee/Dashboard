import {
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import CustomToolTip from "./CustomToolTip";

const AreaChartComp = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <ResponsiveContainer width={"100%"} maxHeight={317}>
      <AreaChart
        data={data}
        margin={{
          top: 35,
        }}
        height={317}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.1} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis dataKey="name" tickLine={false} tickMargin={10} />
        <YAxis axisLine={false} tickLine={false} tickCount={4} tickMargin={8} />

        <Tooltip
          content={<CustomToolTip />}
          cursor={{
            strokeDasharray: "3 3",
          }}
        />
        <CartesianGrid vertical={false} stroke="#ECE9F1" />

        <Area
          type="monotone"
          dataKey="pv"
          stroke="#ECE9F1"
          fillOpacity={0}
          fill="url(#colorUv)"
          strokeWidth={4}
        />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
          strokeWidth={4}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComp;
