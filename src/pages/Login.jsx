import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "sonner";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); //Redirect to dashboard page

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data.statusCode === 200) {
        toast.success("Login success");
        localStorage.setItem("accessToken", response.data.data.accessToken);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);
        navigate("/dashboard");
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login Error: ", error);
      toast.error("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-[6px] p-20 flex flex-col items-center justify-around w-1/3 h-3/6"
      >
        <h2 className="text-4xl font-bold">Login</h2>
        <div className="grid gap-6 w-3/4 my-8">
          <span className="grid gap-1.5">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
          <span className="grid gap-1.5">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>
        </div>
        <p className="text-gray-400 font-light text-sm italic">
          If you are not a member, please{" "}
          <Link to="/registration" className="text-blue-600">
            {" "}
            Register here.
          </Link>
        </p>
        <Button type="submit" className="mt-4 w-60 text-[1rem]">
          Login
        </Button>
      </form>
      <Toaster />
    </div>
  );
}

export default Login;
