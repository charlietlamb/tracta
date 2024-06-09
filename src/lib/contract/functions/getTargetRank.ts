import { getDraggedRank } from './getDraggedRank'

export function getTargetRank(
  targetRank: string,
  dragRank: string,
  dropRank: string,
): string {
  // If the target rank is the same as the dragged rank,
  // return the next rank after the drop rank.
  if (targetRank === dragRank) {
    const level = dropRank.split('.').length - 1
    return getDraggedRank(dropRank, level)
  }

  // Determine the level at which the rank should be incremented
  const level = dropRank.split('.').length - 1

  // If the dragged item was originally above the target and is now below it,
  // or if it was originally below the target and is now above it,
  // the target's rank should be incremented at the specified level.
  if (
    (dragRank < targetRank && targetRank <= dropRank) ||
    (dragRank > targetRank && targetRank > dropRank)
  ) {
    return getDraggedRank(targetRank, level)
  }

  // Otherwise, the target's rank doesn't need to change.
  return targetRank
}
