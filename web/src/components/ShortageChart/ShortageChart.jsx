import { BarChart } from '@mui/x-charts/BarChart'

const ShortageChart = ({ dataset }) => {
  const chartSetting = {
    xAxis: [
      {
        label: 'type quantity',
      },
    ],
    width: 500,
    height: 300,
    margin: { left: 100 },
  }

  return (
    <BarChart
      dataset={dataset.sort((a, b) => b.required - a.required)}
      yAxis={[{ scaleType: 'band', dataKey: 'char' }]}
      series={[
        {
          dataKey: 'required',
          label: 'Required Qty.',
          stack: 'A',
          color: 'lightblue',
        },
        {
          dataKey: 'available',
          label: 'Available Qty.',
          stack: 'A',
          color: 'lightgreen',
        },
      ]}
      {...chartSetting}
      layout="horizontal"
    />
  )
}

export default ShortageChart
