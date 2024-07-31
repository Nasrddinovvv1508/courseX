import { Link } from 'react-router-dom'
import { CourseCard } from '../components'
import { useCollection } from '../hooks/useCollection';
import { useSelector } from 'react-redux';

function AllCourses() {
  let { user } = useSelector((state) => state.user)
  let { data: courses } = useCollection({ collectionName: "courses", condition: ["uid", "==", user.uid], order: [`createdAt`] })

  return (
    <div>
      <section className='main-container flex flex-wrap gap-[24px] my-[70px]'>
        {courses.length ? courses.reverse().map((course) => (
          <Link key={course.id} to={`/single-course/${course.id}`}>
            <CourseCard course={course} />
          </Link>
        ))
          :
          <h1 className="no-course">No Courses Yet...</h1>
        }
      </section>
    </div>
  )
}

export default AllCourses