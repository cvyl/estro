/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EqKoUsFTWtL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'


import Image from 'next/image'

export default function NavBar() {
return (
    <header className='flex h-16 w-full items-center justify-between px-4 md:px-6' style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))' }}>
        <div className='flex items-center gap-4'>
            <Link href='#' className='flex items-center gap-2' prefetch={false}>
                <Image
                    src='/logo.svg'
                    alt='Acme Inc'
                    width={32}
                    height={32}
                    className='rounded-md'
                />
                <span className='text-lg font-semibold'>Acme Inc</span>
            </Link>
        </div>
        <nav className='hidden gap-4 md:flex'>
            <Link
                href='#'
                className='inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50'
                prefetch={false}
            >
                Home
            </Link>
            <Link
                href='#'
                className='inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50'
                prefetch={false}
            >
                About
            </Link>
            <Link
                href='#'
                className='inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50'
                prefetch={false}
            >
                Services
            </Link>
            <Link
                href='#'
                className='inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50'
                prefetch={false}
            >
                Contact
            </Link>
        </nav>
        <Sheet>
            <SheetTrigger asChild>
                <Button variant='outline' size='icon' className='md:hidden'>
                    <Image
                            src='/menu.svg'
                            alt='Menu'
                            width={24}
                            height={24}
                    />
                    <span className='sr-only'>Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side='right'>
                <div className='grid gap-2 py-6'>
                    <Link href='#' className='flex w-full items-center py-2 text-lg font-semibold' prefetch={false}>
                        Home
                    </Link>
                    <Link href='#' className='flex w-full items-center py-2 text-lg font-semibold' prefetch={false}>
                        About
                    </Link>
                    <Link href='#' className='flex w-full items-center py-2 text-lg font-semibold' prefetch={false}>
                        Services
                    </Link>
                    <Link href='#' className='flex w-full items-center py-2 text-lg font-semibold' prefetch={false}>
                        Contact
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    </header>
)
}

function MenuIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  )
}


function MountainIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
    </svg>
  )
}