import { addDays, addMonths, eachDayOfInterval } from 'date-fns';
import SETTINGS from './constants';
import { Range } from './types';

export function roundToNearestMultiple(
  currentPos: number,
  unitWidth: number = SETTINGS.UNIT_WIDTH
) {
  const nearestMultiple = Math.round(currentPos / unitWidth) * unitWidth;
  return nearestMultiple;
}

export function generateRange(rangeStart: Date, rangeEnd: Date) {
  return {
    rangeStart: rangeStart,
    rangeEnd: rangeEnd,
  };
}

export function generateTimelineData(range: Range) {
  const months = [];
  let currentDate = range.rangeStart;

  while (currentDate <= range.rangeEnd) {
    months.push(currentDate);
    currentDate = addMonths(currentDate, 1);
  }
  const days = eachDayOfInterval({
    start: range.rangeStart,
    end: range.rangeEnd,
  });
  return { months, days };
}

export function getDateFromPosition(
  position: number,
  range: Range,
  unitWidth: number = SETTINGS.UNIT_WIDTH
) {
  const days = position / unitWidth;
  const date = range.rangeStart;
  return addDays(date, days);
}
