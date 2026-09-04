# Portfolio project management

This orphan branch tracks project work separately from application source.
Task files are canonical. This README is only a mobile-friendly entry point.
Never merge `project-management` into `dev`.

## Board

### Backlog

_None._

### Todo

_None._

### Active

_None._

### Review

_None._

### Blocked

_None._

### Done

_None._

### Canceled

_None._

Browse all task files in [backlog](tasks/backlog/),
[active](tasks/active/), or [done](tasks/done/).

## Statuses

- `backlog`: retained but not selected for delivery
- `todo`: selected as upcoming work
- `active`: implementation is in progress
- `review`: the pull request is verified and awaits an explicit merge decision
- `blocked`: progress needs an operator action or external change
- `done`: the verified pull request was merged
- `canceled`: the work will not continue

Folder mapping is intentionally coarse: `backlog` uses `tasks/backlog/`;
`todo`, `active`, `review`, and `blocked` use `tasks/active/`; and `done` plus
`canceled` use `tasks/done/`. The `status` in each task file is authoritative.
