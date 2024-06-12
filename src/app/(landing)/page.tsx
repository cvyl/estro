import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"
import '@/app/globals.css'
import { SignedOut, SignedIn, UserButton } from '@clerk/nextjs';

export default function Component() {
  /**
   * Implement clerk login modal on press off account icon
   */
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm z-50 px-4 md:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <div className="h-6 w-6">
              <Skeleton className="w-full h-6 rounded-xl" />
            </div>
          <span className="font-semibold text-lg">Estro</span>
        </Link>
        <SignedOut>
        <Link href="/sign-in" className="rounded-full bg-background p-1 hover:bg-gray-800 transition-colors" prefetch={false}>
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
              fill="darkgray"
            />
          </svg>
        </Link>
        </SignedOut>
        <SignedIn>
          <Link href="/app" className="rounded-full bg-background p-1 hover:bg-gray-800 transition-colors" prefetch={false}>
            <div className="h-7 w-7">
              <UserButton />
            </div>
          </Link>
        </SignedIn>
      </header>
      <main className="flex-1 pt-14">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/hero-image.jpg')] bg-cover bg-center">
          <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Take Control of Your Estrogen Levels
              </h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Estro is the ultimate platform for tracking your mood, estrogen intake, and other related information.
                Get personalized insights and take control of your health.
              </p>
              <div className="flex gap-4">
              <SignedOut>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </SignedOut>
              <SignedIn>
              <Link
                  href="/app"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Go to Dashboard
                </Link>
              </SignedIn>
                <Link
                  href="/#learnmore"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-6 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                  
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <Skeleton className="w-full h-[400px] rounded-xl" />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden">
              <Skeleton className="w-full h-[400px] rounded-xl" />
            </div>
            <div id='learnmore' className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Personalized Insights</h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Estro provides personalized insights and recommendations to help you understand and manage your estrogen
                levels. Track your mood, symptoms, and more to get a complete picture of your health.
              </p>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Explore Features
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Take Control of Your Health
              </h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Estro empowers you to take control of your health by providing the tools and resources you need to
                understand and manage your estrogen levels. Start your journey to better health today.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <Skeleton className="w-full h-[400px] rounded-xl" />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Sales
            </Link>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}