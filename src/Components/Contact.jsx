import Navbar from "./Navbar";

function Contact(){
    return (
        <>
            <Navbar />
             <div className="min-h-screen flex flex-col justify-center items-center">
                <div className=" rounded-lg bg-white shadow-lg">
                   <div className=" flex justify-center items-center text-center">
                        <p className=" text-lg ">Olá</p>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Contact;