import { Container } from './styles'

import { Accounts } from './AccountPainel'
import { PageTitle } from '../PageTitle'

export function Painel() {
  return (
    <Container>
      <PageTitle title="Gerenciar contas" />
      <div className="content">
        <Accounts />
      </div>
    </Container>
  )
}
