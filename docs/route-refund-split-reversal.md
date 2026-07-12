# Route Refund Split Reversal

Demo-only implementation note for the Revenant trigger flow.

Marketplace refunds need to reverse the original Route split legs in a way that
finance teams can reconcile. This PR adds a small reversal contract for mapping
settled transfer legs back into refund ledger entries.

The reversal keeps track of:

- original order ID
- refund ID
- destination account
- refunded amount
- reversal event name

Example events:

- `route.refund.creator_reversed`
- `route.refund.platform_fee_reversed`
- `route.refund.tax_reserve_reversed`

Merging this PR should trigger Revenant's watcher and give the sales agent a
clear angle around refund reconciliation for creator and marketplace platforms.
