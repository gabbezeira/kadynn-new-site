import React from 'react'
import { PageWrapper, Body } from '@globalStyles/styles'
import { Error, Footer, Menu } from '@components'

export function ErrorPage() {
  return (
    <PageWrapper>
      <Menu />
      <Body style={{ marginTop: '5rem' }}>
        <Error errorText="ERROR 404 - Página não encontrada" />
      </Body>
      <Footer />
    </PageWrapper>
  )
}
