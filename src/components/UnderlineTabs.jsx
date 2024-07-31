import React, { useEffect, useState } from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import RowCourseCard from "./RowCourseCard";
import { useSelector } from "react-redux";
import { collection, query, where, getDocs, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function useCollection({ collectionName, condition, order }) {
    let [data, setData] = useState([]);

    useEffect(() => {
        const q = query(collection(db, collectionName), where(...condition), orderBy(...order));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push({ id: doc.id, ...doc.data() });
            });
            setData(items);
        });

        return () => unsubscribe();
    }, [collectionName, condition, order]);

    return { data };
}

export default function UnderlineTabs() {
    const [activeTab, setActiveTab] = useState("Frontend");
    const { user } = useSelector((state) => state.user);
    const { data: courses } = useCollection({
        collectionName: "courses",
        condition: ["uid", "==", user.uid],
        order: ["createdAt", "desc"]
    });

    const categories = ["Frontend", "Backend", "Design", "AI & Data Science", "Introducing", "Kotlin"];

    const filteredCourses = (category) => {
        return courses.filter(course => course.category === category);
    };

    return (
        <Tabs value={activeTab} className="">
            <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 mb-3"
                indicatorProps={{
                    className:
                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}
            >
                {categories.map((category) => (
                    <Tab
                        key={category}
                        value={category}
                        onClick={() => setActiveTab(category)}
                        className={activeTab === category ? "text-gray-900" : ""}
                    >
                        {category}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {categories.map((category) => (
                    <TabPanel key={category} value={category}>
                        <div className='main-container gap-[24px] mb-[100px] grid grid-cols-2'>
                            {filteredCourses(category).map((course) => (
                                <RowCourseCard key={course.id} course={course} />
                            ))}
                            {filteredCourses(category).length === 0 && <p>No courses available.</p>}
                        </div>
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}