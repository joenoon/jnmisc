import {DateTime, DateTimeFormatOptions} from 'luxon';

export function fromISOtoLocalLocaleString(isoStr: string, format: DateTimeFormatOptions = DateTime.DATETIME_MED) {
  return DateTime.fromISO(isoStr)
    .toLocal()
    .toLocaleString(format);
}