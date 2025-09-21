import { useState } from "react";
import axios from "axios";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:8085/api/admin/login", { email, password });
    if(res.data) alert("Admin logged in!"); 
    else alert("Invalid admin credentials");
  }

  return (
    <div>
      <h1>Admin Login</h1>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
