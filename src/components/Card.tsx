import {  MoveUpRight, ScatterChart, Table } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const projects = [
    { name: 'Table', initials: Table, href: '/table',desc:"DataTable page",  bgColor: 'bg-violet-500' },
    { name: 'Graphs', initials: ScatterChart, href: '/graph',desc:"Graph page", bgColor: 'bg-emerald-700' },
  ]
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
const Card = () => {
    const navigate = useNavigate()
  return (
    <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
            <div
                  key={project.name}
                  className={classNames(
                    project.bgColor,
                    'group relative rounded-lg shadow-lg cursor-pointer overflow-hidden border-2 border-transparent hover:border-gray-200 transition duration-300 ease-in-out hover:shadow-xl'
                  )}
                  onClick={() => navigate(project.href)}
                >
                <div
                  key={project.name}
                  className="overflow-hidden rounded-lg bg-gray-50 px-4 pb-2 pt-2 shadow sm:px-6 sm:pt-6 hover:bg-gray-200 hover:shadow-lg transition duration-300 ease-in-out"
                >
                  <dt>

                    <p className=" truncate text-sm font-medium text-gray-500">{project.name}</p>
                  </dt>
                  <dd className="flex items-baseline pb-6 sm:pb-7">
                    <p className="text-2xl font-semibold text-gray-900">{project.desc}</p>
                    <MoveUpRight className="h-6 w-6 ml-4 text-black" aria-hidden="true" />
                  </dd>
                 
                </div>
            </div>
        ))}
    </div>
  )
}

export default Card