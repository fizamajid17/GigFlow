import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", form);
    localStorage.setItem("token", res.data.token);
    alert("Login successful");
  };

  return (
    <div>
      <h2>Login</h2>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" onChange={handleChange} />
      <button onClick={submit}>Login</button>
    </div>
  );
}
