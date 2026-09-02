# Changelog

## Unreleased

- fix: mantém os botões Editar e Excluir visíveis na tabela de lançamentos.
- fix: mostra valor unitario e total em colunas separadas e visiveis na lista de lançamentos.
- fix: impede que lançamentos apagados voltem pela sincronização online.
- fix: deixa a descrição dos lançamentos limpa e move tipo, quantidade, fornecedor e pagamento para campos separados.
- feat: aplica identidade visual Nosso Empreendimento com logos, tipografia e paleta oficial.
- feat: adiciona aba Aportes para registrar capital investido e saldo da obra no dashboard.
- fix: reduz consultas e renderizacoes repetidas da sincronizacao online para melhorar desempenho.
- fix: usa a chave publica padrao do Supabase quando a sincronizacao online esta vazia ou com placeholder.
- feat: atualiza a base inicial pela planilha da obra com 94 lancamentos e migracao sem duplicar dados locais.
- fix: corrige migracao duplicada dos lancamentos importados da planilha.
- feat: melhora instalacao como app e atualizacao online via GitHub Pages.
- fix: mantém o botão Instalar visível no site online com instruções quando o navegador não abre o prompt.
- fix: corrige o vínculo de etapas dos lançamentos importados da planilha.
- fix: sincroniza lançamentos exatamente pela Planilha11 e confere totais por etapa com a Planilha9.
- fix: permite valor unitário com quatro casas decimais nos lançamentos.
- feat: adiciona sincronização online em tempo real via Supabase.
- feat: simplifica o lançamento diário e adiciona rascunho, favoritos e alerta de duplicidade.
- feat: adiciona situação financeira, vencimentos, filtros avançados e contas a pagar.
- feat: adiciona lixeira recuperável, backup automático, restauração antes de importações e rateio por área.
- feat: adiciona configurações da obra e instalação PWA com suporte offline.
- feat: adiciona múltiplas obras locais, backup completo e avanço físico das etapas.
- docs: prepara esquema e regras de acesso para colaboração com Supabase.
- feat: adiciona relatorios em PDF com resumo, gastos por etapa e lancamentos detalhados.
- fix: faz o modo obra acompanhar a data atual pela data local do computador.
- feat: adiciona edicao de lancamentos e importacao de backup em JSON.
- fix: adiciona confirmacao antes de excluir lancamentos, etapas e unidades.
- fix: escapa textos cadastrados pelo usuario antes de renderizar HTML.
