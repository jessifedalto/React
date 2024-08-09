import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto p-4">
          <div className="text-2xl font-bold mb-4">Ranking de medalhas</div>
          <ul className="bg-white shadow-md rounded-lg p-4">
            <li className="border-b last:border-none p-2">
                Estados Unidos - 103 medalhas
            </li>
            <li className="border-b last:border-none p-2">
                China - 74 medalhas
            </li>
            <li className="border-b last:border-none p-2">
                Austrália - 56 medalhas
            </li>
            <li className="border-b last:border-none p-2">
                França - 55 medalhas
            </li>
            <li className="border-b last:border-none p-2">
                Grã-Bretanha - 52 medalhas
            </li>
            <li className="border-b last:border-none p-2">
                Japão - 34 medalhas
            </li>
            <li className="border-b last:border-none p-2">
                Coreia do Sul - 28 medalhas
            </li>
            <li className="border-b last:border-none p-2">
                Países Baixos - 25 medalhas
            </li>
            <li className="border-b last:border-none p-2">
                Itália - 30 medalhas
            </li>
            <li className="border-b last:border-none p-2">
                Alemanha - 25 medalhas
            </li>
            <li className="border-b last:border-none p-2">
                Nova Zelândia - 14 medalhas
            </li>
            <li className="border-b last:border-none p-2">
                Canadá - 22 medalhas
            </li>
            <li className="border-b last:border-none p-2">
                Hungria - 14 medalhas
            </li>
            <li className="border-b last:border-none p-2">
                Irlanda - 7 medalhas
            </li>
            <li className="border-b last:border-none p-2">
                Ucrânia - 11 medalhas
            </li>
            <li className="border-b last:border-none p-2">
                Suécia - 9 medalhas
            </li>
            <li className="border-b last:border-none p-2">
                Uzbequistão - 5 medalhas
            </li>
            <li className="border-b last:border-none p-2">
                Brasil - 16 medalhas
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
