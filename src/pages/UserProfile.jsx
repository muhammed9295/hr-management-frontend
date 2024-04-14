import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { baseUrl } from "@/baseUrl";


const UserProfile = () => {
  const { id } = useParams();
  const idWithoutColon = id.replace(/^:/, "");
  const [employee, setEmployee] = useState([]);
  const [employeeData, setEmployeeData] = useState({
    id: idWithoutColon,
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
  const navigate = useNavigate(); // Redirect to All employees page
  // Fetch user profile

  useEffect(() => {
    const userProfile = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/employees/get-profile/${idWithoutColon}`,
          { withCredentials: true }
        );
        setEmployee(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    userProfile();
  }, [idWithoutColon]);

  // Fetch user profile

  // Update user profile
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleFileChange = (e) => {
    setEmployeeData({ ...employeeData, avatar: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formDataToSend = new FormData();
    Object.keys(employeeData).forEach((key) => {
      if (employeeData[key] !== null) {
        formDataToSend.append(key, employeeData[key]);
      }
    });

    try {
      const response = await axios.patch(
        `${baseUrl}/api/v1/employees/update-profile`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      // Toast Message
      toast.success("Updated Current Employee");      
      setEmployeeData(response.data.data);
      navigate("/employes");
    } catch (error) {
      toast.error("Failed to Update. Please try again.");
      console.log("Error updating employee");
      // toast message
    } finally {
      setIsLoading(false);
    }
  };
  // Update user profile

  return (
    <div className="flex gap-5 py-5 px-8">
      <div className="flex-3 flex flex-col gap-5 w-full">
        {/* Your main content goes here */}
        <h2 className="text-[25px] font-semibold">Profile</h2>

        {/* Profile Section */}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-[6px] w-[95%] min-h-[700px] flex flex-col items-center py-10 px-24"
        >
          {/* Form Section */}
          <div className="w-full">
            <div className="flex  gap-10">
              <img
                className="rounded-full object-cover"
                src={employee.avatar}
                alt="profile-pic"
                width="200px"
                height="200px"
              />
              <div className="w-5/6 justify-end flex flex-col">
                <h3 className="text-3xl font-semibold">
                  {employee.firstName} {employee.lastName}
                </h3>
                <div className="flex gap-20 pt-10 pb-5">
                  <span className="w-1/2">
                    <Label>First Name</Label>
                    <Input
                      type="text"
                      placeholder={employee.firstName}
                      name="firstName"
                      value={employeeData.firstName}
                      onChange={handleChange}
                    />
                  </span>
                  <span className="w-1/2">
                    <Label>Last Name</Label>
                    <Input
                      type="text"
                      placeholder={employee.lastName}
                      name="lastName"
                      value={employeeData.lastName}
                      onChange={handleChange}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="px-4 flex flex-col gap-10 w-full mt-4">
              <div className="flex gap-20">
                <span className="w-1/2">
                  <Label>Qualification</Label>
                  <Input
                    type="text"
                    placeholder={employee.qualification}
                    name="qualification"
                    value={employeeData.qualification}
                    onChange={handleChange}
                  />
                </span>
                <span className="w-1/2">
                  <Label>Year of Experience</Label>
                  <Input
                    type="text"
                    placeholder={employee.yearOfExperience}
                    name="yearOfExperience"
                    value={employeeData.yearOfExperience}
                    onChange={handleChange}
                  />
                </span>
              </div>

              <div className="flex gap-20">
                <span className="w-1/2">
                  <Label>Department</Label>
                  <Input
                    type="text"
                    placeholder={employee.department}
                    name="department"
                    value={employeeData.department}
                    onChange={handleChange}
                  />
                </span>
                <span className="w-1/2">
                  <Label>Email</Label>
                  <Input
                    type="text"
                    placeholder={employee.email}
                    name="email"
                    value={employeeData.email}
                    onChange={handleChange}
                  />
                </span>
              </div>

              <div className="flex gap-20">
                <span className="w-1/2">
                  <Label>Phone</Label>
                  <Input
                    type="text"
                    placeholder={employee.phoneNumber}
                    name="phoneNumber"
                    value={employeeData.phoneNumber}
                    onChange={handleChange}
                  />
                </span>
                <span className="w-1/2">
                  <Label>Upload Image</Label>
                  <Input
                    type="File"
                    name="avatar"
                    onChange={handleFileChange}
                  />
                </span>
              </div>
            </div>
          </div>

          <Button
            disabled={isLoading}
            type="submit"
            className="mt-16 w-[18.75rem] h-[3.75rem]"
          >
            {isLoading ? "Loading..." : "Update"}
          </Button>
          {/* Form Section */}
        </form>
        <Toaster />
        {/* Profile Section */}
      </div>
    </div>
  );
};

export default UserProfile;
