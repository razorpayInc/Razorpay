# Route Split Ledger Events v2

Demo-only follow-up for the Revenant trigger flow.

This PR adds a small event contract around Marketplace Payout Splits so a
creator platform can listen for each settlement leg:

- `route.split.creator_settled`
- `route.split.platform_fee_settled`
- `route.split.gst_reserved`
- `route.split.tds_reserved`

Merging this PR should be done only after the Telegram bot is watching
`razorpayInc/Razorpay`; the watcher should then start the Rigi / Convosight /
Coto shortlist automatically.
