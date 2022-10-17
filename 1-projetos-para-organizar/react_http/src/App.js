import './App.css';

import { useState, useEffect } from "react"
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {
    const [products, setProducts] = useState([])

    // AULA 04 - CUSTOM HOOK
    const { data: items, httpConfig } = useFetch(url)

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    // AULA 01 - RESGATANDO DADOS

    // useEffect(() => {
    //     async function fecthData() {
    //         const res = await fetch(url) // fazer a requisição
    //         const data = await res.json() // pegar os dados
    //         setProducts(data) // setar os produtos
    //     }
    //     fecthData()
    // }, [])



    // AULA 02 - ADIÇÃO PRODUTOS

    const handleSubmit = async (e) => {
        e.preventDefault()
        // criação do objeto para ser enviado
        const product = {
            name,
            price,
        }
        console.log(product)
        // requisição para POST
        const res = await fetch(url, {
            method: "POST",
            // cabeçalho para entender o que esta sendo enviado
            headers: {
                "Content-Type": "application/json"
            },
            // corpo do envio
            body: JSON.stringify(product),
        })

        // AULA 03 - CARREGAMENTO DINÂMICO

        const newProduct = await res.json()
        setProducts((prevProducts) => [...prevProducts, newProduct])

        setName("")
        setPrice("")
    }

    console.log(products)

    return (
        <div className="App">
            <h1>Lista de produtos</h1>
            <ul>
                {items && items.map((product) => (
                    <li key={product.id}>{product.name} - R$: {product.price}</li>
                ))}
            </ul>
            <div className="addProduct">
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:
                        <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label>
                        Preço:
                        <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
                    </label>
                    <input type="submit" value="Criar"/>
                </form>
            </div>
        </div>
    );
}

export default App;
