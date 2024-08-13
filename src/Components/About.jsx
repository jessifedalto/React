import Navbar from "./Navbar";

function About(){
    return(
        <>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-grow container mx-auto p-4 justify-center items-center flex gap-5">
                    <div className=" rounded-lg bg-slate-400 shadow-lg h-80 p-4 w-96">
                        <div className=" flex justify-center items-center text-center flex-col gap-4">
                                <p className=" text-lg font-semibold ">Sobre nós</p>
                                <p className=" text-base text-justify ">Os Jogos Olímpicos são a única competição atlética verdadeiramente global, 
                                    multiesportiva e comemorativa do mundo. Com mais de 200 países que participam de mais de 400 eventos 
                                    nos Jogos Olímpicos de Verão e de Inverno, as Olimpíadas é onde o mundo compete, se sente inspirado e 
                                    está unido.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;