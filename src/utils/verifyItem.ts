import { CardMsg } from "../constants/contexts/Cards/CardConstants";

export default function verifyItem(item: string, name: string) {
  if (item !== null) {
    return item;
  } else {
    return `${CardMsg} ${name}`;
  }
}
