export function pushDataLayerEvent(
  eventName: string,
  payload: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  const scopedWindow = window as Window & {
    dataLayer?: Array<Record<string, unknown>>;
  };

  scopedWindow.dataLayer = scopedWindow.dataLayer || [];
  scopedWindow.dataLayer.push({
    event: eventName,
    ...payload,
  });
}
