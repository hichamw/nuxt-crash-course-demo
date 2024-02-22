const { currencyKey } = useRuntimeConfig();

export const CURRENCY_API_URL =
  `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}` as const;

export type CurrencyRes = {
  [key: string]: {
    value: number;
    code: string;
  };
};

export default defineEventHandler(async (event) => {
  const { data } = await $fetch<CurrencyRes>(CURRENCY_API_URL);

  return { data };
});
