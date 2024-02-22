import { CURRENCY_API_URL, CurrencyRes } from "../ninja";

export default defineEventHandler(async (event) => {
  const { code } = event.context.params as { code: string }; 

  const uri = `${CURRENCY_API_URL}&currencies=${code}`;

  const { data } = await $fetch<CurrencyRes>(uri);

  return data;
});