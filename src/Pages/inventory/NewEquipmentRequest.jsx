import React from "react";
import Table from "../../Components/Table";

function NewEquipmentRequest() {
  const columns = ["Item", "Department", "Quantity", "Date"];

  const data = [
    {
      item: "catheters",
      department: "Cardiology",
      quantity: "10",
      date: "2025-08-11",
    },
    {
      item: "catheters",
      department: "ER",
      quantity: "10",
      date: "2025-08-11",
    },
    {
      item: "catheters",
      department: "ICU",
      quantity: "10",
      date: "2025-08-11",
    },
    {
      item: "catheters",
      department: "Cardiology",
      quantity: "10",
      date: "2025-08-11",
    },
    {
      item: "catheters",
      department: "Cardiology",
      quantity: "10",
      date: "2025-08-11",
    },
  ];

  return (
    <div className="flex flex-col gap-5 p-6">
      <div className=" bg-[#a7caba7a] rounded-xl p-3 ">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          <div className="relative w-full">
            <h1>Item Name</h1>
            <div className="flex items-center bg-white rounded-lg shadow-lg p-2 pl-10 w-full">
              <input
                type="text"
                onChange={(e) => filteredByDate(e.target.value)}
                placeholder="Item..."
                className="w-full placeholder:text-gray-500 placeholder:text-base outline-none bg-transparent"
              />
            </div>
          </div>

          <div className="relative w-full">
            <h1>Quantity</h1>
            <div className="flex items-center bg-white rounded-lg shadow-lg p-2 pl-10 w-full">
              <input
                type="text"
                onChange={(e) => filteredByDate(e.target.value)}
                placeholder="Item..."
                className="w-full placeholder:text-gray-500 placeholder:text-base outline-none bg-transparent"
              />
            </div>
          </div>

          <div className="relative w-full">
            <h1>Department</h1>
            <div className="flex items-center bg-white rounded-lg shadow-lg p-2 pl-10 w-full">
              <input
                type="text"
                onChange={(e) => filteredByDate(e.target.value)}
                placeholder="Item..."
                className="w-full placeholder:text-gray-500 placeholder:text-base outline-none bg-transparent"
              />
            </div>
          </div>
        </div>

        <button className="px-6 py-2 bg-[#0F766E] rounded-xl  font-bold text-white">
          Submit
        </button>
      </div>

      {/* Table */}
      <div className=" bg-[#a7caba7a] rounded-xl p-5">
        <Table
          title="Equipment Request History"
          columns={columns}
          data={data}
        />
      </div>
    </div>
  );
}

export default NewEquipmentRequest;
