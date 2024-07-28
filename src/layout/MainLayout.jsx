// rrd
import { Outlet } from 'react-router-dom'

// components
import { MegaMenuDefault } from '../components'

function MainLayout() {
    return (
        <>
            <MegaMenuDefault />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout