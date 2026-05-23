name: QA Pipeline

on:
  push:
    branches:
      - main

jobs:
  tests:

    runs-on: ubuntu-latest

    steps:

      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Instalar Dependências
        run: npm install

      - name: Executar Cypress
        run: npx cypress run
