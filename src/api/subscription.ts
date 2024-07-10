import { SubscriptionStatusResponse } from "@/types/subscription";

export async function getSubscriptionStatus(
  userEmail: string | null
): Promise<SubscriptionStatusResponse> {
  const resp = await fetch(
    `${process.env.API_BASE_URL}/subscriptions/${userEmail}`
  );

  if (!resp.ok) {
    throw new Error("Network response was not ok");
  }

  return resp.json();
}
