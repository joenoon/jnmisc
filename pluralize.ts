export function pluralize(num: number, singular: string, plural: string) {
  if (num === 1) return `${num} ${singular}`;
  return `${num} ${plural}`;
}

export function pluralizeOnly(num: number, singular: string, plural: string) {
  if (num === 1) return singular;
  return plural;
}