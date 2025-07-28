import React from 'react'
import Table from '../../Components/Table';

function PatientDetails() {

  const columns = ["Patient Name","Age", "Gender", "Case Type",  "Status", "Doctor", "Admitted On","Room","Ward"];

  const data = [
    {
   
      patientname: "Ram",
      age:20,
      gender:"male",
      casetype: "Accident",
      status:"critical",
      doctor: "Dr.Aniket",
      admittedon: "09/07/2025",
      room: "A5",
      ward:"icu",
    },
   {
   
      patientname: "Ram",
      age:20,
      gender:"male",
      casetype: "Accident",
      status:"critical",
      doctor: "Dr.Aniket",
      admittedon: "09/07/2025",
      room: "A5",
      ward:"icu",
    },
   {
   
      patientname: "Ram",
      age:20,
      gender:"male",
      casetype: "Accident",
      status:"critical",
      doctor: "Dr.Aniket",
      admittedon: "09/07/2025",
      room: "A5",
      ward:"icu",
    },
   {
   
      patientname: "Ram",
      age:20,
      gender:"male",
      casetype: "Accident",
      status:"critical",
      doctor: "Dr.Aniket",
      admittedon: "09/07/2025",
      room: "A5",
      ward:"icu",
    },
    {
   
      patientname: "Ram",
      age:20,
      gender:"male",
      casetype: "Accident",
      status:"critical",
      doctor: "Dr.Aniket",
      admittedon: "09/07/2025",
      room: "A5",
      ward:"icu",
    },
    
  ];

  return (

      <div className="bg-[#a7caba7a] p-5 rounded-xl">
         <Table
       
        title="Patient Details"
        columns={columns}
        data={data}
         
      />
      </div>
  
  )
}

export default PatientDetails