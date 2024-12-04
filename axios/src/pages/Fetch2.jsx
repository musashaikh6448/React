
const Fetch2 = () => {
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
  return (
    <div>Fetch2</div>
  )
}

export default Fetch2