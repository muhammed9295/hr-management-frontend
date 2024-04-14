import React, { useState } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableCell, TableBody, Separator } from 'your-table-components'; // Adjust import paths as necessary
import { IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5'; // Adjust import paths as necessary
import { Link } from 'react-router-dom'; // Adjust import paths as necessary
import Button from 'your-button-component'; // Adjust import paths as necessary

const AllEmployees = () => {
 const [currentPage, setCurrentPage] = useState(1);
 const itemsPerPage = 5;
 const users = [
    // Your users data here
 ];

 // Calculate total pages
 const totalPages = Math.ceil(users.length / itemsPerPage);

 // Function to handle page change
 const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
 };

 // Slice data for current page
 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

 return (
    <div className="bg-white rounded-[6px] p-5 w-full min-h-[360px] flex flex-col">
      {/* Table */}
      <Table className="mt-3">
        <TableHeader>
          <TableRow className="text-[18px] font-light">
            <TableHead>Employee Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Qualification</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="cursor-default">
          {currentItems.map((user) => (
            <TableRow key={user.id} className="text-[18px] font-bold border-0">
              <TableCell>
                {user.firstname} {user.lastname}
              </TableCell>
              <TableCell>{user.department}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.experience}</TableCell>
              <TableCell>{user.qualification}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell className="flex gap-2">
                <Link to={`/profile/${user.id}`}>
                 <Button>View</Button>
                </Link>
                <Button variant="destructive">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Separator className="mt-6" />
      <div className="flex w-full justify-between items-center px-2 mt-2">
        {/* Conditionally render the Back icon */}
        {currentPage > 1 && (
          <span className="text-[30px] cursor-pointer hover:text-slate-500" onClick={() => handlePageChange(currentPage - 1)}>
            <IoArrowBackCircle />
          </span>
        )}
        {/* Conditionally render the Forward icon */}
        {currentPage < totalPages && (
          <span className="text-[30px] cursor-pointer hover:text-slate-500" onClick={() => handlePageChange(currentPage + 1)}>
            <IoArrowForwardCircle />
          </span>
        )}
      </div>
      {/* Table */}
    </div>
 );
};

export default AllEmployees;