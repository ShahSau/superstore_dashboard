import { useEffect, useState } from "react";

const EditableCell = ({ getValue, row, column, table }: { getValue: () => any; row: any; column: any; table: any }) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);

  // When the input is blurred, we'll call our table meta's updateData function
  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

    return (
        <input
        value={value}
        // onChange={(e) => setValue(e.target.value)}
        readOnly
        onBlur={onBlur}
        className="bg-gray-50 border mb-2 border-gray-300 block text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 flex-nowrap text-ellipsis"
        />
    );
}

// dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-50 border border-gray-300

export default EditableCell;