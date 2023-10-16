import {
  addDays,
  addMonths,
  addYears,
  eachDayOfInterval,
  subDays,
} from 'date-fns';
import SETTINGS from './constants';
import { Range } from './types';

export function roundToNearestMultiple(currentPos: number) {
  const nearestMultiple =
    Math.round(currentPos / SETTINGS.UNIT_WIDTH) * SETTINGS.UNIT_WIDTH;
  return nearestMultiple;
}

export function generateRange() {
  return {
    rangeStart: subDays(new Date(), 60),
    rangeEnd: addYears(new Date(), 1),
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

export function getDateFromPosition(position: number, range: Range) {
  const days = position / SETTINGS.UNIT_WIDTH;
  const date = range.rangeStart;
  return addDays(date, days);
}
