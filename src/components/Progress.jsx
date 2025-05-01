import { CheckIcon } from '@heroicons/react/20/solid'
import { useContext } from 'react'
import stepContext from './stepContext'

// const steps = [
//   { name: 'Personal', href: '#', status: 'complete' },
//   { name: 'NextOfkin', href: '#', status: 'complete' },
//   { name: 'Guarantor', href: '#', status: 'current' },
//   { name: 'Financial', href: '#', status: 'upcoming' },
//   { name: 'Profile', href: '#', status: 'upcoming' },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Progress({steps}) {
const{gotoStep} = useContext(stepContext)

  return (
    <nav aria-label="Progress">
      <ol className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative')}>
            {step.status === 'complete' ? (
              <>
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-indigo-600" />
                </div>
                <span
                  onClick={()=>gotoStep(step.num)}
                  className="relative flex size-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900"
                >
                  <CheckIcon aria-hidden="true" className="size-5 text-white" />
                  <span className="sr-only">{step.name}</span>
                </span>
              </>
            ) : step.status === 'current' ? (
              <>
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-gray-500" />
                </div>
                <span
                  onClick={()=>gotoStep(step.num)}
                  aria-current="step"
                  className="relative flex size-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white"
                >
                  <span aria-hidden="true" className="size-2.5 rounded-full bg-indigo-600" />
                  <span className="sr-only">{step.name}</span>
                </span>
              </>
            ) : (
              <>
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-gray-500" />
                </div>
                <span
                  onClick={()=>gotoStep(step.num)}
                  className="group relative flex size-8 items-center justify-center rounded-full border-2 border-gray-500 bg-white hover:border-gray-400"
                >
                  <span aria-hidden="true" className="size-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                  <span className="sr-only">{step.name}</span>
                </span>
              </>
               
            )}
           
          </li>
        ))}
      </ol>
    </nav>
  )
}
