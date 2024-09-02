import { Body, PageWrapper } from './styles/styles'
import { Outlet } from 'react-router-dom'

import { Menu, Banner, Footer } from '@components'

export default function App() {
  return (
    <>
      <PageWrapper>
        <Menu />
        <Banner />
        <Body>
          <Outlet />
        </Body>
        <Footer />
      </PageWrapper>
    </>
  )
}
