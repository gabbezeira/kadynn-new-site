import React from 'react'
import { Footer, Menu } from '@components'
import { PageWrapper, Body } from '@globalStyles/styles'
import { AccountUpdate } from '@components/Painel/AccountUpdate'

export function AccountUpdatePage() {
  return (
    <PageWrapper>
      <Menu />
      <Body>
        <AccountUpdate />
      </Body>
      <Footer />
    </PageWrapper>
  )
}
