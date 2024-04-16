import { cn } from "../libs/utils";
import { 
    LayoutDashboard, Table,
    ScatterChart
} from "lucide-react";

import { Link, useLocation } from 'react-router-dom';
const DashboardLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    const { pathname } = useLocation();
    const routes = [
        {
          label: 'Dashboard',
          icon: LayoutDashboard,
          href: '/',
          color: "text-sky-500"
        },
        {
          label: 'Table',
          icon: Table,
          href: '/table',
          color: "text-violet-500",
        },
        {
          label: 'Graphs',
          icon: ScatterChart,
          color: "text-emerald-700", 
          href: '/graph',
        },
    ]
    return(
    <div className="h-full relative ">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900 z-40">
        <div className="px-3 py-1 flex-1">
                <div className="flex items-center pl-3 mb-14">
                    <h1 className={"text-lg font-bold text-white mt-6"}>Dashboard</h1>
                </div>
                <div className="">
                    {routes.map((route) => (
                        <Link 
                            to={route.href} 
                            key={route.href}
                            className={cn(
                                "mb-2 text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        <main className="h-full md:ml-72">
            {children}
        </main>
    </div>
    )
  }

export default DashboardLayout;