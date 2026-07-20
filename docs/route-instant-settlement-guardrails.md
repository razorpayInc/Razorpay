# Route Instant Settlement Guardrails

Demo-only implementation note for the Revenant trigger flow.

Marketplace sellers often need faster settlement, but high-risk transfers should
not bypass review. This PR adds a small policy contract for deciding whether a
Route transfer can move to instant settlement.

The guardrail evaluates:

- seller KYC status
- chargeback rate in basis points
- pending dispute count
- transfer amount
- historical successful settlements

Possible decisions:

- `instant_settlement.approved`
- `instant_settlement.manual_review`
- `instant_settlement.standard_settlement`

Merging this PR should trigger Revenant's watcher and produce a new opportunity
angle around fast settlement controls for marketplace businesses.
