
import logo from '../../Assets/Logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
    aka: () => void
}

export function Header({aka}: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logo} alt="dt money" />
                <button type="button" onClick={aka}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}