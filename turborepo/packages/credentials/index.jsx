import { Button, Input } from "ui"
import { S } from "./styles"
import { useState } from 'react'

export const Credentials = ({ state }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState()

    const handleClear = () => {
        setUsername("")
        setPassword("")
    }

    const handleTest = () => {
        if (username === "123" && password === "123") {
            state.setValidCredential(true)
            setError(null)
        } else {
            setError("Usuário ou senha inválidos")
        }

        handleClear()
    }

    return (
        <S.Credentials>
            Insira as credenciais:
            <div>
                <Input label="username" props={{ value: username, onChange: ({ target }) => setUsername(target.value) }} />
                <Input label="senha" props={{ value: password, onChange: ({ target }) => setPassword(target.value) }} />
                <Button children="Testar" onClick={handleTest} />
            </div>
            {error && <span children={error} className="error-warning" />}
        </S.Credentials>
    )
}
