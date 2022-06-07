import { Container } from "./styles"
import entradas from "./../../Assets/income.svg"
import saidas from "./../../Assets/outcome.svg"
import total from "./../../Assets/total.svg"

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradas} alt='aa' />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={saidas} alt='aa' />
                </header>
                <strong> -R$ 500,00</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={total} alt='aa' />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    )
}