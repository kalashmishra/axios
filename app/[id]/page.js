import React, { Suspense } from 'react'
import { getSingle, wait } from '@/utils/getSingle'
const page = async ({params}) => {
    const post = await getSingle(params.id)
  return (
    <div><h1>Single posts</h1>
    <h3>{JSON.stringify(post)}</h3>
    <Suspense fallback={<h3>Loading.......</h3>}>
        {wait(2000)}
    <h1>This data will load later...</h1>

    </Suspense>

    </div>
  )
}

export default page