import { useContext, useState } from 'react';
import { Button, Header } from 'ui';
import loremIpsum from '../assets/loremIpsum.json'
import { Credentials } from "credentials"
import { S } from './styles';
import { GlobalContext } from 'context';

function App() {
  const [validCredential, setValidCredential] = useState(false)
  const { showMF } = useContext(GlobalContext)

  return (
    <S.App showMF={showMF}>
      <Header title="Lorem Ipsum">
        <S.ValidateStatus>{validCredential ? "Credencial válida" : "Credencial inválida"}</S.ValidateStatus>
        <Button link="http://localhost:3000">Home</Button>
        <Button link="http://localhost:6006/">Storybook</Button>
      </Header>

      <table style={{ tableLayout: "fixed" }}>
        <colgroup>
          <col style={{ width: "50%" }} />
          <col style={{ width: "50%" }} />
        </colgroup>
        <tr>
          <th>Frase</th>
          <th>Status</th>
        </tr>
        {loremIpsum.phrases.map(({ phrase, status }, index) => (
          <tr key={`lorem-ipsum-phrase-${index}`}>
            <td>{phrase}</td>
            <td style={{ textAlign: "center" }}>{status}</td>
          </tr>
        ))}
      </table>
      <Credentials state={{ validCredential, setValidCredential }} />
    </S.App>
  );
}

export { App };
