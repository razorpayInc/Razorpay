// Demo feature stub for Revenant's Razorpay Route PR trigger.
// Encodes a tiny policy contract for instant marketplace settlements.

const MAX_INSTANT_AMOUNT_PAISE = 2500000;
const MAX_CHARGEBACK_BPS = 75;
const MIN_SUCCESSFUL_SETTLEMENTS = 10;

function instantSettlementDecision(seller) {
  if (!seller.kycVerified) {
    return {
      decision: "instant_settlement.standard_settlement",
      reason: "seller_kyc_incomplete",
    };
  }

  if (seller.pendingDisputes > 0 || seller.chargebackBps > MAX_CHARGEBACK_BPS) {
    return {
      decision: "instant_settlement.manual_review",
      reason: "seller_risk_threshold_exceeded",
    };
  }

  if (
    seller.transferAmountPaise > MAX_INSTANT_AMOUNT_PAISE ||
    seller.successfulSettlements < MIN_SUCCESSFUL_SETTLEMENTS
  ) {
    return {
      decision: "instant_settlement.standard_settlement",
      reason: "seller_instant_settlement_limit_not_met",
    };
  }

  return {
    decision: "instant_settlement.approved",
    reason: "seller_within_guardrails",
  };
}

module.exports = {
  instantSettlementDecision,
  MAX_INSTANT_AMOUNT_PAISE,
  MAX_CHARGEBACK_BPS,
  MIN_SUCCESSFUL_SETTLEMENTS,
};
