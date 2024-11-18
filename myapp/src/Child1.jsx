import Child2 from "./Child2"

const Child1 = () => {
    let price = 100
  return (
    <Child2 price={price} />
  )
}

export default Child1