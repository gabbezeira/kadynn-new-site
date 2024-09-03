import React from 'react'
import { Footer, Menu, Accounts } from '@components'
import { PageWrapper, Body } from '@globalStyles/styles'

export function AccountsPage() {
  return (
    <PageWrapper>
      <Menu />
      <Body>
        <Accounts />
      </Body>
      <Footer />
    </PageWrapper>
  )
}
