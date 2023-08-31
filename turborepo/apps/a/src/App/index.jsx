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
        <Button link="http://localhost:3001">Tabela</Button>
        <Button link="http://localhost:6006/">Storybook</Button>
      </Header>


      <Credentials state={{ validCredential, setValidCredential }} />
      <div>
        {loremIpsum.phrases.map(({ phrase }, index) => <ul key={`lorem-ipsum-phrase-${index}`}>{phrase}</ul>)}
      </div>
    </S.App>
  );
}

export { App };
