import { useContext } from 'react'

import Chart from "react-apexcharts"
import { GlobalContext } from 'context'

import { S } from "./styles"

export const ChartComponent = () => {
    const { showMF } = useContext(GlobalContext)

    return (
        <S.Chart $showMF={showMF}>
            <h3>Tempo de execução (segundos)</h3>
            <Chart
                options={{
                    chart: {
                        id: "basic-bar"
                    },
                    xaxis: {
                        categories: ["Instalação", "1ª Inicialização", "2ª Inicialização", "1º Build", "2º Build"]
                    },
                    dataLabels: {
                        formatter: function (val) {
                            return val
                        }
                    },
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                if (val === 20.367) return "8,941 seg + 11,426 seg (npm i)"
                                return val.toString().replace(".", ",") + " seg"
                            }
                        }
                    },
                }}
                series={[
                    { name: "Turborepo", data: ["65.734", "22.514", "11.036", "64.473", "2.956"] },
                    { name: "Vite", data: ["20.367", "7.430", "2.463", "2.805"] },
                    { name: "CRA", data: ["114.599", "72.895", "6.793", "21.886"] },
                ]}
                type="line"

                width="700"
            />
            <table style={{ fontSize: ".9em" }}>
                <tr>
                    <th>Comando instalação</th>
                    <th>Tamanho (MB)</th>
                    <th>Setup pós instalação</th>
                </tr>

                <tr>
                    <td>npx create-turbo@latest</td>
                    <td>372</td>
                    <td>Typescript, Next, 2 projetos, 3 packages personalizados (ui, tsconfig, eslint-config-custom)</td>
                </tr>

                <tr>
                    <td>npx vite@latest</td>
                    <td>48,0</td>
                    <td>Javascript, React, 1 projeto, eslint</td>
                </tr>

                <tr>
                    <td>npx create-react-app cra</td>
                    <td>229</td>
                    <td>Javascript, React, 1 projeto, testing-library</td>
                </tr>
            </table>
        </S.Chart>
    )
}
