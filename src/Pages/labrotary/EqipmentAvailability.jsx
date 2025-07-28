import React from "react";
import Table from "../../Components/Table";

function EqipmentAvailability() {
  const columns = ["Equipment", "Type", "Availability", "Action"];

  const data = [
    {
      equipment: "wheelchair",
      type: "mobility",
      availability: "available",
      action: "request",
    
    },
     {
      equipment: "oxigentank",
      type: "support",
      availability: "unavailable",
      action: "notify me",
    
    },
     {
      equipment: "ECG monitor",
      type: "dignostics",
      availability: "available",
      action: "details",
    
    },
     {
      equipment: "wheelchair",
      type: "mobility",
      availability: "available",
      action: "request",
    
    },
     {
      equipment: "wheelchair",
      type: "mobility",
      availability: "available",
      action: "request",
    
    },
     

   
  ];

  return (
    <div className=" bg-[#a7caba7a] rounded-xl p-5">
      <Table title="Pending Tests" columns={columns} data={data} />
    </div>
  );
}

export default EqipmentAvailability;
