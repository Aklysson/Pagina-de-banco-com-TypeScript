import { Container } from "./style";
import { useEffect } from "react";



export function TransactionTable() {
    useEffect(() =>{
        fetch("http://localhost:3000/api/transactions")
        .then(response => response.json())
        .then(data => console.log(data))
    },[]);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td> Desenvolvimento de website</td>
                        <td className="deposit">  R$12.000 </td>
                        <td> Desenvolvimento</td>
                        <td> 24/02/2022</td>
                    </tr>
                    <tr>
                        <td> Aluguel</td>
                        <td className="withdraw"> - R$500 </td>
                        <td> Casa</td>
                        <td> 24/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}