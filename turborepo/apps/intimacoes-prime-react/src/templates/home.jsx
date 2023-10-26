import { useState } from "react";
import execution from "../assets/execution.json";
import report from "../assets/report.json";
import style from "../index.css?inline";

const HomeExecutions = () => {
  const [relatorios, setRelatorios] = useState(false);

  const getTableContent = (data, columns) => {
    return data.slice(0, 10).map((dataRow, index) => (
      <tr key={index}>
        {columns.map((col, i) => (
          <td key={i}>{dataRow[col]}</td>
        ))}
      </tr>
    ));
  };

  const tableContent = getTableContent(execution, [
    "processo",
    "dataInicio",
    "evento",
    "parte",
  ]);

  const modalTableContent = getTableContent(report, [
    "status",
    "type",
    "includedAutomations",
    "createdAt",
    "donwloadedAt",
  ]);

  return (
    <div>
      {/* Estilos */}
      <style>{style}</style>

      {/* Modal */}
      {relatorios && (
        <div className="modal">
          <div className="report-modal">
            <div>
              <div>
                <input placeholder="Data inicial"></input>à
                <input placeholder="Data final"></input>
              </div>
              <button onClick={() => setRelatorios(false)}>X</button>
            </div>
            <table>
              <tr>
                <th></th>
                <th>Estado</th>
                <th>Tipo</th>
                <th>Automações incluídas</th>
                <th>Criado em</th>
                <th>Download em</th>
              </tr>
              <tbody>{modalTableContent}</tbody>
            </table>
          </div>
        </div>
      )}

      <div className="tab-content">
        <div className="tab-header">
          <div className="header-opts">
            <h1>Mesa do advogado</h1>
            <input
              className="tab-header__input"
              placeholder="Busque pelo nome do perfil"
            ></input>
          </div>
          <div className="header-opts">
            <span>Total listado: 0</span>
            <span>Total selecionado: 0</span>
            <div>
              <input
                className="tab-header__input"
                placeholder="Data inicial"
              ></input>
              à
              <input
                className="tab-header__input"
                placeholder="Data final"
              ></input>
            </div>
            <button id="relatorios-btn">Relatórios</button>
          </div>
        </div>
      </div>

      <div className="status-selector">
        <div
          className="status-selector__item"
          style={{ background: "#817b78" }}
        >
          <span className="status-selector__label">1</span>
          Sem intimações
        </div>
        <div
          className="status-selector__item"
          style={{ background: "#0eef72" }}
        >
          <span className="status-selector__label">1</span>
          Finalizado
        </div>
        <div
          className="status-selector__item"
          style={{ background: "#e05f56" }}
        >
          <span className="status-selector__label">1</span>
          Erro ao listar
        </div>
      </div>

      <div className="execution-container">
        <aside className="execution-selector" id="execution-selector">
          <div
            className="execution-selector__item"
            style={{ borderLeft: "3px solid #817b78" }}
          >
            <span>Execução 001</span>
            <div>
              <div> Total: 000</div>
              <div> Intimações no dia: 000</div>
            </div>
          </div>
          <div
            className="execution-selector__item"
            style={{ borderLeft: "3px solid #0eef72" }}
          >
            <span>Execução 002</span>
            <div>
              <div> Total: 000</div>
              <div> Intimações no dia: 000</div>
            </div>
          </div>
          <div
            className="execution-selector__item"
            style={{ borderLeft: "3px solid #e05f56" }}
          >
            <span>Execução 003</span>
            <div>
              <div> Total: 000</div>
              <div> Intimações no dia: 000</div>
            </div>
          </div>
        </aside>

        <aside className="execution-table-container">
          <div>
            <b>Detalhamentos de erro</b>

            <table>
              <thead>
                <tr>
                  <th>Request ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>00000000000000000000000000000000000000000</span>
                    <button>Copiar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <button>Executados 0</button>
            <button>Não executados 1</button>
          </div>

          <table id="execution-table">
            <thead>
              <tr>
                <th>Processo</th>
                <th>Data de Início</th>
                <th>Evento</th>
                <th>Parte</th>
              </tr>
            </thead>
            <tbody>{tableContent}</tbody>
          </table>
        </aside>
      </div>
    </div>
  );
};

export default HomeExecutions;
