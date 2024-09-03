import React from 'react'
import { Footer, Menu } from '@components'
import { PageWrapper, Body } from '@globalStyles/styles'
import { DetailsPage } from '@components/Accounts/Details'

export function DetailsPages() {
  return (
    <PageWrapper>
      <Menu />
      <Body>
        <DetailsPage />
      </Body>
      <Footer />
    </PageWrapper>
  )
}
