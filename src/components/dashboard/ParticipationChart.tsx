// "use client";
// import { Card } from "antd";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const barChartData = [
//   { name: "Jan", users: 1400 },
//   { name: "Feb", users: 800 },
//   { name: "Mar", users: 900 },
//   { name: "Apr", users: 250 },
//   { name: "May", users: 1900 },
// ];

// export default function ParticipationChart() {
//   return (
//     <Card
//       title="User Participation"
//       style={{
//         borderRadius: "12px",
//         boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
//       }}
//       styles={{
//         header: {
//           borderBottom: "none",
//           padding: "24px 24px 0",
//           fontSize: "18px",
//           fontWeight: "bold",
//         },
//         body: { padding: "24px" },
//       }}
//     >
//       <div style={{ height: "300px" }}>
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             data={barChartData}
//             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//           >
//             <CartesianGrid
//               strokeDasharray="3 3"
//               vertical={false}
//               stroke="#e0e0e0"
//             />
//             <XAxis
//               dataKey="name"
//               axisLine={false}
//               tickLine={false}
//               tick={{ fill: "#8c8c8c" }}
//               dy={10}
//             />
//             <YAxis
//               axisLine={false}
//               tickLine={false}
//               tick={{ fill: "#8c8c8c" }}
//               tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : v)}
//             />
//             <Tooltip cursor={{ fill: "transparent" }} />
//             <Bar
//               dataKey="users"
//               fill="#00a2ff"
//               radius={[4, 4, 0, 0]}
//               barSize={30}
//             />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </Card>
//   );
// }

"use client";
import { Card } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ParticipationMonth } from "@/src/services/overviewService";

interface ParticipationChartProps {
  data: ParticipationMonth[];
}

export default function ParticipationChart({ data }: ParticipationChartProps) {
  // Map API data to short month names for the chart axis
  const chartData = data.map((item) => ({
    name: item.month.slice(0, 3),
    users: item.participation,
  }));

  return (
    <Card
      title="User Participation"
      style={{
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
      }}
      styles={{
        header: {
          borderBottom: "none",
          padding: "24px 24px 0",
          fontSize: "18px",
          fontWeight: "bold",
        },
        body: { padding: "24px" },
      }}
    >
      <div style={{ height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e0e0e0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8c8c8c" }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8c8c8c" }}
              tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : v)}
            />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar
              dataKey="users"
              fill="#00a2ff"
              radius={[4, 4, 0, 0]}
              barSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
