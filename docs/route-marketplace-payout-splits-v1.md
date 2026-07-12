# Marketplace Payout Splits v1

Demo-only implementation note for the Revenant trigger flow.

A single creator-economy payment can now be represented as four settlement legs:

- creator payout
- platform fee
- GST reserve
- TDS reserve

Merging this PR should trigger Revenant's Telegram watcher and start the Rigi /
Convosight / Coto shortlist.
