import { useState } from 'react';
import "./styles.css";
import { Credentials } from "credentials"

function App() {
  const [validCredential, setValidCredential] = useState(false)

  return (
    <>
      {validCredential ? "Credencial válida" : "Credencial inválida"}

      <Credentials state={{ validCredential, setValidCredential }} />
    </>
  );
}

export { App };
