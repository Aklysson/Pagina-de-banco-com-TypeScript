import logo from '../../Assets/Logo.svg'

import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logo} alt="dt money" />
                <button type="button">
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}