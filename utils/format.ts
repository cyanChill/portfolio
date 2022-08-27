import { format } from "date-fns";

export const postDateFormat = (date: string | Date) => {
  return format(new Date(date), "dd MMMM yyyy");
};

export const postDateTimeFormat = (date: string | Date) => {
  return format(new Date(date), "dd MMMM yyyy '('pp')'");
};
