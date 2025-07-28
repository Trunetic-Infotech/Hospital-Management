import React from "react";
import Table from "../../Components/Table";


function AmbulanceTracking() {
  const columns = ["srno", "vechicle no", "driver", "patient", "ETA"];

  const data = [
    {
      srno: "1",
      vechicleno: "mh46cx2222",
      driver: "Vaibhav",
      patient: "akshay",
      eta: "20 min",
    },
    {
      srno: "1",
      vechicleno: "mh46cx2222",
      driver: "Vaibhav",
      patient: "akshay",
      eta: "20 min",
    },
    {
      srno: "1",
      vechicleno: "mh46cx2222",
      driver: "Vaibhav",
      patient: "akshay",
      eta: "20 min",
    },
    {
      srno: "1",
      vechicleno: "mh46cx2222",
      driver: "Vaibhav",
      patient: "akshay",
      eta: "20 min",
    },
  ];
  return (
    <div className="p-5 bg-[#a7caba7a]">
      <Table title="Ambulance Tracking" columns={columns} data={data} />
    </div>
  );
}

export default AmbulanceTracking;
