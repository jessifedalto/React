import Navbar from "./Navbar";
import Card from "./Card";

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar/>
        <div className="flex-grow container mx-auto p-4 justify-center items-center flex gap-5">
          <Card id="1" img={"./Hoddie.avif"} detail={"Moletom com Capuz Olímpiadas 2024"} price={"248,11"}></Card>
          <Card id="1" img={"./Cap.avif"} detail={"Boné Olímpiadas 2024"} price={"132,17"}></Card>
          <Card id="1" img={"./Bag.avif"} detail={"Bolsa Grande Olímpiadas 2024"} price={"204,26"}></Card>
        </div>
        <div className="bg-gray-800 text-white p-4">
          <div className="container mx-auto text-center">
            <div>
              &copy; 2024 Lista de Usuários. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;