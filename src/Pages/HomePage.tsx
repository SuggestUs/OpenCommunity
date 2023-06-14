import { Link } from 'react-router-dom'
import Banner from '../component/Banner'

export default function HomePage() {
  return (
    <section className='bg-white'>
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fff] to-primary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='mx-auto max-w-3xl py-32 sm:py-48 lg:py-56'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
            <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
              A smarter way to stay update with communities{' '}
              <Link to='/about' className='font-semibold text-indigo-600'>
                <span className='absolute inset-0' aria-hidden='true' />
                Read more <span aria-hidden='true'>&rarr;</span>
              </Link>
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Empowering{' '}
              <span className='bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>
                developers
              </span>{' '}
              with community
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Attend events, share your knowledge, and build your career.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Link
                to='/authentication'
                className='rounded-md px-3.5 py-2.5 text-sm font-semibold text-black border hover:bg-slate-50'
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Banner />
    </section>
  )
}
