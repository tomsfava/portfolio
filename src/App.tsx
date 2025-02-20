import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaDark from './themes/dark'
import temaLight from './themes/light'
import { useState } from 'react'

function App() {
  const [temaDarkAtivo, setTemaDarkAtivo] = useState(false)

  function trocaTema() {
    setTemaDarkAtivo(!temaDarkAtivo)
  }

  return (
    <ThemeProvider theme={temaDarkAtivo ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
