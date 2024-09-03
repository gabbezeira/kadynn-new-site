import React from 'react'
import { Painel } from '@components'
import { PageWrapper, Body } from '@globalStyles/styles'
import { Footer, Menu } from '../components'

export function PainelPage() {
  return (
    <PageWrapper>
      <Menu />
      <Body>
        <Painel />
      </Body>
      <Footer />
    </PageWrapper>
  )
}
