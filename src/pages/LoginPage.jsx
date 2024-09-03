import React from 'react'
import { Login, Footer, Menu } from '@components'
import { PageWrapper, Body } from '@globalStyles/styles'

export function LoginPage() {
  return (
    <PageWrapper>
      <Menu />
      <Body>
        <Login />
      </Body>
      <Footer />
    </PageWrapper>
  )
}
