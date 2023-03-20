import { Chart } from 'react-google-charts';


export function LineChartComponent({title, legend, data}) {
  
 

  const options = {
    curveType: 'function',
    legend: { position: 'right'},
    pointSize: 5,
    colors:['#f59e0b', 'red'],
    
  };

  return (
    <div className="w-full max-w-5xl p-5 ">
      <h2 className='mb-3 text-xl flex justify-center'>{title}</h2>
      <Chart
        chartType="AreaChart"
        data={data}
        options={options}
        width="100%"
        height="300px"
        className="rounded-lg shadow-lg  "
        chartWrapperClassName="mx-auto"
        chartArea={{ width: '50%', height: '70%' }}
      />
    </div>
  );
}