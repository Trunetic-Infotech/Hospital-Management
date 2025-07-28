import React from "react";

function Table({ title, columns, data }) {

  console.log(columns,data[0] );

  return (
    <div className="px-4">
      <div className="bg-white rounded-2xl shadow-lg p-5">
        {/* Title */}
        <h1 className="text-xl font-semibold text-gray-800 mb-4">{title}</h1>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
              <tr>
                {columns.map((col, index) => (
                  <th key={index} className="px-6 py-3">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="text-gray-700 text-sm">
              {data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="bg-white shadow hover:bg-gray-50 rounded-xl transition"
                >
                  {columns.map((col, colIndex) => (
                    <td key={colIndex} className="px-6 py-4 font-medium">
                      {row[col.toLowerCase().replace(/\s/g, "")] || "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
