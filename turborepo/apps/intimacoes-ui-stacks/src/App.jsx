import React from 'react'
import { Collection, DatePicker, Header, Input, Table, Tabs } from './components'

import report from './assets/report.json'

function App() {
  return (
    <>
      <Header
        navbar={[
          { label: "Início" },
          { label: "Robôs" },
          { label: "Apps" },
          { label: "Ajuda" },
          { label: "Sugestões" },
          { label: "Api" },
        ]}
      />

      <div className='h-full flex-col flex mt-6 m-10'>
        <Tabs
          items={[{ label: "Execuções" }, { label: "Perfis" }, { label: "Auditoria" }, { label: "Partes Sensíveis" }, { label: "Processos Sensíveis" }]}
          contents={[(
            <div className='flex flex-col gap-4 p-4'>
              <div className='flex justify-between'>
                <div className='flex gap-4'>
                  <h1 className='text-2xl font-semibold'>Mesa do Advogado</h1>
                  <Input
                    rounded reverse
                    mode="search"
                    placeholder="Busque pelo nome de perfil"
                    width="80"
                  />
                </div>
                <div>
                  <DatePicker mode="range" />
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <Collection
                  items={[
                    { content: "2", label: "Sem intimações", color: "slate" },
                    { content: "2", label: "Finalizado", color: "green" },
                    { content: "1", label: "Erro ao listar", color: "red" },
                  ]}
                />

                <Table
                  value={report.slice(0, 10)}
                  columns={[
                    { field: "status", header: "Estado" },
                    { field: "type", header: "Tipo" },
                    { field: "includedAutomations", header: "Automações incluídas" },
                    { field: "createdAt", header: "Criado em" },
                    { field: "downloadedAt", header: "Download em" }
                  ]}
                />
              </div>
            </div>
          )]}
        />
      </div>
    </ >
  )
}

export default App


