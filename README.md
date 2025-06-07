# 📚 AcadSys

Sistema de gerenciamento de alunos, com funcionalidades para cadastro, listagem, exportação e geração de documentos como declarações. Desenvolvido com React e Vite, usando um backend simulado via `json-server`.

## 🚀 Tecnologias utilizadas

- React 19
- Vite
- Bootstrap 5
- React-Bootstrap
- React Router DOM v7
- Axios
- React Toastify
- React Icons
- xlsx + file-saver
- json-server

## 📦 Instalação

1. Clone o projeto:

```bash
git clone https://github.com/seu-usuario/acadsys.git
```

2. Instale as dependências
```bash
cd acadsys
npm install
```
## 🖥️ Como rodar o projeto localmente

O projeto possui frontend com React e um servidor fake com json-server.

Frontend
```bash
npm run dev

Acesse: http://localhost:5173
```

Backend (json-server)
```bash
npm run server

no arquivo package.json na seção server adicionar
"server": "json-server --watch data/db.json"

Acesse: http://localhost:3000
# Certifique-se de que o arquivo data/db.json existe
```

## 📁 Exemplo de data/db.json
```json
{
  "alunos": [
    {
      "id": 1,
      "nome": "Maria Silva",
      "email": "maria@email.com",
      "nota1": 8,
      "nota2": 7.5,
      "nota3": 9,
      "nota4": 8.5
    }
  ]
}
```
## 📝 Funcionalidades

* Cadastro de alunos com 4 notas
* Cálculo da média e situação
* Listagem paginada
* Exportação para Excel
* Geração de PDF de declaração
* Layout responsivo com Bootstrap

## 👨‍💻 Autor

Desenvolvido por Leandro Ramos Cardoso
GitHub: https://github.com/leandro-ramos-cardoso

