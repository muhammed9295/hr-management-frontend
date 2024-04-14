import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import axios from "axios";



const AllEmployees = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [employees, setEmployees] = useState([]);

  // Fetch all employees
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/employees/get-employees`,
          { withCredentials: true }
        );
        setEmployees(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployees();
  }, []);
  // Fetch all employees

  // Delete employee
  const deleteEmployee = async (id) => {
    const url = `${baseUrl}/api/v1/employees/delete-profile/${id}`
    console.log(url);
    try {
      await axios.delete(
        `${baseUrl}/api/v1/employees/delete-profile/${id}`,
        { withCredentials: true }
      );
      const updatedEmployees = employees.filter(
        (employee) => employee._id !== id
      );
      setEmployees(updatedEmployees);
    } catch (error) {
      console.log(error);
    }
  };
  // Delete employee

  // Calculate total pages
  const totalPages = Math.ceil(employees.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Slice data for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = employees.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-white rounded-[6px] p-5 w-full h-[550px] h- flex flex-col justify-between">
      {/* Table */}
      <Table className="mt-3">
        <TableHeader>
          <TableRow className="text-[18px] font-light">
            <TableHead>Employee Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Qualification</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="cursor-default">
          {currentItems.map((user) => (
            <TableRow
              key={user._id}
              className="text-[16px] font-normal border-0"
            >
              <TableCell className="flex items-end gap-2">
                <span><img src={user.avatar} width={40} height={40} className="rounded-full object-cover" alt="" /></span>
                <span>{user.firstName} {user.lastName}</span>
                
              </TableCell>
              <TableCell>{user.department}</TableCell>
              <TableCell>{user.yearOfExperience}</TableCell>
              <TableCell>{user.qualification}</TableCell>
              <TableCell>Active</TableCell>
              <TableCell className="flex gap-2">
                <Link to={`/profile/:${user._id}`}>
                  <Button>View</Button>
                </Link>
                <Button onClick = {() =>deleteEmployee(user._id)} variant="destructive">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="">
        <Separator className="mt-6" />
        <div className=" flex w-full  justify-between items-center px-2 mt-5">
          {/* Conditionally disable the Back button */}
          <Button
            className="text-[1.25rem] w-[1.87rem] h-[1.87rem] p-0 cursor-pointer"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <IoIosArrowBack />
          </Button>
          {/* Conditionally disable the Forward button */}
          <Button
            className="text-[1.25rem] w-[1.87rem] h-[1.87rem] p-0 cursor-pointer"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <IoIosArrowForward />
          </Button>
        </div>
      </div>
      {/* Table */}
    </div>
  );
};

export default AllEmployees;
