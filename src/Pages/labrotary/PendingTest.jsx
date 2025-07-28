import React from "react";
import Table from "../../Components/Table";

function PendingTest() {
  const columns = ["Patients Name", "Test Name", "Sample", "Due", "Action"];

  const data = [
    {
      patientsname: "Ram",
      testname: "CBC",
      sample: "yes",
      due: "1 hrs",
      action: "view details",
    },

    {
      patientsname: "Ram",
      testname: "CBC",
      sample: "yes",
      due: "1 hrs",
      action: "view details",
    },
     {
      patientsname: "Ram",
      testname: "CBC",
      sample: "yes",
      due: "1 hrs",
      action: "view details",
    },

    {
      patientsname: "Ram",
      testname: "CBC",
      sample: "yes",
      due: "1 hrs",
      action: "view details",
    },
     {
      patientsname: "Ram",
      testname: "CBC",
      sample: "yes",
      due: "1 hrs",
      action: "view details",
    },

    {
      patientsname: "Ram",
      testname: "CBC",
      sample: "yes",
      due: "1 hrs",
      action: "view details",
    },
  ];

  return (
    <div className=" bg-[#a7caba7a] rounded-xl p-5">
      <Table title="Pending Tests" columns={columns} data={data} />
    </div>
  );
}

export default PendingTest;
