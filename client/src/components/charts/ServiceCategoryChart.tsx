// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";

// interface Props {
//   services: any[];
// }

// const ServiceCategoryChart = ({ services }: Props) => {
//   // ✅ Dynamic data (NO hardcoding)
//   const chartData = Object.values(
//     services.reduce((acc: any, service) => {
//       const key = service.category?.toLowerCase().trim() || "other";

//       if (!acc[key]) {
//         acc[key] = { name: key, value: 0 };
//       }

//       acc[key].value += 1;

//       return acc;
//     }, {})
//   ).sort((a: any, b: any) => b.value - a.value);

//   return (
//     <div className="rounded-3xl p-6 bg-white border border-gray-200 shadow-lg">
//       <h2 className="text-xl font-bold text-[#0f2218] mb-4">
//         Services by Category
//       </h2>

//       <div className="w-full h-[300px]">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={chartData}>
//             <CartesianGrid strokeDasharray="3 3" />

//             <XAxis
//               dataKey="name"
//               stroke="#0f2218"
//               tickFormatter={(value) =>
//                 value.charAt(0).toUpperCase() + value.slice(1)
//               }
//             />

//             <YAxis stroke="#0f2218" />

//             <Tooltip
//               contentStyle={{
//                 backgroundColor: "#0f2218",
//                 border: "none",
//                 color: "#fff",
//               }}
//             />

//             <Bar
//               dataKey="value"
//               fill="#0f2218"
//               radius={[10, 10, 0, 0]}
//             />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default ServiceCategoryChart;
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    PieChart,
    Pie,
    Cell,
} from "recharts";

interface Props {
    services: any[];
}

const COLORS = ["#0f2218", "#2e5b46", "#4f7c64", "#7aa892", "#a8cfc0"];

const ServiceCategoryChart = ({ services }: Props) => {
    // ✅ Dynamic data
    const chartData = Object.values(
        services.reduce((acc: any, service) => {
            const key = service.category?.toLowerCase().trim() || "other";

            if (!acc[key]) {
                acc[key] = { name: key, value: 0 };
            }

            acc[key].value += 1;

            return acc;
        }, {})
    ).sort((a: any, b: any) => b.value - a.value);

    return (
        <div className="grid md:grid-cols-2 gap-6">

            {/* 🔵 BAR CHART */}
            <div className="rounded-3xl p-6 bg-white border border-gray-200 shadow-lg">
                <h2 className="text-xl font-bold text-[#0f2218] mb-4">
                    Services by Category
                </h2>

                <div className="w-full h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis
                                dataKey="name"
                                stroke="#0f2218"
                                tickFormatter={(value) =>
                                    value.charAt(0).toUpperCase() + value.slice(1)
                                }
                            />

                            <YAxis stroke="#0f2218" />

                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#0f2218",
                                    border: "none",
                                    color: "#fff",
                                }}
                            />

                            <Bar
                                dataKey="value"
                                fill="#0f2218"
                                radius={[10, 10, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* 🟢 ROUND (DONUT) CHART */}
            <div className="rounded-3xl p-6 bg-white border border-gray-200 shadow-lg">
                <h2 className="text-xl font-bold text-[#0f2218] mb-4">
                    Category Distribution
                </h2>

                <div className="w-full h-[300px] flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={chartData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={110}
                                paddingAngle={3}
                            >
                                {chartData.map((_, index) => (
                                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>

                            <text
                                x="50%"
                                y="50%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                className="text-lg font-bold fill-[#0f2218]"
                            >
                                {services.length}
                            </text>

                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
};

export default ServiceCategoryChart;