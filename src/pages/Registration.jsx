import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import React, { useState } from "react";
import axios from "axios";
import { toast , Toaster } from "sonner";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "@/baseUrl";

function Registration() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Registration process starts here
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); //Redirect to login page

  console.log(username, email, password);
  const validateForm = () => {
    if (!username || !email || !password) {
      // add toast message
      toast.error("Please fill all the fields");
      return false;
    }
    if (!email.includes("@")) {
      // add toast message
      toast.error("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const userData = {
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/users/register`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      // toast success message
      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      // toast error message
      toast.error("Registration failed. Please try again.");
      console.log(error);
    }
  };
  // Registration process ends here

  const toggleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-white rounded-[6px] p-20 flex flex-col items-center justify-around w-1/3 h-3/5">
        <h2 className="text-3xl font-bold">Registration</h2>
        <form className="grid gap-6 w-3/4 my-8" onSubmit={handleSubmit}>
          <span className="grid gap-1.5">
            <Label>Username</Label>
            <Input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </span>
          <span className="grid gap-1.5">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
          <span className="grid gap-1.5">
            <Label>Password</Label>
            <div className="flex gap-2">
              <Input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span onClick={toggleVisibility} className="text-[1rem] text-white w-[2.5rem] h-[2.5rem] bg-black rounded flex items-center justify-center cursor-pointer hover:bg-gray-700">
                {passwordVisible ? <IoIosEye /> : <IoIosEyeOff />}
              </span>
            </div>
          </span>
          <Button type="submit" className="mt-4 w-60 text-[1rem]">
            Register
          </Button>
        </form>
        <Toaster />
      </div>
    </div>
  );
}

export default Registration;
