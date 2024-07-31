import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useCollection } from '../hooks/useCollection';
import { useSelector } from 'react-redux';
import { Button } from '@material-tailwind/react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import toast from 'react-hot-toast';

function SingleCourse() {
  let { id } = useParams();

  let [documentId, setDocumentId] = useState(id);
  const [redirect, setRedirect] = useState(false);

  let { user } = useSelector((state) => state.user);
  let { data } = useCollection({ collectionName: 'courses', docId: documentId });
  let { data: reviews } = useCollection({
    collectionName: 'courses',
    condition: ['uid', '==', user.uid],
    order: ['createdAt']
  });

  console.log(data);
  console.log(reviews);

  if (!data || data.length === 0) {
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <img src='../assets/loader.svg' alt='loader' />
      </div>
    );
  }

  const course = data[0];

  // functions
  let handleDelete = async () => {
    if (confirm(`Are you sure you want to delete ${course.courseName}?`)) {
      await deleteDoc(doc(db, 'courses', documentId)).then(() => {
        toast.success(`Course ${course.courseName} deleted successfully`);
        setRedirect(true);
      })
        .catch((error) => {
          toast.error(`Error deleting course ${course.courseName}`);
          console.error(error);
        });
    }
  }

  if (redirect) {
    return <Navigate to="/all-course" />;
  }

  return (
    <div>
      <div className='main-container shadow-lg flex justify-between'>
        <div className='h-[500px] w-[885px] overflow-auto py-[20px] text-center'>
          <img className='w-[885px] select-none' src={course.image} alt='course' />
          <h1 className='mt-[20px] text-4xl font-semibold'>{course.courseName}</h1>

          <p className='mt-[20px] text-lg'>{course.shortDescription}</p>

          <div className='w-full flex justify-center gap-[30px] mt-[40px]'>
            <div className='flex items-center gap-[10px]'>
              <img className='w-6' src='../assets/course-price.webp' alt='course price' />
              <p>{course.price}$</p>
            </div>

            <div className='flex items-center gap-[10px]'>
              <img className='w-6' src='../assets/course-module.png' alt='course module' />
              <p>{course.numberOfModules} modules</p>
            </div>

            <div className='flex items-center gap-[10px]'>
              <p>{course.category}</p>
            </div>
          </div>

          <div className='w-full flex justify-center'>
            <div className='w-[300px] flex flex-col items-center mt-[40px]'>
              <img className='w-[70px] rounded-full' src='../assets/mentor1.jpg' alt='mentor1' />
              <p className='mt-2'>
                <span className='text-sm font-bold'>Mentor:</span> {course.mentors}
              </p>
            </div>
          </div>

          <div className='w-full flex justify-end px-[60px]'>
            <Button onClick={handleDelete} color='red'>Delete this</Button>
          </div>
        </div>
        <div className='w-[300px] flex flex-col items-center my-[20px] h-[500px] overflow-auto'>
          <p className='text-yellow-900 font-semibold'>connection with other courses</p>
          {reviews.map((review) => (
            <Link
              key={review.id}
              onClick={() => setDocumentId(review.id)}
              className={`border w-full text-center hover:bg-base-200 py-3 ${documentId === review.id ? 'bg-yellow-300' : ''
                }`}
            >
              <h1>{review.courseName}</h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleCourse;