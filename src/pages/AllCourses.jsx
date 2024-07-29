import { Link } from 'react-router-dom'
import { CourseCard } from '../components'

function AllCourses() {
  return (
    <div>
      <section className='main-container flex flex-wrap gap-[24px] mt-[70px]'>
        <Link>
          <CourseCard />
        </Link>

        <Link>
          <CourseCard />
        </Link>

        <Link>
          <CourseCard />
        </Link>
      </section>
    </div>
  )
}

export default AllCourses