# Gestão de Obras

Aplicativo web para controle financeiro e operacional de obras residenciais, criado a partir de uma planilha de gestão de obra. A versão atual funciona localmente no navegador e pode sincronizar online via Supabase.

## O Que Já Tem

- Dashboard financeiro com total realizado, orçamento e maiores custos.
- Cadastro de etapas da obra.
- Cadastro de unidades/casas para obra geminada.
- Lançamentos por etapa, unidade, tipo, quantidade, valor e data.
- Relatório de acompanhamento por fase.
- Ranking dos itens mais caros.
- Curva ABC de materiais.
- Situação financeira: pago, a pagar, previsto e cancelado.
- Vencimentos e alerta de contas vencidas.
- Múltiplas obras no mesmo navegador, com backup completo.
- Situação e avanço físico das etapas.
- Lixeira com restauração e rascunho automático.
- Rateio igual ou proporcional pela área.
- Relatórios em PDF com filtros.
- Exportação JSON e CSV.
- Backup automático diário no navegador.
- Cópia de segurança restaurável antes de cada importação.
- Instalação como PWA e abertura offline pelo endereço publicado.
- Sincronização online em tempo real via Supabase quando configurada.
- Layout responsivo para celular e computador.

## Como Abrir

Abra o arquivo `index.html` no navegador:

```text
file:///C:/Users/leand/Documents/Codex/2026-07-26/bo/outputs/gestao-obras-app/index.html
```

## Como Desenvolver

Este projeto ainda não usa build, servidor ou framework. Por enquanto basta editar:

- `index.html`: estrutura das telas.
- `styles.css`: visual e responsividade.
- `app.js`: dados, cálculos e interações.
- `manifest.webmanifest`: configuração básica de app instalável.

Depois de alterar, atualize o navegador com `Ctrl + F5`.

## Testes

Execute o teste de migração, cálculos, lixeira, rateio e relatórios:

```bash
node tests/smoke.test.js
```

## Colaboração Online

A sincronização simples em tempo real usa:

- `docs/supabase-online-sync.sql`
- `docs/supabase-setup.md`

Depois de criar o projeto no Supabase, cole a Project URL e a chave pública
`anon` em `Configurar > Sincronização online` dentro do app.

A estrutura completa com login e regras por membro também está preparada em:

- `docs/supabase-schema.sql`

Antes de ativar online, faça um backup JSON dos dados atuais.

## Fluxo Com GitHub

Use a branch `main` para a versão estável e crie branches para melhorias:

```bash
git checkout -b feature/nome-da-melhoria
```

Exemplos:

- `feature/login`
- `feature/supabase`
- `feature/anexos-notas`
- `feature/relatorio-pdf`

Ao finalizar uma melhoria, abra um Pull Request para revisar antes de juntar na `main`.

## Próximos Passos

Veja o roadmap em [docs/roadmap.md](docs/roadmap.md).
