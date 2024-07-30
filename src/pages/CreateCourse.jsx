import React from 'react';
import { FormInput, TextareaComponent, SelectComponent, FileUpload } from '../components';
import { Form } from 'react-router-dom';

function CreateCourse() {
    return (
        <div>
            <div className='main-container mt-[50px]'>
                <div className='w-full grid grid-cols-2 gap-[30px]'>
                    <Form
                        className='rounded-xl p-[30px] border-1 flex flex-col gap-7'
                        style={{
                            boxShadow: `0px 16px 30px -10px #4660BB33`
                        }}
                    >
                        <h1 className='text-center font-semibold'>Create Course</h1>
                        <FormInput
                            type={`text`}
                            label={`Course Name`}
                        />
                        <div className='grid grid-cols-2 gap-3'>
                            <FormInput
                                className='no-spinner'
                                label={`Number of Modules`}
                                type={`number`} />

                            <FormInput
                                className='no-spinner'
                                label={`Price`}
                                type={`number`} />
                        </div>

                        <SelectComponent label={"Select Mentors"} />

                        <TextareaComponent label={`Short Description`} />
                    </Form>

                    <div className='flex flex-col justify-center items-center'>
                        <FileUpload />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateCourse;