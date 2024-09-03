import React from 'react'
import { Footer, Menu } from '@components'
import { PageWrapper, Body } from '@globalStyles/styles'
import { AccountRegister } from '@components/Painel/AccountRegister'

export function AccountRegisterPage() {
  return (
    <PageWrapper>
      <Menu />
      <Body>
        <AccountRegister />
      </Body>
      <Footer />
    </PageWrapper>
  )
}
