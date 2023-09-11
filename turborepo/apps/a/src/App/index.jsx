import {useContext, useState} from 'react';

import {Button, Header} from 'ui';
import {Chart} from 'chart';
import loremIpsum from '../assets/loremIpsum.json'
import {Credentials} from "credentials"
import {Link} from "app-links";

import {S} from './styles';
import {GlobalContext} from 'context';

function App() {
    const {showMF} = useContext(GlobalContext)

    const [validCredential, setValidCredential] = useState(false)
    const [showChart, setShowChart] = useState(false)

    return (
        <S.App $showMF={showMF}>
            <Header title="Lorem Ipsum">
                <S.ValidateStatus
                    $valid={validCredential}>{validCredential ? "Credencial válida" : "Credencial inválida"}</S.ValidateStatus>
                <Link app="b">Tabela</Link>
                <Button onClick={() => setShowChart(!showChart)}>Estatísticas</Button>
                <Link app="workshop">Storybook</Link>
            </Header>

            <div className='content'>
                <div>
                    <Credentials state={{validCredential, setValidCredential}}/>
                    {loremIpsum.phrases.map(({phrase}, index) => <div className="item"
                                                                      key={`lorem-ipsum-phrase-${index}`}>{phrase}</div>)}
                </div>
                {showChart && <Chart/>}
            </div>
        </S.App>
    );
}

export {App};
