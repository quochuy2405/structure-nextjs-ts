import * as React from 'react'
import Metadata from '../Metadata/Metadata'
import { Header } from '@/components/organisms'

interface MainLayoutProps {
  children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Metadata title="Learning Code" description="Learning Code - Chia sẽ kiến thức lập trình 😖" />
      {children}
    </>
  )
}

const SecondLayout = ({ children }) => (
  <MainLayout>
    <Header />
    {children}
  </MainLayout>
)

export default MainLayout
export { SecondLayout }
