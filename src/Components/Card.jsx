function Card({id, img, price, detail, onClick}){
    
    return(
        <>
            <div className=" flex bg-blue-200 h-auto w-2/6 justify-center items-center rounded-2xl">
                <div className="flex-col flex justify-center items-center p-4 gap-2">
                    <div className="flex justify-center items-center p-4 w-4/5">
                        <img src={img} alt="" />
                    </div>
                    <div className=" text-center text-xl text-stone-800">
                        <p>{detail}</p>
                        <p>Preço: R${price}</p>
                    </div>
                    <button onClick={onClick} className=" bg-blue-600 w-24 h-10 rounded-lg text-white">
                        Detalhes
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card;
