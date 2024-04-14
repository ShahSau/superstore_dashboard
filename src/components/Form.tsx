export default function Form({
    addEvent,
}: {
    addEvent: (data: any) => void;
}) {

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const form = event.currentTarget
      const formData = new FormData(form)
      const data = Object.fromEntries(formData.entries())
      addEvent(data)
      form.reset()

    }
    return (
      <form onSubmit={submitHandler}>
        <div className="">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2 m-24">
              <div className="sm:col-span-3">
                <label htmlFor="order" className="block text-sm font-medium leading-6 text-gray-900">
                  Order ID
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="order"
                    id="order"
                    className="required block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Product name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="sales" className="block text-sm font-medium leading-6 text-gray-900">
                  Sales
                </label>
                <div className="mt-2">
                  <input
                    id="sales"
                    name="sales"
                    type="number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-2">
                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                  Region
                </label>
                <div className="mt-2">
                  <select
                    id="region"
                    name="region"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>South</option>
                    <option>West</option>
                    <option>Central</option>
                    <option>East</option>
                  </select>
                </div>
              </div>
  
              <div className="sm:col-span-2">
                <label htmlFor="profit" className="block text-sm font-medium leading-6 text-gray-900">
                    Profit
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="profit"
                    id="profit"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
  
        <div className="mt-2 flex items-center justify-center gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    )
  }