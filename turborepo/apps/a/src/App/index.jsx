import { useContext, useState, Suspense, lazy, useRef, useEffect } from "react";

import { Button, Header } from "ui";
import { Credentials } from "credentials";
import { Link } from "app-links";
import "vue-ui2";

import loremIpsum from "../assets/loremIpsum.json";

import { GlobalContext } from "context";

import { S } from "./styles";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const L = {
  Chart: lazy(() => import("chart").then(({ Chart }) => ({ default: Chart }))),
  Ultra: {
    Chart: lazy(() =>
      wait(3000).then(() =>
        import("chart").then(({ Chart }) => ({ default: Chart })),
      ),
    ),
  },
};

function App() {
  const { showMF } = useContext(GlobalContext);

  const [validCredential, setValidCredential] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <S.App $showMF={showMF}>
      <Header title="Lorem Ipsum">
        <S.ValidateStatus $valid={validCredential}>
          {validCredential ? "Credencial válida" : "Credencial inválida"}
        </S.ValidateStatus>
        <Link app="b">Tabela</Link>
        <Button onClick={() => setShowChart(!showChart)}>Estatísticas</Button>
        <Link app="workshop">Storybook</Link>
      </Header>

      <div className="content">
        <div>
          <Credentials state={{ validCredential, setValidCredential }} />
          {loremIpsum.phrases.map(({ phrase }, index) => (
            <div className="item" key={`lorem-ipsum-phrase-${index}`}>
              {phrase}
            </div>
          ))}
        </div>
        {showChart && (
          <>
            <Suspense fallback={<div>Carregando...</div>}>
              <L.Ultra.Chart />
            </Suspense>
            <button-counter
              counter={counter}
              onClick={() => setCounter(counter + 1)}
            >
              Lorem Ipsum
            </button-counter>
          </>
        )}
      </div>
    </S.App>
  );
}

export { App };
