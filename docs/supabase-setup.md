# Preparação Para Colaboração Online

O aplicativo continua funcionando localmente e preserva a chave
`gestao-obras-casa-germinada-v3`. A conexão online só deve ser ativada depois de
um backup JSON completo.

## Estrutura Preparada

O arquivo `supabase-schema.sql` contém:

- obras e membros;
- papéis de dono, editor e visualizador;
- unidades, etapas e lançamentos;
- lixeira por `deleted_at`;
- metadados de anexos;
- regras de acesso por obra;
- valores monetários em centavos.

## Etapas Para Ativação

1. Criar um projeto no Supabase.
2. Executar `supabase-schema.sql` no SQL Editor.
3. Criar um bucket privado chamado `attachments`.
4. Configurar as políticas do bucket pelo `project_id`.
5. Cadastrar a URL do GitHub Pages nos Redirect URLs da autenticação.
6. Informar a Project URL e a chave pública `anon` no aplicativo.
7. Exportar o JSON atual.
8. Importar os dados para a primeira obra online.
9. Conferir totais, etapas e unidades antes de liberar o segundo usuário.

## Regras De Migração

- Nenhum lançamento local deve ser removido antes da conferência online.
- A primeira carga precisa manter os identificadores locais em uma tabela de
  correspondência.
- Alterações simultâneas devem usar `updated_at` para impedir sobrescrita
  silenciosa.
- Fotos e PDFs ficam no Storage; apenas os metadados ficam no banco.
- O aplicativo deve manter uma fila local quando estiver sem internet e
  sincronizar ao recuperar a conexão.

## Credenciais

Nunca publique a chave `service_role`. O navegador pode usar somente a chave
pública `anon`, com todas as tabelas protegidas por Row Level Security.
