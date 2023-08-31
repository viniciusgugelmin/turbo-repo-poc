import { useState } from 'react';

import { Header } from 'ui';
import loremIpsum from '../assets/loremIpsum.json'
import { Credentials } from "credentials"

import { S } from './styles';

function App() {
  const [validCredential, setValidCredential] = useState(false)

  return (
    <S.App>
      <Header title="Lorem Ipsum">
        <S.ValidateStatus>{validCredential ? "Credencial válida" : "Credencial inválida"}</S.ValidateStatus>
      </Header>


      <Credentials state={{ validCredential, setValidCredential }} />
      <div>
        {loremIpsum.phrases.map(({ phrase }, index) => <ul key={`lorem-ipsum-phrase-${index}`}>{phrase}</ul>)}
      </div>
    </S.App>
  );
}

export { App };
