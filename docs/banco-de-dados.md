# Modelo De Banco De Dados

Este é o desenho inicial para quando o app sair do armazenamento local e passar a usar banco na nuvem.

## Tabelas

### users

- `id`
- `name`
- `email`
- `created_at`

### projects

- `id`
- `name`
- `document`
- `address`
- `city`
- `created_by`
- `created_at`

### project_members

- `id`
- `project_id`
- `user_id`
- `role`
- `created_at`

Papéis sugeridos:

- `owner`
- `editor`
- `viewer`

### units

- `id`
- `project_id`
- `name`
- `area`
- `status`

### phases

- `id`
- `project_id`
- `name`
- `budget`
- `start_date`
- `end_date`
- `status`

### transactions

- `id`
- `project_id`
- `phase_id`
- `unit_id`
- `type`
- `description`
- `quantity`
- `unit_value`
- `total`
- `date`
- `notes`
- `created_by`
- `created_at`
- `updated_at`

### attachments

- `id`
- `transaction_id`
- `file_url`
- `file_type`
- `created_by`
- `created_at`

## Regras

- Cada usuário só acessa obras em que é membro.
- Apenas `owner` e `editor` podem criar lançamentos.
- Apenas `owner` pode convidar/remover membros.
- Todo lançamento deve registrar quem criou.
