// Demo feature stub for Revenant's Razorpay Route PR trigger.
// Reverses settled Route transfer legs into refund ledger entries.

const REVERSAL_EVENT_BY_ROLE = {
  creator: "route.refund.creator_reversed",
  platform_fee: "route.refund.platform_fee_reversed",
  gst_reserve: "route.refund.tax_reserve_reversed",
  tds_reserve: "route.refund.tax_reserve_reversed",
};

function reversalEvent(role) {
  return REVERSAL_EVENT_BY_ROLE[role] || "route.refund.transfer_reversed";
}

function refundSplitReversal(orderId, refundId, transferLegs) {
  return transferLegs.map((leg) => ({
    orderId,
    refundId,
    account: leg.account,
    role: leg.role,
    amount: leg.refundAmountPaise || leg.amount,
    event: reversalEvent(leg.role),
  }));
}

module.exports = {
  refundSplitReversal,
  reversalEvent,
  REVERSAL_EVENT_BY_ROLE,
};
