import React from "react";
import Table from "../../Components/Table";

function SampleCollection() {
  const columns = ["Test Name", "Date", "Result", "Status"];

  const data = [
    {
      testname: "Blood Test",
      date: "26/07/2025",
      result: "Available",
      status: "completed",
    },
    {
      testname: "X-Ray",
      date: "26/07/2025",
      result: "Available",
      status: "inprogress",
    },
    {
      testname: "CBC",
      date: "26/07/2025",
      result: "Available",
      status: "cancel",
    },
    {
      testname: "Covid-19",
      date: "26/07/2025",
      result: "Available",
      status: "completed",
    },
  ];

  return (
    <div className=" bg-[#a7caba7a] rounded-xl p-5">
      <Table title="Pending Tests" columns={columns} data={data} />
    </div>
  );
}

export default SampleCollection;
