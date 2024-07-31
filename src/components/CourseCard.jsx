import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

export default function CardDefault({ course }) {
    console.log(course);

    return (
        <Card className="mt-6 w-96 hover:shadow-lg hover:shadow-[#f89f27]">
            <CardHeader color="blue-gray" className="relative h-56 overflow-hidden">
                <div className="relative">
                    <img
                        className="w-full h-full object-cover"
                        src={course.image ? course.image : "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"}
                        alt="card-image"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <p className="text-white text-xl font-semibold transform translate-y-1/2">
                            ${course.price}
                        </p>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="text-center mt-2">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {course.title}
                </Typography>
                <Typography className="mt-4">
                    {course.category}
                </Typography>
            </CardBody>
            <CardFooter className="pt-1 px-[40px]">
                <div className="border-t-2 grid grid-cols-3 pt-2">
                    <div className="flex flex-col gap-3 items-center py-3">
                        <img className="w-[30px] text-center" src="../assets/video.png" alt="video" />
                        <p className="text-sm">
                            0 videos
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 items-center py-3">
                        <img className="w-[30px] text-center" src="../assets/course-module.png" alt="course-module" />
                        <p className="text-sm w-[85px] max-w-[85px] overflow-hidden text-ellipsis whitespace-nowrap">
                            {course.numberOfModules} modules
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 items-center py-3">
                        <img className="w-[30px] text-center" src="../assets/students.png" alt="students" />
                        <p className="text-sm w-[85px] max-w-[85px] overflow-hidden text-ellipsis whitespace-nowrap">
                            300 students
                        </p>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}