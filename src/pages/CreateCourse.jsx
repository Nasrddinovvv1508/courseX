import React, { useEffect, useState } from 'react';
import { FormInput, TextareaComponent, SelectComponent, FileUpload } from '../components';
import { Form, Navigate, useActionData } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { useSelector } from 'react-redux';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';
import toast from 'react-hot-toast';

export let action = async ({ request }) => {
    let formData = await request.formData();
    let courseName = formData.get("courseName");
    let numberOfModules = formData.get("numberOfModules");
    let price = formData.get("price");
    let shortDescription = formData.get("shortDescription");
    let category = formData.get("category");
    let image = formData.get("image");
    let mentors = formData.get("mentors");

    return { courseName, image, category, numberOfModules, price, shortDescription, mentors };
}

function CreateCourse() {
    const [redirect, setRedirect] = useState(false);
    const userData = useActionData();
    const { user } = useSelector((state) => state.user);

    let [errors, setErrors] = useState({
        courseName: "",
        numberOfModules: "",
        price: "",
        shortDescription: "",
        category: "",
        image: "",
        mentors: "",
    });

    useEffect(() => {
        if (userData) {
            if (userData.courseName.trim() && userData.numberOfModules.trim() && userData.price.trim() && userData.shortDescription.trim() && userData.category.trim() && userData.image.trim() && userData.mentors.trim()) {
                let newDoc = { ...userData, uid: user.uid, createdAt: serverTimestamp(), isCompetition: false }
                addDoc(collection(db, "courses"), newDoc).then(() => {
                    toast.success("Course added successfully");
                    setRedirect(true);
                }).catch((error) => {
                    toast.error("Error adding course");
                    console.error(error);
                });
            } else {
                toast.error("Fields are required")
            }

            if (!userData.courseName.trim()) {
                setErrors(prev => ({ ...prev, courseName: "error" }));
            }

            if (!userData.numberOfModules.trim()) {
                setErrors(prev => ({ ...prev, numberOfModules: "error" }));
            }

            if (!userData.price.trim()) {
                setErrors(prev => ({ ...prev, price: "error" }));
            }

            if (!userData.shortDescription.trim()) {
                setErrors(prev => ({ ...prev, shortDescription: "error" }));
            }

            if (!userData.category.trim()) {
                setErrors(prev => ({ ...prev, category: "error" }));
            }

            if (!userData.image.trim()) {
                setErrors(prev => ({ ...prev, image: "error" }));
            }

            if (!userData.mentors.trim()) {
                setErrors(prev => ({ ...prev, mentors: "error" }));
            }


        }
    }, [userData, user]);

    if (redirect) {
        return <Navigate to="/all-course" />;
    }

    return (
        <div>
            <div className='main-container mt-[50px]'>
                <div className='w-full grid grid-cols-2 items-center gap-[30px]'>
                    <Form
                        method='post'
                        className='rounded-xl p-[30px] border-1 flex flex-col gap-7'
                        style={{
                            boxShadow: `0px 16px 30px -10px #4660BB33`
                        }}
                    >
                        <h1 className='text-center font-semibold'>Create Course</h1>
                        <FormInput
                            type={`text`}
                            label={`Course Name`}
                            name={`courseName`}
                            status={errors.courseName}
                        />
                        <div className='grid grid-cols-2 gap-3'>
                            <FormInput
                                className='no-spinner'
                                label={`Number of Modules`}
                                type={`number`}
                                name={`numberOfModules`}
                                status={errors.numberOfModules}
                            />

                            <FormInput
                                className='no-spinner'
                                label={`Price`}
                                type={`number`}
                                name={`price`}
                                status={errors.price}
                            />
                        </div>

                        <div className="w-full">
                            <FormInput
                                label={`Category`} name={`category`} status={errors.category} />
                        </div>

                        <div className="w-full">
                            <FormInput label={`Mentors`} name={`mentors`} status={errors.mentors} />
                        </div>

                        <TextareaComponent
                            name={`shortDescription`}
                            label={`Short Description`} status={errors.shortDescription} />

                        <div className='w-full'>
                            <FormInput status={errors.image} className='no-spinner' type={`url`} label={`Image`} name={`image`} />
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <Button type='submit' color='blue'>Save</Button>
                            <Button type='reset' color='amber'>Reset</Button> {/* Reset tugmasi */}
                        </div>
                    </Form>

                    {/* <div className='flex flex-col justify-center items-center'>
                        <FileUpload />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default CreateCourse;