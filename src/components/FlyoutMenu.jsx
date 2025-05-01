// import { Fragment } from 'react'
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './AuthContext'
// import {
//   ArrowPathIcon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
// } from '@heroicons/react/24/outline'

export default function FlyoutMenu({menuName, menuObject}) {
  const [open, setOpen] = useState(false)
  const {currentUser} = useAuth()

  const toggleOpen =()=>{
    setOpen(
      (prev)=>({
        ...prev,
       open : !open,
       
      }),
      
    )
  }
   return (
    <Popover className="relative" >
      <>
      
      </>
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-700 focus: outline-none">
        <span onClick={()=>setOpen(true)} >{menuName}</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </PopoverButton>
      {open && <div>
        <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 hover:text-indigo-700">
            <div className="p-4">
              {menuObject.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  {currentUser && <>
                  
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div onClick={()=>setOpen(false)}>
                    <Link to={item.href} className="font-semibold text-gray-900" >
                      {item.name}
                      <span className="absolute inset-0"  />
                    </Link>
                    <p className="mt-1 text-gray-600" >{item.description}</p>
                  </div>
                  </>}
                </div>
              ))}
            </div>
            </div>
        </PopoverPanel>
      </Transition>
        </div>}
      
    </Popover>
  )
}
