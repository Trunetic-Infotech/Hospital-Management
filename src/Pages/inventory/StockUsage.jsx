import React, { useState } from "react";
import { Search } from "lucide-react";
import Table from "../../Components/Table";

function StockUsage() {
  const roles = [
    {
      label: "Total Stock Used (Today)",
      count: "120 Units",
    },
    {
      label: "Remaining Critical Stock",
      count: "15 items",
    },
    {
      label: "Monthly Usage Report",
      count: "generate pdf",
    },
    {
      label: "Low Stock Alert",
      count: "3 items",
    },
  ];

  const columns = [
    "Date",
    "Item Name",
    "Item Code",
    "Department",
    "Used Quantity",
    "Unit",
    "Remaining Stock",
  ];

  const data = [
    {
      date: "2025-08-11",
      itemname: "syringe",
      itemcode: "Med105",
      department: "Cardiology",
      usedquantity: "20",
      unit: "piecess",
      remainingstock: "50",
    },
    {
      date: "2025-08-11",
      itemname: "sutures",
      itemcode: "Med105",
      department: "ER",
      usedquantity: "20",
      unit: "Bottles",
      remainingstock: "50",
    },
    {
      date: "2025-08-12",
      itemname: "catheters",
      itemcode: "Med105",
      department: "ICU",
      usedquantity: "20",
      unit: "Boxes",
      remainingstock: "50",
    },
    {
      date: "2025-07-29",
      itemname: "syringe",
      itemcode: "Med105",
      department: "Cardiology",
      usedquantity: "20",
      unit: "piecess",
      remainingstock: "50",
    },
    {
      date: "2025-08-09",
      itemname: "syringe",
      itemcode: "Med105",
      department: "Cardiology",
      usedquantity: "20",
      unit: "piecess",
      remainingstock: "50",
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

  // only Date Are Filtered
  const filteredByDate = (selectedDate) => {
    if (selectedDate === "") {
      setFilteredItems(data);
    } else {
      const filtered = data.filter((item) => item.date === selectedDate);
      setFilteredItems(filtered);
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
            <div className="flex items-center bg-white rounded-lg shadow-lg p-2 pl-10 w-full">
              <Search className="absolute left-3 w-6 h-6" />
              <input
                type="date"
                onChange={(e) => filteredByDate(e.target.value)}
                name="Search"
                placeholder="Search Date..."
                className="w-full placeholder:text-gray-500 placeholder:text-base outline-none bg-transparent"
              />
            </div>
          </div>

          <div className="relative w-full">
            <div className="relative flex items-center bg-white rounded-lg shadow-lg p-2 pl-10 w-full">
              <select
                onChange={(e) => filterdata("department", e.target.value)}
                name="Types"
                className="w-full  text-gray-700 placeholder:text-base outline-none  pr-6"
              >
                <option value="">Department</option>
                <option value="cardiology"> Cardiology</option>
                <option value="er">ER</option>
                <option value="icu">ICU</option>
              </select>
            </div>
          </div>

          <div className="relative w-full">
            <div className="relative flex items-center bg-white rounded-lg shadow-lg p-2 pl-10 w-full">
              <select
                onChange={(e) => filterdata("itemname", e.target.value)}
                name="priority"
                className="w-full bg-transparent text-gray-700 placeholder:text-base outline-none  pr-6"
              >
                <option value="">Items</option>
                <option value="sutures">sutures</option>
                <option value="syringe">syringe</option>
                <option value="catheters">catheters</option>
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
