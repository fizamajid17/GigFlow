import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <Register />
        <Login />
      </div>
    </div>
  );
}

export default App;
