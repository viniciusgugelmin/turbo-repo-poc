import execution from '../assets/execution.json';
import report from '../assets/report.json';
import style from '../index.css?inline';

class HomeExecutions extends HTMLElement {
    constructor() {
        super();
        this.state = {
            relatorios: false,
        };
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }

    getTableContent = (data, columns) => {
        let content = ""

        data.splice(0, 10).forEach((dataRow) => {
            let row = ""

            columns.forEach((col) => {
                row += `
                    <td>${dataRow[col]}</td>
                `
            })

            content += `
                <tr>${row}</tr>
            `
        })

        return content
    }

    render() {
        const { relatorios } = this.state;

        const tableContent = this.getTableContent(execution, ["processo", "dataInicio", "evento", "parte"])
        const modalTableContent = this.getTableContent(report, ["status", "type", "includedAutomations", "createdAt", "donwloadedAt"])

        const template = document.createElement('template')


        const modal = `
            <div class="modal">
                <div class="report-modal">
                
                <div>
                    <div>
                    <input placeholder="Data inicial"></input>
                    à
                    <input placeholder="Data final"></input>
                    </div>
                    <button id="close-modal-btn">X</button>
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
                    ${modalTableContent}
                </table>
                </div>
            </div>
        `

        template.innerHTML = `
        <style>${style}</style>

        ${relatorios ? modal : ""}

        <div class="tab-content">
        <div class="tab-header">
            <div class="header-opts">
                <h1>Mesa do advogado</h1>
                <input class="tab-header__input" placeholder="Busque pelo nome do perfil"></input>
            </div>
            <div class="header-opts">
                <span>Total listado: 0</span>
                <span>Total selecionado: 0</span>
                <div>
                    <input class="tab-header__input" placeholder="Data inicial"></input>
                    à
                    <input class="tab-header__input" placeholder="Data final"></input>
                </div>
                <button id="relatorios-btn">Relatórios</button>
            </div>
        </div>
        </div>

        <div class="status-selector">
        <div class="status-selector__item" style="background: #817b78;">
            <span class="status-selector__label">1</span>
            Sem intimações
        </div>
        <div class="status-selector__item" style="background: #0eef72;">
            <span class="status-selector__label">1</span>
            Finalizado
        </div>
        <div class="status-selector__item" style="background: #e05f56;">
            <span class="status-selector__label">1</span>
            Erro ao listar
        </div>
        </div>

        <div class="execution-container">
        <aside class="execution-selector" id="execution-selector">
            <div class="execution-selector__item" style="border-left: 3px solid #817b78;">
                <span>Execução 001</span>
                <div>
                    <div> Total: 000 </div>
                    <div> Intimações no dia: 000 </div>
                </div>
            </div>
            <div class="execution-selector__item" style="border-left: 3px solid #0eef72;">
                <span>Execução 002</span>
                <div>
                    <div> Total: 000 </div>
                    <div> Intimações no dia: 000 </div>
                </div>
            </div>
            <div class="execution-selector__item" style="border-left: 3px solid #e05f56;">
                <span>Execução 003</span>
                <div>
                    <div> Total: 000 </div>
                    <div> Intimações no dia: 000 </div>
                </div>
            </div>
        </aside>

        <aside class="execution-table-container">
            <div>
                <b>Detalhamentos de erro</b>

                <table>
                    <tr>
                        <th>Request ID</th>
                    </tr>
                    <tr>
                        <td><span>00000000000000000000000000000000000000000</span><button>Copiar</button></td>
                    </tr>
                </table>
            </div>

            <div>
                <button>Executados 0</button>
                <button>Não executados 1</button>
            </div>

            <table id="execution-table">
                <tr>
                    <th>Processo</th>
                    <th>Data de Início</th>
                    <th>Evento</th>
                    <th>Parte</th>
                </tr>
                ${tableContent}
            </table>
        </aside>
        </div>
    `;

        const content = document.importNode(template.content, true);
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(content);

        const relatoriosBtn = this.shadowRoot.getElementById('relatorios-btn')
        relatoriosBtn.addEventListener('click', () => {
            this.setState({ relatorios: !relatorios });
        })

        const closeModalBtn = this.shadowRoot.getElementById('close-modal-btn')
        closeModalBtn?.addEventListener('click', () => {
            this.setState({ relatorios: false });
        })
    }
}

customElements.define('home-executions', HomeExecutions);
