export type SubscriptionStatus =
  | "incomplete"
  | "incomplete_expired"
  | "trialing"
  | "active"
  | "past_due"
  | "canceled"
  | "unpaid"
  | "paused"
  | "not_registered"
  | "loading";

export type SubscriptionStatusResponse = {
  status: SubscriptionStatus;
};

export const subscriptionStatusText: Record<SubscriptionStatus, string> = {
  incomplete: "Você ainda não completou o cadastro. Complete pelo link abaixo:",
  incomplete_expired:
    "Você ainda não completou o cadastro. Complete pelo link abaixo:",
  trialing: "Você está em período de testes. Aproveite!",
  active: "Você está com a assinatura ativa. Aproveite!",
  past_due: "Sua assinatura está atrasada. Regularize pelo link abaixo:",
  canceled: "Sua assinatura foi cancelada. Renove pelo link abaixo:",
  unpaid: "Sua assinatura não foi paga. Pague pelo link abaixo:",
  paused: "Sua assinatura está pausada. Retome pelo link abaixo:",
  not_registered: "Você ainda não é assinante. Assine pelo link abaixo:",
  loading: "Carregando...",
};
