import { useState } from "react";
import * as XLSX from "xlsx";

function ExcelToJsonConverter() {
  const [file, setFile] = useState();
  const [jsonData, setJsonData] = useState("");

  const update = (e: any) => {
    if (e.target.files !== null) {
      setFile(e.target.files[0]);
    }
  }

const handleConvert = () => {
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target?.result; // Add null check for e.target
            const workbook = XLSX.read(data, { type: "binary",cellDates: true,
            cellNF: false,
            cellText: false,
             });
            const options = {
              raw: false, 
              dateNF: 'mm-dd-yyyy', // Specify the date format string here
            };
            const sheetName = workbook.SheetNames[1];
            const worksheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(worksheet, options);
            setJsonData(JSON.stringify(json, null, 2));
        };
        reader.readAsBinaryString(file);
    }
};


  return (
    <div>
      <input
        type="file"
        accept=".xls,.xlsx"
        onChange={(e) => update(e)}
      />
      <button onClick={handleConvert}>Convert</button>
      <pre>{jsonData}</pre>
    </div>
  );
}

export default ExcelToJsonConverter;