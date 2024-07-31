// rrd
import { Outlet } from 'react-router-dom'

// components
import { Footer, MegaMenuDefault, Sidebar } from '../components'

function MainLayout() {
    return (
        <>
            <MegaMenuDefault />
            <div className='px-16 py-4 border-2 flex items-center justify-between '>
                <Sidebar />
            </div>
            <main className='mb-[100px]'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout