import { useState, useEffect } from "react";

function Header() {
  const [Username, setUsername] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
    } else {
      const name = prompt("Enter your name");
      if (name) {
        setUsername(name);
        localStorage.setItem("username", name);
      }
    }
  }, []);

  return (
    <>
      <div className="w-screen h-16 bg-[#4d4c4c] flex justify-between items-center">
        <div className="flex items-center">
          <div
            className="h-12 w-12 ml-5 mr-3"
            style={{ backgroundImage: "url(/todo.png)" }}
          ></div>
          <div className="text-[#ffff] text-4xl">{Username}'s Todo List...</div>
        </div>
      </div>
    </>
  );
}

export default Header;
