import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { IconButton } from '@material-tailwind/react'
import React from 'react'

function OpenSidebar({ openDrawer, isDrawerOpen }) {
    return (
        <IconButton variant="text" size="lg" onClick={openDrawer}>
            {isDrawerOpen ? (
                <XMarkIcon className="h-8 w-8 stroke-2" />
            ) : (
                <Bars3Icon className="h-8 w-8 stroke-2" />
            )}
        </IconButton>
    )
}

export default OpenSidebar