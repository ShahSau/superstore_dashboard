import { X } from 'lucide-react';

const RegionFilters = ({ columnFilters, setColumnFilters, innerData, outerData }: { columnFilters: any[], setColumnFilters: any, innerData:any[], outerData:any[] }) => {
const filter = "State";
        
    const taskName = columnFilters.find((f) => f.id === filter)?.value || ""; //here

        // need to remove the previous filter before adding the new one
        const removeFilter = () =>{
            const id = "State"
            setColumnFilters((prev: any[]) =>
              prev.filter((f) => f.id !== id)
            );
        }

        // need to remove the previous filter before adding the new one
        const removeFilterCity = () =>{
            const id = "City"
            setColumnFilters((prev: any[]) =>
              prev.filter((f) => f.id !== id)
            );
        }
            


        const onFilterChange = ( value: string) =>{
            removeFilter()
            removeFilterCity()
            const id = "State"
            setColumnFilters((prev: any[]) =>
              prev
                 .filter((f) => f.id !== id) 
                .concat({
                  id,
                  value,
                })
            );
        }

        const onFilterChangeCity = (value: string) =>{
            removeFilter()
            removeFilterCity()
            const id = "City"
            setColumnFilters((prev: any[]) =>
              prev
                 .filter((f) => f.id !== id) 
                .concat({
                  id,
                  value,
                })
            );
        }
        

    return (
        <div>
            <div className="p-10 bg-gray-100 z-0">
                <div className="max-w-md mx-auto">
                    <label htmlFor="select" className="font-semibold block py-2">Region</label>

                    <div className="relative">
                        <div className=" bg-white flex border border-gray-200 rounded items-center">
                            <input
                                name="select" id="select" className="px-4 appearance-none outline-none text-gray-800 w-full z-0"  
                                value={taskName}
                                onChange={(e) => onFilterChange(e.target.value)}
                                placeholder='Search ...'
                             />

                            <button 
                                className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600"
                                onClick={()=>removeFilter()}
                            >
                                <X />
                            </button>
                            <label htmlFor="show_more"
                                 className="w-1/12 flex items-end justify-end cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600"
                                 
                            >
                                <select id="countries" 
                                onChange={(e) => {
                                    if(!outerData.includes(e.target.value)){
                                        onFilterChangeCity(e.target.value)
                                    }else{
                                        onFilterChange(e.target.value)
                                    }
                                }}
                                
                                className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                >
                                    {
                                        outerData.map((d, index) => (
                                            <>
                                            <option key={index} value={d}>{d}</option>
                                            {
                                                innerData[d].map((inner:any, index:any) => (
                                                    <>
                                                    <option key={index} value={inner}>&ensp;&ensp;&ensp;&ensp;{inner}</option>
                                                    </>
                                                ))
                                            }
                                            
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

export default RegionFilters