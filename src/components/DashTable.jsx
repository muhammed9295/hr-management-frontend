import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function DashTable() {
  return (
    <div className="bg-white rounded-[6px] p-5 w-3/5 flex flex-col">
      <h3 className="text-[20px] font-bold">Employee Status</h3>

      {/* Table */}
      <Table className="mt-3">
        <TableHeader>
          <TableRow className="text-[14px] font-light">
            <TableHead>Employee Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Discipline</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="cursor-default">
          <TableRow className="text-[14px] font-bold border-0">
            <TableCell>Muhammed Shiekh</TableCell>
            <TableCell>Projects</TableCell>
            <TableCell>32</TableCell>
            <TableCell>100%</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>

          <TableRow className="text-[14px] font-bold border-0">
            <TableCell>Muhammed Shiekh</TableCell>
            <TableCell>Projects</TableCell>
            <TableCell>32</TableCell>
            <TableCell>100%</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default DashTable;
