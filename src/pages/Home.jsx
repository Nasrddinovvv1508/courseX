import { Button } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CourseHeader, EmailComponent, RowCourseCard } from '../components'

function Home() {

  return (
    <div>
      <section>
        <div className='main-container grid grid-cols-2 items-center px-16 gap-5'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-[30px] font-bold leading-[30px]'>
              Unlock Your Potential: Enroll in Our Online Learning Programs
            </h1>
            <p className='text-[16px] font-medium'>
              Our online learning programs are crafted to empower you with the knowledge and skills necessary to excel in your chosen field. With interactive lessons, hands-on projects, and personalized support, you'll be well-equipped to tackle any challenge. Join our community of learners and start achieving your dreams today.
            </p>
            <div>
              <Link to="/all-course">
                <Button color="amber">Enroll Now</Button>
              </Link>
            </div>
          </div>
          <img className='hidden lg:block select-none' src="../assets/hero-image.png" alt="hero" />
          <div>

          </div>
        </div>
      </section>

      <section className='my-[150px]'>
        <h1 className='text-center text-5xl font-bold mb-[30px]'>Real-World Applications</h1>
        <div className='main-container grid grid-cols-2 rounded-3xl p-[30px] bg-hero-pattern h-[500px] bg-cover bg-no-repeat'>
          <div></div>
          <div className='text-white text-center mt-[30px]'>
            <h1 className='text-4xl font-bold mb-[20px]'>
              Apply What You Learn in the Real World
            </h1>
            <p className='overflow-hidden'>
              Our courses are designed with real-world applications in mind. We focus on practical skills and hands-on projects that you can immediately apply in your job or personal projects. Learn by doing, and see the impact of your new skills right away.
            </p>

            <h2 className='text-2xl font-bold mt-[20px] text-left'>
              Highlights:
            </h2>
            <div className='pt-[20px] flex items-center gap-[40px] overflow-auto select-none'>
              <EmailComponent
                title="Case Studies:"
                description={"Study real-world scenarios and solve problems faced by professionals in the field"}
                trainingImg='../assets/case-studies.png'
              />
              <EmailComponent
                title={`Hands-On Projects:`}
                description={`Complete projects that mimic real-world tasks and challenges.`}
                trainingImg={`../assets/training.svg`}
              />
              <EmailComponent
                title={`Industry Tools:`}
                description={`Gain proficiency in the tools and software used by industry experts.`}
                trainingImg={`../assets/industry.png`}
              />
              <EmailComponent
                title="Portfolio Development:"
                description={`Build a portfolio of work to showcase your skills to potential employers.`}
                trainingImg={`../assets/portfolio.jpg`}
              />
              <EmailComponent
                title='Career Services:'
                description={`Get support with job placements, resume building, and interview preparation.`}
                trainingImg={`../assets/career.png`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div>
          <h1 className='text-center text-5xl font-bold mb-[30px]'>Our Featured Courses</h1>
        </div>

        <div className='main-container'>
          <CourseHeader />z
        </div>

        <div className='w-full flex flex-col justify-center items-center'>
          <Link to="/all-course">
            <Button color="red">View All</Button>
          </Link>
        </div>
      </section> */}
    </div>
  )
}

export default Home