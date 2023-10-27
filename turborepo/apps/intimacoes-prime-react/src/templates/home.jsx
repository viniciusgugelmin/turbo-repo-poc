import { useState } from "react";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import { Accordion, AccordionTab } from "primereact/accordion";

import execution from "../assets/execution.json";
import report from "../assets/report.json";

import style from "../index.css?inline";

const HomeExecutions = () => {
  const [relatorios, setRelatorios] = useState(false);
  const [dates, setDates] = useState(null);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    processo: { value: null, matchMode: FilterMatchMode.CONTAINS },
    dataInicio: { value: null, matchMode: FilterMatchMode.CONTAINS },
    evento: { value: null, matchMode: FilterMatchMode.CONTAINS },
    parte: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const header = (
    <div className="flex justify-content-end">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          placeholder="Keyword Search"
        />
      </span>
    </div>
  );

  return (
    <div style={{ width: "100%" }}>
      <style>{style}</style>
      <Dialog
        visible={relatorios}
        maximizable
        onHide={() => setRelatorios(false)}
      >
        <div>
          <Calendar
            value={dates}
            onChange={(e) => setDates(e.value)}
            selectionMode="range"
            placeholder="Selecione um período"
            readOnlyInput
            showButtonBar
          />
          <DataTable value={report.slice(0, 10)}>
            <Column field="status" header="Estado" />
            <Column field="type" header="Tipo" />
            <Column field="includedAutomations" header="Automações incluídas" />
            <Column field="createdAt" header="Criado em" />
            <Column field="donwloadedAt" header="Download em" />
          </DataTable>
        </div>
      </Dialog>

      <div className="tab-content">
        <div className="tab-header">
          <div className="header-opts">
            <h1>Mesa do advogado</h1>
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText
                className="tab-header__input"
                placeholder="Busque pelo nome do perfil"
              />
            </span>
          </div>
          <div className="header-opts">
            <span className="header-opts__total">Total listado: 0</span>
            <span className="header-opts__total">Total selecionado: 0</span>
            <div>
              <Calendar
                value={dates}
                onChange={(e) => setDates(e.value)}
                selectionMode="range"
                placeholder="Selecione um período"
                readOnlyInput
                showButtonBar
              />
            </div>
            <Button
              id="relatorios-btn"
              severity="warning"
              label="Relatórios"
              onClick={() => setRelatorios(true)}
            />
          </div>
        </div>
      </div>
      <div className="status-selector">
        <Card
          className="status-selector__item"
          style={{
            background:
              "linear-gradient(100deg, rgb(127, 121, 118) 0%, rgb(216, 206, 201) 100%)",
          }}
        >
          <div className="status-selector__label">1</div>
          <div className="status-selector__text">Sem intimações</div>
        </Card>
        <Card
          className="status-selector__item"
          style={{
            background:
              "linear-gradient(100deg, rgb(7, 238, 111) 0%, rgb(157, 255, 175) 100%)",
          }}
        >
          <div className="status-selector__label">1</div>
          <div className="status-selector__text">Finalizado</div>
        </Card>
        <Card
          className="status-selector__item"
          style={{
            background:
              "linear-gradient(100deg, rgb(233, 93, 82) 0%, rgb(255, 157, 157) 100%)",
          }}
        >
          <div className="status-selector__label">1</div>
          <div className="status-selector__text">Erro ao listar</div>
        </Card>
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
          <Accordion multiple>
            <AccordionTab header="Detalhamentos de erro">
              <DataTable
                value={[
                  {
                    value: (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <span>00000000000000000000000000000000000000000</span>
                        <Button
                          severity="info"
                          size="small"
                          label={<i className="pi pi-copy" />}
                        />
                      </div>
                    ),
                  },
                ]}
              >
                <Column field="value" header="Request ID" />
              </DataTable>
            </AccordionTab>
            <AccordionTab header="Erros de comarca">
              <DataTable
                value={[
                  {
                    value: (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <span>00000000000000000000000000000000000000000</span>
                        <Button
                          severity="danger"
                          size="small"
                          label={<i className="pi pi-copy" />}
                        />
                      </div>
                    ),
                  },
                ]}
              >
                <Column field="value" header="Nome" />
              </DataTable>
            </AccordionTab>
          </Accordion>

          <div className="buttons">
            <Button
              label="Executados 0"
              severity="secondary"
              size="small"
              outlined
            />
            <Button
              label="Não executados 1"
              severity="secondary"
              size="small"
              outlined
            />
          </div>

          <DataTable
            id="execution-table"
            paginator
            rows={10}
            filters={filters}
            globalFilterFields={["processo", "dataInicio", "evento", "parte"]}
            filterDisplay="row"
            header={header}
            value={execution
              .map((e, i) => ({ ...e, evento: `${e.evento} - ${i + 1}` }))
              .slice(0, 30)}
          >
            <Column header="Processo" filter field="processo" />
            <Column header="Data de Início" filter field="dataInicio" />
            <Column header="Evento" filter field="evento" />
            <Column header="Parte" filter field="parte" />
          </DataTable>
        </aside>
      </div>
    </div>
  );
};

export default HomeExecutions;
