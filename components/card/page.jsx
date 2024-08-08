
const Card = () => {
  return (
    <div className="w-[300px] h-[350px] bg-[#fff] rounded-[30px] ">
      <img src="/mainfood.png" className="w-[250px] h mt-[-50px] m-auto" alt="" />
      <div className="p-5">
        <h1 className="text-xl font-semibold">Food Name</h1>
        <p className="">Food Description</p>
        <p className="">Food Price</p>
        <img src="/stars.svg" alt="" />
        <button className="bg-[#F6F6F6] w-full h-[50px] rounded-[10px]">Add to cart</button>
      </div>
    </div>
  )
}

export default Card