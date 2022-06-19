export default function formatAddress(
  city: string,
  state: string,
  country: string
) {
  return `${city ? city : "none"}, ${state ? state : "none"} - ${
    country ? country : "none"
  }`;
}
