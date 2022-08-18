export function preventDefault(rawEvent: TouchEvent): boolean {
  const e = rawEvent || window.event
  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  // @ts-ignore
  if (e.touches.length > 1)
    return true

  if (e.preventDefault)
    e.preventDefault()

  return false
}
