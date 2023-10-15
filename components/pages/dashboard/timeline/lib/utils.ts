import SETTINGS from "./constants";

export function roundToNearestMultiple(currentPos: number) {
  const nearestMultiple =
    Math.round(currentPos / SETTINGS.UNIT_WIDTH) * SETTINGS.UNIT_WIDTH;
  const remainder = currentPos % SETTINGS.UNIT_WIDTH;
  return nearestMultiple;
}
