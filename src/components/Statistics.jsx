// import { StatisticsData } from "../data/StatisticsData";
// import { useEffect } from "react";

// const Counter = ({ index, start, target, format, duration, pause }) => {
//   useEffect(() => {
//     const el = document.getElementById(`counter-${index}`);
//     animateCounter(el, start, target, format, duration, pause);
//   }, [index, start, target, format, duration, pause]);

//   const Statistics = () => {
//     return (
//       <div className="statistics">
//         {StatisticsData.map((c, i) => (
//           <div key={i} className="counter-box">
//             <Counter
//               index={i}
//               start={c.start}
//               target={c.target}
//               format={c.format}
//               duration={6000}
//               pause={7000}
//             />
//             <div className="label">{c.label}</div>
//           </div>
//         ))}
//       </div>
//     );
//   };
// };

// export default Statistics;
