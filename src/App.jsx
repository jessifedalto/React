import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchedUsers = [
      { id: 1, name: "Nicolas" },
      { id: 2, name: "Queila" },
      { id: 3, name: "Don" },
      { id: 4, name: "Trevisan" },
      { id: 5, name: "Nycollas" },
      { id: 6, name: "Fabio" },
      { id: 7, name: "Stati" },
      { id: 8, name: "Moll" },
    ];
    setUsers(fetchedUsers);
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col">
      <Navbar/>
        <div className="flex-grow container mx-auto p-4">
          <div className="text-2xl font-bold mb-4">Usuários</div>
          <ul className="bg-white shadow-md rounded-lg p-4">
            {users.map((user) => (
              <li key={user.id} className="border-b last:border-none p-2">
                {user.name}
              </li>
            ))}
          </ul>
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