import { useContext, useState } from 'react';
import { Button, Header } from 'ui';
import loremIpsum from '../assets/loremIpsum.json'
import { S } from './styles';
import { GlobalContext } from 'context';
import {Link} from "app-links";

function App() {
  const { showMF } = useContext(GlobalContext)

  return (
    <S.App $showMF={showMF}>
      <Header title="Lorem Ipsum > Table">
        <Link app="a">Home</Link>
        <Link app="workshop">Storybook</Link>
      </Header>

      <div className="content">
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
      </div>
    </S.App>
  );
}

export { App };
