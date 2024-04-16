import { X } from 'lucide-react';


const Filters = ({ columnFilters, setColumnFilters, filter, data,filter_name }: { columnFilters: any[], setColumnFilters: any, filter: string, data:any[],filter_name:string }) => {

        const taskName = columnFilters.find((f) => f.id === filter)?.value || ""; //here

        const onFilterChange = (id: string, value: string) =>
            setColumnFilters((prev: any[]) =>
              prev
                 .filter((f) => f.id !== id)  //removing the previous filter
                .concat({
                  id,
                  value,
                })
            );
        

    return (
        <div>
            <div className="p-10 bg-gray-100 z-0">
                <div className="max-w-md mx-auto">
                    <label htmlFor="select" className="font-semibold block py-2">{filter_name}</label>

                    <div className="relative">
                        <div className=" bg-white flex border border-gray-200 rounded items-center">
                            <input
                                name="select" id="select" className="px-4 appearance-none outline-none text-gray-800 w-full z-0" 
                                value={taskName}
                                onChange={(e) => onFilterChange(filter, e.target.value)}
                                placeholder='Search ...'
                             />

                            <button 
                                className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600"
                                onClick={()=>onFilterChange(filter, "")}
                            >
                                <X />
                            </button>
                            <label htmlFor="show_more"
                                 className="w-1/12 flex items-end justify-end cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600"
                                 
                            >
                                <select id="countries" onChange={(e)=>onFilterChange(filter, e.target.value)} className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                    {
                                        data.map((d, index) => (
                                            <>
                                            <option key={index} value={d}>{d}</option>
                                            </>
                                        ))
                                    }
                                </select>
                            </label>
                        </div>

                        <input type="checkbox" name="show_more" id="show_more" className="hidden peer"  />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters