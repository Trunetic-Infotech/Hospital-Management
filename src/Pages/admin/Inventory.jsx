import React, { useState } from "react";
import { Search } from "lucide-react";
import Table from "../../Components/Table";

function StockUsage() {
  const roles = [
    {
      label: "Total Items",
      count: "120 ",
    },
    {
      label: "Low Stock Alert",
      count: "15 ",
    },
    {
      label: "Out Of Stock",
      count: "5",
    },
    {
      label: "Total Value",
      count: "15000",
    },
  ];

  const columns = [
    "Item Details",
    "Category",
    "Stock Status",
    "Unit Price",
    "Last Updated",
    "Actions",
  ];

  const data = [
    {
      itemdetails: "digital Therometer",
      category: "medical equipment",
      stockstatus: "instock",
      unitprice: "200",
      lastupdated: "2025-08-11",
      actions: "edit",
    },
    {
      itemdetails: "surgical gloves",
      category: "mediciations",
      stockstatus: "low stock",
      unitprice: "200",
      lastupdated: "2025-08-11",
      actions: "update",
    },
    {
      itemdetails: "face masks",
      category: "medical supplies",
      stockstatus: "out of stock",
      unitprice: "200",
      lastupdated: "2025-08-11",
      actions: "delete",
    },
    {
      itemdetails: "digital Therometer",
      category: "medical equipment",
      stockstatus: "instock",
      unitprice: "200",
      lastupdated: "2025-08-11",
      actions: "edit",
    },
    {
      itemdetails: "digital Therometer",
      category: "medical equipment",
      stockstatus: "instock",
      unitprice: "200",
      lastupdated: "2025-08-11",
      actions: "edit",
    },
  ];

  const [filteredItems, setFilteredItems] = useState(data); // Initial full list

  const filterdata = (filterType, value) => {
    if (value === "") {
      setFilteredItems(data); // Reset to full data
    } else {
      const filtered = data.filter((item) =>
        item[filterType]?.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered); // Update table
    }
  };



  return (
    <div className="flex flex-col gap-5 p-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:p-6 md:p-8 bg-[#a7caba7a] rounded-xl">
        {roles.map((role, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
          >
            {/* Top Bar with Icon and Button */}

            <hr className="border-2 border-gray-300" />

            {/* Content */}
            <div className="flex flex-col items-center justify-center px-4 py-6 text-sm font-medium">
              <h1 className="text-lg font-semibold text-center text-gray-800 mb-2">
                {role.label}
              </h1>
              <span className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 text-base font-bold">
                {role.count}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className=" bg-[#a7caba7a] rounded-xl p-6">
        <h1 className="font-bold text-lg mb-4">Filter Rooms</h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          <div className="relative w-full">
             <div className="relative flex items-center bg-white rounded-lg shadow-lg p-2 pl-10 w-full">
              <select
                onChange={(e) => filterdata("category", e.target.value)}
                name="Types"
                className="w-full  text-gray-700 placeholder:text-base outline-none  pr-6"
              >
                <option value="">All categories</option>
                <option value="mediciations">mediciations</option>
                <option value="medical equipment">Medical Equipment</option>
                <option value="medical supplies">Medical Supplies</option>
              </select>
            </div>
          </div>

          <div className="relative w-full">
            <div className="relative flex items-center bg-white rounded-lg shadow-lg p-2 pl-10 w-full">
              <select
                onChange={(e) => filterdata("stockstatus", e.target.value)}
                name="Types"
                className="w-full  text-gray-700 placeholder:text-base outline-none  pr-6"
              >
                <option value="">All Status</option>
                <option value="instock">Instock</option>
                <option value="Low stock">Low Stock</option>
                <option value="out of stock">Out OF Stock</option>
              </select>
            </div>
          </div>

        
        </div>
      </div>

      <div className=" bg-[#a7caba7a] rounded-xl p-5">
        <Table title="Stock Usage" columns={columns} data={filteredItems} />
      </div>
    </div>
  );
}

export default StockUsage;
