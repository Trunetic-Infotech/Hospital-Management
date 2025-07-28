import React from "react";
import Table from "../../Components/Table";

function SampleCollection() {
  const columns = ["Test Name", "Sample ID", "Date", "Status"];

  const data = [
    {
      testname: "Blood Test",
      sampleid: "Lab1234",
      date: "26/07/2025",
      status: "cancelled",
    
    },
     {
      testname: "X-Ray",
      sampleid: "Lab5678",
      date: "26/07/2025",
      status: "collected",
    
    },
     {
      testname: "CBC",
      sampleid: "Lab1234",
      date: "26/07/2025",
      status: "pending",
    
    },
     {
      testname: "Covid-19",
      sampleid: "Lab1234",
      date: "26/07/2025",
      status: "collected",
    
    },

   
  ];

  return (
    <div className=" bg-[#a7caba7a] rounded-xl p-5">
      <Table title="Pending Tests" columns={columns} data={data} />
    </div>
  );
}

export default SampleCollection;
