// import React from 'react';
// import Proptypes from "prop-types";
// import { scaleTime } from 'd3-scale';
// import { Chat } from '@material-ui/icons';
// import Madedata from "./Data";
// import {ChartCanvas,Chart} from 'react-stockcharts';
// import {candlestickSeries} from "react-stockcharts/lib/series";
// import {XAsis, YAsis} from "react-stockcharts/lib/axes";
// import {utcDay} from "d3-time-format";
// import {fitwidth} from "react-stockcharts/lib/heiper";
// import {timeIntervalBarwidth} from "react-stockcharts/lib/utils";
// import CandlestickSeries from 'react-stockcharts/lib/series/CandlestickSeries';
// let chartJS = (porps) =>{
//     const {type,width,ratio} = porps;
//     const data = Madedata;
//     const xAccessor = (d) => {
//         return d.date;
//     };
// //import './App.css';
// //import {realtime} from '.realtime';
//   return(
//   <div className="chartJS">
//       <ChartCanvas
//         height={400}
//         ratio={ratio}
//         width={width}
//         margin={{left :50,right :50 ,top :10,bottom :30}}
//         type ={type}
//         data={data}
//         seriesName="MSFT"
//         xAccessor={xAccessor}
//         xScale ={scaleTime()}
//         xExtents={[new Date(2020,0,30),new Date(2020,1,16)]}
//         >
//         <Chart
//             id={1}
//             yExtenrs={(d)=>[d.height,d.low]}
//         >
//             <XAsis axisAt="bottom" orient ="bottom"tick={6}/>
//             <YAsis axisAt="left" orient="left" ticks={5}/>
//             <CandlestickSeries/>
//         </Chart>
//         </ChartCanvas>
//       </div>
//   );
// };
// chartJS.prototype={
//     Data: Proptypes.array.isRequired,
//     width: Proptypes.number.isRequired,
//     ratio: Proptypes.number.isRequired,
//     type:   Proptypes.oneOf(["svg","hybrid"]).isRequired,
// }
// chartJS.defaultProps ={
//     type:"svg",
// };
// chartJS = fitwidth(chartJS);
// export default chartJS;