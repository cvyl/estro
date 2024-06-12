import React, { Suspense } from 'react'
import Loading from './loading'
import DosageComponent from '@/components/_app/dosagechart'

export default async function Page({
	searchParams
}: {
	searchParams: Record<string, string | string[] | undefined>
}) {
	return (
		<>
			<h1>Home</h1>
			<Suspense fallback={<Loading />}>
				<DosageComponent />
			</Suspense>
		</>
	)
}
