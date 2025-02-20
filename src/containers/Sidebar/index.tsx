import Avatar from '../../components/Avatar'
import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Tomás Fava</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        tomsfava
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor front-end
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
