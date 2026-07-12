// Demo feature stub for Revenant's Razorpay Route PR trigger.
// This file is intentionally small: the PR merge is what starts the demo.

const DEFAULT_SPLIT_BPS = {
  creator: 7800,
  platformFee: 1500,
  gstReserve: 500,
  tdsReserve: 200,
};

function marketplacePayoutSplits(amountPaise, accounts) {
  return [
    {
      account: accounts.creator,
      amount: Math.round(amountPaise * DEFAULT_SPLIT_BPS.creator / 10000),
    },
    {
      account: accounts.platform,
      amount: Math.round(amountPaise * DEFAULT_SPLIT_BPS.platformFee / 10000),
    },
    {
      account: accounts.gstReserve,
      amount: Math.round(amountPaise * DEFAULT_SPLIT_BPS.gstReserve / 10000),
    },
    {
      account: accounts.tdsReserve,
      amount: Math.round(amountPaise * DEFAULT_SPLIT_BPS.tdsReserve / 10000),
    },
  ];
}

function splitLedgerEvents(orderId, transfers) {
  return transfers.map((transfer) => ({
    orderId,
    account: transfer.account,
    amount: transfer.amount,
    event: `route.split.${transfer.account.replace(/^acc_/, '')}.settled`,
  }));
}

module.exports = {
  marketplacePayoutSplits,
  splitLedgerEvents,
  DEFAULT_SPLIT_BPS,
};
