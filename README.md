# Cardápio React

Sistema de gerenciamento de cardápio desenvolvido com React e Vite

---

## Sumário
1. [Tecnologias utilizadas](#tecnologias-utilizadas)
2. [Funcionalidades](#funcionalidades)
3. [Estrutura do projeto](#estrutura-do-projeto)
4. [Como utilizar a aplicação](#como-utilizar-a-aplicação)

---

## Tecnologias utilizadas
![React](https://img.shields.io/badge/React-262626?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-262626?style=flat&logo=vite&logoColor=ffd24a)
![CSS3](https://img.shields.io/badge/CSS3-262626?style=flat&logo=css&logoColor=5cadff)
![Axios](https://img.shields.io/badge/Axios-262626?style=flat&logo=axios&logoColor=ff5263)
![ESLint](https://img.shields.io/badge/ESLint-262626?style=flat&logo=eslint&logoColor=8d6eff)
![Tanstack](https://img.shields.io/badge/Tanstack_React_Query-262626?style=flat)
![Babel React Compiler](https://img.shields.io/badge/Babel_React_Compiler-262626?style=flat)

---

## Estrutura do projeto

```bash
cardapio/
│
├── src/
│   ├── components/
│   │   ├── card/
│   │   │   ├── card.jsx             # Componente para exibir cada item do cardápio
│   │   │   └── card.css             # Estilos do componente Card
│   │   └── create-modal/
│   │       ├── create-modal.jsx     # Modal para criar/editar itens
│   │       └── modal.css            # Estilos do modal
│   │
│   ├── hooks/
│   │   ├── foodData.jsx             # Hook para buscar dados do cardápio
│   │   └── useFoodDataMutate.jsx    # Hooks para criar/atualizar itens
│   │
│   ├── App.jsx                      # Componente principal da aplicação
│   ├── App.css                      # Estilos globais da aplicação
│   ├── main.jsx                     # Ponto de entrada da aplicação
│   └── index.css                    # Reset e estilos base
│
├── public/                          # Arquivos estáticos
├── index.html                       # Template HTML principal
├── package.json                     # Dependências e scripts do projeto
├── vite.config.js                   # Configuração do Vite
├── eslint.config.js                 # Configuração do ESLint
└── README.md                        # Documentação do projeto
```

---

## Como utilizar a aplicação

### Pré-requisitos
- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn** para gerenciamento de pacotes
- **Backend API** rodando na porta 8080 (ou configurar proxy no vite.config.js)

### Clonar o repositório
```bash
git clone https://github.com/hellenilda/react-cardapio.git
cd react-cardapio
```

### Instalar as dependências
```bash
npm install
```

### Configurar a API
Certifique-se de que sua API backend esteja rodando na porta 8080 ou ajuste o proxy no arquivo `vite.config.js`:

```javascript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8080', // Altere para sua URL da API
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
}
```

### Executar a aplicação

#### Modo de desenvolvimento
```bash
npm run dev
```
A aplicação estará disponível em `http://localhost:5173`

#### Build para produção
```bash
npm run build
```

#### Preview da build de produção
```bash
npm run preview
```

#### Executar linter
```bash
npm run lint
```

---

### Endpoints da API esperados

A aplicação espera que a API tenha os seguintes endpoints:

- `GET /food` - Listar todos os itens do cardápio
- `POST /food` - Criar novo item do cardápio
- `PUT /food/:id` - Atualizar item existente
- `DELETE /food/:id` - Remover item do cardápio

### Estrutura de dados esperada

```json
{
  "id": "string",
  "title": "string",
  "price": "number",
  "image": "string (URL)"
}
```

---

## Autora

<table>
    <tr>
        <td align="center">
            <a href="https://github.com/hellenilda">
                <img src="https://avatars.githubusercontent.com/u/109177631?v=4" width="100px;" alt="Hellen Araujo"/><br>
                <sub>
                    <b>Hellen Araujo</b>
                </sub>
            </a>
        </td>
</table>