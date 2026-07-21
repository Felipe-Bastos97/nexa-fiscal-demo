# Nexa Fiscal — demonstração de portfólio

Versão demonstrativa e segura de uma solução autoral para gestão de notas fiscais de serviços. O projeto público apresenta a experiência do usuário e alguns fluxos simulados, sem disponibilizar o núcleo do produto comercial.

## O que esta demonstração comprova

- construção de interface responsiva e dashboard gerencial;
- modelagem de clientes, documentos, valores e status;
- filtros, busca, indicadores e gráficos com JavaScript;
- cuidado com privacidade e separação entre demonstração e produção;
- visão de produto para um sistema comercial no modelo SaaS.

## Funcionalidades da beta

- dashboard com indicadores e períodos selecionáveis;
- clientes fictícios com documentos mascarados;
- histórico local com filtro de status;
- simulador que gera somente uma prévia sem validade fiscal;
- aviso permanente de ambiente demonstrativo.

## Proteção do produto comercial

Este repositório **não contém**:

- credenciais, chaves ou endpoints de provedores fiscais;
- dados reais de clientes ou documentos fiscais;
- banco de dados e autenticação de produção;
- regras internas de emissão, cancelamento, cobrança ou assinatura;
- código do produto comercial privado que inspirou esta demonstração.

Todos os nomes, documentos, valores e identificadores exibidos são fictícios. A simulação roda somente no navegador e não transmite dados.

## Executar localmente

Abra `index.html` no navegador. Se preferir usar um servidor local:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Tecnologias da demonstração

HTML5, CSS3 e JavaScript, sem dependências externas. A arquitetura comercial é mantida separadamente em ambiente privado.

## Status

Beta demonstrativa criada exclusivamente para portfólio. A identidade e o núcleo do produto comercial permanecem privados.

## Direitos

Copyright © 2026 Felipe Bastos. Todos os direitos reservados. Consulte [NOTICE.md](NOTICE.md).
