import { Plans } from '@/components/Main/Plans/Plans'
import Steaps from '@/components/Main/Plans/Steaps/Steaps'
import Summary from '@/components/Main/Summary/Summary'
import Navbar from '@/components/Navbar/Navbar'
import NotFoundView from '@/components/NotFoundView/NotFoundView'

import React from 'react'

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
    <Navbar />
    
    <main>
      {/* {params.slug && <Steaps page={params.slug} />} */}
      {params.slug === "plans" ? <Plans /> 
      : 
       params.slug === "summary" ? <Summary />
      :
     <NotFoundView />  
  }
    </main>
    </>
  )
}

export default page