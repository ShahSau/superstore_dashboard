import { cn } from "../libs/utils";
import { 
    LayoutDashboard, Table,
    ScatterChart,
    LineChart,
    BarChart,
    Map,
    User,
    BookUserIcon,
    LucideSquareGanttChart,
    UserSearch,
    Menu,
    X
} from "lucide-react";
import React,{ useState } from "react";

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
          label: 'Order Details',
          icon: Table,
          href: '/table',
          color: "text-violet-500",
        },
        {
            label: 'Order Analysis',
            icon: BookUserIcon,
            color: "text-red-700",
            href: '/orderanalysis',
        },
        {
          label: 'Elements',
          icon: ScatterChart,
          color: "text-emerald-300", 
          href: '/graph',
        },
        {
            label: 'Line & Pie Chart',
            icon: LineChart,
            color: "text-pink-700",
            href: '/line-chart',
        },
        {
            label: 'Map',
            icon: Map,
            color: "text-yellow-700",
            href: '/map',
        },
        {
            label: 'Bar Chart',
            icon: BarChart,
            color: "text-orange-700",
            href: '/bar-chart',
        },
        {
            label: 'Bubble Chart',
            icon: LucideSquareGanttChart,
            color: "text-blue-400",
            href: '/bubble-chart',
        },
        {
            label: 'Customer Data',
            icon: User,
            color: "text-green-700",
            href: '/user',
        },
        {
            label: 'Customer Analysis',
            icon: UserSearch,
            color: "text-amber-400",
            href: '/useranalysis',
        }

    ]
    const [isOpen, setIsOpen] = useState(false);
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
        <div className="md:hidden block">
            <Menu className={cn("h-6 w-6 m-6", isOpen? "hidden": "block")} onClick={()=>setIsOpen(true)}/>
        </div>
        <div className={cn("h-full w-72 fixed bg-gray-900 z-50", isOpen ? "left-0" : "-left-72")}>
            <div className="flex items-center pl-3 mb-14">
                <h1 className={"text-lg font-bold text-white mt-6"}>SuperStore</h1>
                <X className={cn("h-6 w-6 m-6 bg-white relative top-4 left-24", isOpen? "block": "hidden")} onClick={()=>setIsOpen(false)}/>
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
        <main className="h-full md:ml-72 overflow-x-scroll">
            {children}
        </main>
    </div>
    )
  }

export default DashboardLayout;