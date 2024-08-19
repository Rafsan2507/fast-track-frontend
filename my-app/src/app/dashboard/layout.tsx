import TopNavbar from '@/components/Shared/TopNavbar'
import React from 'react'

type Props = {}

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TopNavbar />
      <div>{children}</div>
    </div>
  )
}

export default layout