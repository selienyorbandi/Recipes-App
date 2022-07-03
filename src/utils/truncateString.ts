export function truncateString(str: string, size: number) {
  if (str.length > size) {
    return `${str.substring(0, size)}...`;
  }
  else return str;
}