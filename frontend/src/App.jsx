import { useState } from "react";

function App() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        
        {/* Register Card */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">GigFlow</h1>
          <h2 className="text-xl mb-4 text-center">Register</h2>

          <input
            type="text"
            placeholder="Name"
            className="w-full mb-3 p-3 rounded bg-gray-700 focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-3 rounded bg-gray-700 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 rounded bg-gray-700 focus:outline-none"
          />

          <button className="w-full bg-green-600 hover:bg-green-700 transition p-3 rounded font-semibold">
            Register
          </button>
        </div>

        {/* Login Card */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6">
          <h2 className="text-xl mb-6 text-center">Login</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-3 rounded bg-gray-700 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 rounded bg-gray-700 focus:outline-none"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded font-semibold">
            Login
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
