import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { baseUrl } from "@/baseUrl";

const AddEmployee = () => {
  // Add a new employee
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    qualification: "",
    yearOfExperience: "",
    department: "",
    email: "",
    phoneNumber: "",
    avatar: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, avatar: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null) {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(`${baseUrl}/api/v1/employees/add-employee`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      
      // Toast Message
      toast.success("Added New Employee");

      // Reset form data to initial state after successful submission
    setFormData({
      firstName: "",
      lastName: "",
      qualification: "",
      yearOfExperience: "",
      department: "",
      email: "",
      phoneNumber: "",
      avatar: null,
    });
    } catch (error) {
      // Toast Message
      toast.error("Failed to Add Employee. Please try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  // Add a new employee

  return (
    <div className="flex gap-5 py-5 px-8">
      <div className="flex-3 flex flex-col gap-5 w-full">
        {/* Your main content goes here */}
        <h2 className="text-[25px] font-semibold">Add Employees</h2>

        {/* Add Employees Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-[6px] w-[95%] min-h-[700px] flex flex-col p-10"
        >
          {/* Form Section */}

          <div className="flex flex-col justify-around items-center h-full">
            <div className="flex flex-col item-center justify-evenly w-full h-full mb-10">
              <div className="flex justify-between">
                <div className="grid gap-3 w-1/2 px-5">
                  <Label>First Name</Label>
                  <Input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-3 w-1/2 px-5">
                  <Label>Last Name</Label>
                  <Input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <div className="grid gap-3 w-1/2 px-5">
                  <Label>Qualification</Label>
                  <Input
                    type="text"
                    placeholder="Qualification"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-3 w-1/2 px-5">
                  <Label>Years of Experience</Label>
                  <Input
                    type="text"
                    placeholder="Years of Experience"
                    name="yearOfExperience"
                    value={formData.yearOfExperience}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <div className="grid gap-3 w-1/2 px-5">
                  <Label>Department</Label>
                  <Input
                    type="text"
                    placeholder="Department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-3 w-1/2 px-5">
                  <Label>Email</Label>
                  <Input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <div className="grid gap-3 w-1/2 px-5">
                  <Label>Phone Number</Label>
                  <Input
                    className="focus:ring-sky-100"
                    type="text"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-3 w-1/2 px-5">
                  <Label>Upload Image</Label>
                  <Input
                    type="file"
                    name="avatar"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>

            <Button
              disabled={isLoading}
              type="submit"
              className="w-[18.75rem] h-[3.75rem]"
            >
              {isLoading ? "Loading..." : "Add"}
            </Button>
          </div>
          {/* Form Section */}
        </form>
        <Toaster />
        {/* Add Employees Section */}
      </div>
    </div>
  );
};

export default AddEmployee;
