import { BarList } from "@tremor/react"

const data = [
    { name: "/home", value: 843 },
    { name: "/imprint", value: 560 },
    { name: "/cancellation", value: 46 },
    { name: "/blocks", value: 158 },
    { name: "/documentation", value: 384 },
    { name: "/documentation", value: 300 },
    { name: "/documentation", value: 260 },
    { name: "/documentation", value: 200 },
  ]
  

const WebAnalytics = () => {
  return (
    <div className="bg-white mt-4 rounded-md p-2">
        <h1 className="font-semibold text-center py-4">Web Analytics</h1>
        <BarList data={data} />
    </div>
  )
}

export default WebAnalytics