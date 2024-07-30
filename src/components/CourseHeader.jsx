import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import RowCourseCard from "./RowCourseCard";

export default function UnderlineTabs() {
    const [activeTab, setActiveTab] = React.useState("html");
    const data = [
        {
            label: "Frontend",
            value: "html",
            desc: (
                <div className='main-container gap-[24px] mb-[100px] grid grid-cols-2'>
                    <RowCourseCard />
                    <RowCourseCard />
                </div>)
        },
        {
            label: "Backend",
            value: "react",
            desc: (
                <div className='main-container gap-[24px] mb-[100px] grid grid-cols-2'>
                    <RowCourseCard />
                    <RowCourseCard />
                    <RowCourseCard />
                </div>)
        },
        {
            label: "Design",
            value: "vue",
            desc: (
                <div className='main-container gap-[24px] mb-[100px] grid grid-cols-2'>
                    <RowCourseCard />
                </div>)
        },
        {
            label: "AI & Data science",
            value: "angular",
            desc: (
                <div className='main-container gap-[24px] mb-[100px] grid grid-cols-2'>
                    <RowCourseCard />
                    <RowCourseCard />
                </div>)
        },
        {
            label: "Introducing",
            value: "introducing",
            desc: (
                <div className='main-container gap-[24px] mb-[100px] grid grid-cols-2'>
                    Not yet..
                </div>)
        },
        {
            label: "Kotling",
            value: "kotling",
            desc: (
                <div className='main-container gap-[24px] mb-[100px] grid grid-cols-2'>
                    <RowCourseCard />
                    <RowCourseCard />
                    <RowCourseCard />
                    <RowCourseCard />
                </div>)
        },
    ];
    return (
        <Tabs value={activeTab} className="">
            <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 mb-3"
                indicatorProps={{
                    className:
                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}
            >
                {data.map(({ label, value }) => (
                    <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={activeTab === value ? "text-gray-900" : ""}
                    >
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}