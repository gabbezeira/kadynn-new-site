import { Body, PageWrapper } from './styles/styles'
import { Outlet } from 'react-router-dom'

import { Menu, Banner, Footer } from '@components'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  return (
    <>
      <PageWrapper>
        <Menu />
        <Banner />
        <Body>
          <Outlet />
        </Body>
        <Analytics />
        <Footer />
      </PageWrapper>
    </>
  )
}
