https://superstore-dashboard.vercel.app/


<p align="center">
    <h1 align="center">SUPERSTORE_DASHBOARD</h1>
</p>
<p align="center">
    <em>Transform Complexity into Clarity: Your Data, Simplified.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/ShahSau/superstore_dashboard?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/ShahSau/superstore_dashboard?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/ShahSau/superstore_dashboard?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/ShahSau/superstore_dashboard?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<br>
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="tailwind">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running superstore_dashboard](#-running-superstore_dashboard)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

##  Overview

This dashboard is a powerful, scalable solution for visualizing and managing large datasets, built using modern web technologies including React, TypeScript, Recharts, TailwindCSS, and Vite. It offers users an intuitive and performant interface to explore, analyze, and gain insights from extensive data collections.

---

##  Features

High Performance & Scalability: Leveraging Vite's blazing-fast build toolchain and React's efficient rendering, the dashboard handles large datasets with ease, ensuring quick loading times and a smooth user experience.

Interactive Data Visualization: Powered by Recharts, the dashboard provides a variety of customizable charts and graphs, allowing users to interact with their data dynamically. Whether it's line charts, bar graphs, pie charts, or more complex visualizations, the data is presented clearly and effectively.

Type Safety & Reliability: With TypeScript, the dashboard ensures type safety across the application, reducing the risk of bugs and making the codebase more maintainable. This enhances the reliability and predictability of the dashboard, especially when dealing with complex data structures.

Responsive & Modern UI: TailwindCSS ensures a clean, modern, and fully responsive user interface that adapts seamlessly to different screen sizes and devices. The dashboard’s design prioritizes usability and accessibility, offering a user-friendly experience for both novice and expert users.

Modular & Extensible Architecture: The dashboard's architecture is modular, allowing easy integration of new features and custom components. This extensibility makes it adaptable to various use cases, from business intelligence to data science and beyond.

---

##  Repository Structure

```sh
└── superstore_dashboard/
    ├── README.md
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── App.tsx
    │   ├── assets
    │   │   └── react.svg
    │   ├── components
    │   │   ├── Analysis.tsx
    │   │   ├── BarChart.tsx
    │   │   ├── BubbleChart.tsx
    │   │   ├── Card.tsx
    │   │   ├── CustomerByCat.tsx
    │   │   ├── CustomerByRegion.tsx
    │   │   ├── CustomerBySubCat.tsx
    │   │   ├── CustomerSegment.tsx
    │   │   ├── CustomerYearLine.tsx
    │   │   ├── DataTable.tsx
    │   │   ├── Layout.tsx
    │   │   ├── OrderByCat.tsx
    │   │   ├── OrderByRegion.tsx
    │   │   ├── OrderByState.tsx
    │   │   ├── OrderYearLine.tsx
    │   │   ├── OrdersByMonth.tsx
    │   │   ├── PieChart.tsx
    │   │   ├── ProductSoldByYear.tsx
    │   │   ├── ProfitByYear.tsx
    │   │   ├── Recharts.tsx
    │   │   ├── SalesByCat.tsx
    │   │   ├── SalesBySegment.tsx
    │   │   ├── SalesBySubCat.tsx
    │   │   ├── SalesByYear.tsx
    │   │   ├── Table
    │   │   │   ├── EditableCell.tsx
    │   │   │   ├── Filters.tsx
    │   │   │   ├── Form.tsx
    │   │   │   ├── GlobalFilter.tsx
    │   │   │   └── RegionFilter.tsx
    │   │   ├── Timeline.tsx
    │   │   ├── TopCustomerProfitTable.tsx
    │   │   ├── TopCustomerSalesTable.tsx
    │   │   ├── TopProductTable.tsx
    │   │   ├── UserTable
    │   │   │   ├── DebouncedInput.tsx
    │   │   │   └── TanStackTable.tsx
    │   │   ├── bubbleChart
    │   │   │   ├── AxisBottom.tsx
    │   │   │   ├── AxisLeft.tsx
    │   │   │   ├── Tooltip.tsx
    │   │   │   └── tooltip.module.css
    │   │   └── icons
    │   │       └── SortIcon.tsx
    │   ├── index.css
    │   ├── libs
    │   │   ├── columns.ts
    │   │   ├── data.ts
    │   │   ├── graphData.ts
    │   │   ├── returnData.ts
    │   │   └── utils.ts
    │   ├── main.tsx
    │   ├── pages
    │   │   ├── BarChart.tsx
    │   │   ├── BubleChart.tsx
    │   │   ├── DataConvert.tsx
    │   │   ├── Graphs.tsx
    │   │   ├── Home.tsx
    │   │   ├── LineChart.tsx
    │   │   ├── Map.tsx
    │   │   ├── OrderAnalysis.tsx
    │   │   ├── Table.tsx
    │   │   ├── User.tsx
    │   │   └── UserAnalysis.tsx
    │   └── vite-env.d.ts
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                                 | Summary                                        |
| ---                                                                                                  | ---                                            |
| [tsconfig.json](https://github.com/ShahSau/superstore_dashboard/blob/master/tsconfig.json)           | Typescript config file prompt `tsconfig.json`      |     
| [package.json](https://github.com/ShahSau/superstore_dashboard/blob/master/package.json)             | List of all packages for prompt `package.json`       |
</details>

<details closed><summary>src</summary>

| File                                                                                           | Summary                                       |
| ---                                                                                            | ---                                           |
| [App.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/App.tsx)             | Entry file of the app prompt `src/App.tsx`       |

</details>

<details closed><summary>src.pages</summary>

| File                                                                                                         | Summary                                                 |
| ---                                                                                                          | ---                                                     |
| [Map.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/pages/Map.tsx)                     | Map page prompt `src/pages/Map.tsx`           |
| [LineChart.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/pages/LineChart.tsx)         | Line Chart page for prompt `src/pages/LineChart.tsx`     |
| [Graphs.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/pages/Graphs.tsx)               | Grph page prompt `src/pages/Graphs.tsx`        |
| [User.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/pages/User.tsx)                   | User page for prompt `src/pages/User.tsx`          |
| [OrderAnalysis.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/pages/OrderAnalysis.tsx) | Order analysis page for prompt `src/pages/OrderAnalysis.tsx` |
| [UserAnalysis.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/pages/UserAnalysis.tsx)   | User Analysis page for prompt `src/pages/UserAnalysis.tsx`  |
| [Table.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/pages/Table.tsx)                 | Table page for prompt `src/pages/Table.tsx`         |
| [DataConvert.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/pages/DataConvert.tsx)     | Data Convert Page for prompt `src/pages/DataConvert.tsx`   |
| [BubleChart.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/pages/BubleChart.tsx)       | Bubble Chart page for prompt `src/pages/BubleChart.tsx`    |
| [BarChart.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/pages/BarChart.tsx)           | Bar Cahrt page for prompt `src/pages/BarChart.tsx`      |
| [Home.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/pages/Home.tsx)                   | Home Page for prompt `src/pages/Home.tsx`          |

</details>

<details closed><summary>src.components</summary>

| File                                                                                                                                | Summary                                                               |
| ---                                                                                                                                 | ---                                                                   |
| [Analysis.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/Analysis.tsx)                             | Analysis Componentfor prompt `src/components/Analysis.tsx`               |
| [CustomerByCat.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/CustomerByCat.tsx)                   | Customer By Category component for prompt `src/components/CustomerByCat.tsx`          |
| [TopProductTable.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/TopProductTable.tsx)               | Top Product table component for prompt `src/components/TopProductTable.tsx`        |
| [SalesByCat.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/SalesByCat.tsx)                         | Sales by category component for prompt `src/components/SalesByCat.tsx`             |
| [Card.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/Card.tsx)                                     | Card Component for prompt `src/components/Card.tsx`                   |
| [BubbleChart.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/BubbleChart.tsx)                       | Bubble Chart component for prompt `src/components/BubbleChart.tsx`            |
| [Timeline.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/Timeline.tsx)                             | Timeline component for prompt `src/components/Timeline.tsx`               |
| [PieChart.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/PieChart.tsx)                             | Pie Chart component for prompt `src/components/PieChart.tsx`               |
| [SalesBySegment.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/SalesBySegment.tsx)                 | Sales By Sagment Component for prompt `src/components/SalesBySegment.tsx`         |
| [DataTable.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/DataTable.tsx)                           | Data table Component for prompt `src/components/DataTable.tsx`              |
| [TopCustomerSalesTable.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/TopCustomerSalesTable.tsx)   |Top Customer Sales Component for prompt `src/components/TopCustomerSalesTable.tsx`  |
| [CustomerYearLine.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/CustomerYearLine.tsx)             | Customer year line Component for prompt `src/components/CustomerYearLine.tsx`       |
| [CustomerByRegion.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/CustomerByRegion.tsx)             | Customer by region Component for prompt `src/components/CustomerByRegion.tsx`       |
| [SalesBySubCat.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/SalesBySubCat.tsx)                   | Sales by subcategory Component for prompt `src/components/SalesBySubCat.tsx`          |
| [OrderByRegion.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/OrderByRegion.tsx)                   | Order by region Component for prompt `src/components/OrderByRegion.tsx`          |
| [OrderYearLine.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/OrderYearLine.tsx)                   | order year line Component for prompt `src/components/OrderYearLine.tsx`          |
| [ProductSoldByYear.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/ProductSoldByYear.tsx)           | Product sold by year Component for prompt `src/components/ProductSoldByYear.tsx`      |
| [CustomerBySubCat.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/CustomerBySubCat.tsx)             | Customer by sub category Component for prompt `src/components/CustomerBySubCat.tsx`       |
| [Layout.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/Layout.tsx)                                 | Layput  for prompt `src/components/Layout.tsx`                 |
| [ProfitByYear.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/ProfitByYear.tsx)                     | Profit by year Component for prompt `src/components/ProfitByYear.tsx`           |
| [OrderByState.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/OrderByState.tsx)                     | Order by state Component for prompt `src/components/OrderByState.tsx`           |
| [BarChart.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/BarChart.tsx)                             | Bar Chart Component for prompt `src/components/BarChart.tsx`               |
| [CustomerSegment.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/CustomerSegment.tsx)               | Customer segment Component for prompt `src/components/CustomerSegment.tsx`        |
| [OrderByCat.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/OrderByCat.tsx)                         | order by category Component for prompt `src/components/OrderByCat.tsx`             |
| [Recharts.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/Recharts.tsx)                             | Line & Pie chart Component for prompt `src/components/Recharts.tsx`               |
| [TopCustomerProfitTable.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/TopCustomerProfitTable.tsx) | Top customer profile table Component for prompt `src/components/TopCustomerProfitTable.tsx` |
| [SalesByYear.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/SalesByYear.tsx)                       | Sales by year Component for prompt `src/components/SalesByYear.tsx`            |
| [OrdersByMonth.tsx](https://github.com/ShahSau/superstore_dashboard/blob/master/src/components/OrdersByMonth.tsx)                   | Orders by month Component for prompt `src/components/OrdersByMonth.tsx`          |

</details>




<details closed><summary>src.libs</summary>

| File                                                                                                | Summary                                            |
| ---                                                                                                 | ---                                                |
| [utils.ts](https://github.com/ShahSau/superstore_dashboard/blob/master/src/libs/utils.ts)           | utils file for prompt `src/libs/utils.ts`      |
| [graphData.ts](https://github.com/ShahSau/superstore_dashboard/blob/master/src/libs/graphData.ts)   | initial graph data file for prompt `src/libs/graphData.ts`  |
| [returnData.ts](https://github.com/ShahSau/superstore_dashboard/blob/master/src/libs/returnData.ts) | return dataset for prompt `src/libs/returnData.ts` |
| [data.ts](https://github.com/ShahSau/superstore_dashboard/blob/master/src/libs/data.ts)             | Data set for prompt `src/libs/data.ts`       |
| [columns.ts](https://github.com/ShahSau/superstore_dashboard/blob/master/src/libs/columns.ts)       | list of column for prompt `src/libs/columns.ts`    |

</details>

---

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **TypeScript**: `version 5.2.2`

###  Installation

1. Clone the superstore_dashboard repository:

```sh
git clone https://github.com/ShahSau/superstore_dashboard
```

2. Change to the project directory:

```sh
cd superstore_dashboard
```

3. Install the dependencies:

```sh
npm install
```

###  Running superstore_dashboard

Use the following command to run superstore_dashboard:

```sh
npm run build && node dist/main.js
```

---


##  License

This project is protected under the MIT License. For more details, refer to the [LICENSE](https://github.com/ShahSau/turbo?tab=MIT-1-ov-file#readme) file.

---

