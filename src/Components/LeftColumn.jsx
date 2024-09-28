import { AreaChartUsageExample } from './AreaChart'
import Carditem from './Carditem'
import { TableUsage } from './Table'

const LeftColumn = () => {
  return (
    <div className='w-full flex flex-col justify-between p-2'>
        <div className='flex flex-col lg:flex-row gap-2 w-full '>
            <Carditem />
            <Carditem />
            <Carditem />
        </div>
        <div className='w-full flex-auto mt-4 bg-white'>
            <AreaChartUsageExample />
        </div>
        <div className='w-full flex-auto mt-4'>
            <TableUsage />
        </div>
        
    </div>
  )
}

export default LeftColumn