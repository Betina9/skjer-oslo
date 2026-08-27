export function formatDate(date: string) {
  return new Intl.DateTimeFormat("nb-NO", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date(date));
}
