export const isBrowser = !!(
  // eslint-disable-next-line valid-typeof
  typeof window !== undefined &&
  window.document &&
  window.document.createElement
)
