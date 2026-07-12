# Route Recipient Health Webhooks

Demo-only implementation note for the Revenant trigger flow.

Marketplace platforms need early warnings when a connected seller or creator
account cannot receive Route transfers. This PR adds a tiny webhook contract for
recipient health changes.

The webhook payload captures:

- account ID
- health status
- blocked reason
- retryable flag
- next recommended action

Example events:

- `route.recipient.healthy`
- `route.recipient.action_required`
- `route.recipient.payout_blocked`

Merging this PR should trigger Revenant's watcher and create a prospecting angle
around proactive payout reliability for marketplaces and creator platforms.
