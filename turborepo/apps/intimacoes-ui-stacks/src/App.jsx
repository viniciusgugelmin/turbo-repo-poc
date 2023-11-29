import React, { useState } from 'react'
import { Button, Collection, DatePicker, Header, Input, Table, Tabs } from './components'

import execution from './assets/execution.json'

import report from './assets/report.json'
import { ClockIcon } from '@radix-ui/react-icons'

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
                <div className='flex h-10 items-center gap-4'>
                  <DatePicker mode="range" />
                  <Button onPress={() => alert('Hello world!')} children="Relatórios" />
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

                <div className='flex justify-between'>
                  <div className='w-1/2 overflow-y-scroll h-80'>
                    {execution.map(({ title, hour, total, dayIntimations, status }, index) => {

                      return (
                        <div
                          key={`execution-btn-${index}`}
                          className={`border-l-8 border-${status}-600 pl-2`}
                        >
                          <div className='flex justify-between h-24 py-4 items-start'>
                            <span children={title} className='text-lg' />
                            <div className='flex items-center gap-1 text-sm'>
                              <ClockIcon />
                              {hour}
                            </div>
                          </div>

                          <div className='text-sm flex gap-2 justify-end'>
                            <div>
                              Totais: <b>{total}</b>
                            </div>
                            <div>
                              Intimações no dia: <b>{dayIntimations}</b>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <Table
                    value={report.slice(0, 10)}
                    columns={[
                      { field: "status", header: "Estado" },
                      { field: "type", header: "Tipo" },
                      { field: "includedAutomations", header: "Automações incluídas" },
                      { field: "createdAt", header: "Criado em" },
                      { field: "donwloadedAt", header: "Download em" }
                    ]}
                  />
                </div>
              </div>
            </div>
          )]}
        />
      </div>
    </ >
  )
}

export default App


