// Demo feature stub for Revenant's Razorpay Route PR trigger.
// Builds webhook payloads for recipient payout health changes.

const HEALTH_EVENTS = {
  healthy: "route.recipient.healthy",
  action_required: "route.recipient.action_required",
  payout_blocked: "route.recipient.payout_blocked",
};

function recipientHealthEvent(status) {
  return HEALTH_EVENTS[status] || HEALTH_EVENTS.action_required;
}

function recipientHealthWebhook(account) {
  const status = account.payoutsEnabled
    ? "healthy"
    : account.retryable
      ? "action_required"
      : "payout_blocked";

  return {
    event: recipientHealthEvent(status),
    accountId: account.id,
    status,
    blockedReason: account.blockedReason || null,
    retryable: Boolean(account.retryable),
    nextAction: account.payoutsEnabled
      ? "continue_routing_transfers"
      : account.retryable
        ? "collect_updated_account_details"
        : "pause_route_transfers",
  };
}

module.exports = {
  recipientHealthWebhook,
  recipientHealthEvent,
  HEALTH_EVENTS,
};
