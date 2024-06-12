import { Skeleton } from '@/components/ui/skeleton'

export default function PrimarySkeleton() {
    return (
        <div className='flex flex-col space-y-6'>
            <Skeleton className='h-[300px] w-full rounded-x1' />
            <div className='space-y-2'>
                <Skeleton className='h-4 w-1/4' />
                <Skeleton className='h-4 w-1/2' />
                <Skeleton className='h-4 w-1/3' />
            </div>
        </div>
    )
}