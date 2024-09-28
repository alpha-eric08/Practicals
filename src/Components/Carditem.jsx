import { BadgeDelta, Card, Flex } from '@tremor/react'

const Carditem = () => {
  return (
    <Card
      className="w-xs"
      decoration="top"
      decorationColor="indigo"
    >
        <Flex justifyContent='between' alignItems='center'>
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Sales</p>
            <BadgeDelta>+12.5%</BadgeDelta>
        </Flex>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
    </Card>

  )
}

export default Carditem