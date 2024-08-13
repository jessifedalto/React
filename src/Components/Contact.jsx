import Navbar from "./Navbar";

function Contact(){
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-grow container mx-auto p-4 justify-center items-center flex gap-5">
                    <div className=" rounded-lg bg-slate-400 shadow-lg  p-4">
                    <div className=" flex justify-center items-center text-center flex-col h-80 gap-4">
                            <p className=" text-lg font-semibold ">Para nos contatar use uma dessas plataformas:</p>
                            <p className=" text-base">email@mail.com</p>
                            <p className=" text-base">email2@hotmail.com</p>
                            <p className=" text-base">(41)12345-6789</p>
                            <p className=" text-base">Instagram</p>
                            <p className=" text-base">LinkedIn</p>
                            <p className=" text-base">Facebook</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;