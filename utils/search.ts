import { encryptText, encryptNumber } from '@/utils/string';

export const searchForKeyword = (params: any, router: any) => {
  const value = encryptNumber(params.value);
  const name = encryptText(params.name);
  const area = encryptText(params.area);
  const country = encryptText(params.country);
  const encrypted = [value, name, area, country].join('&');
  router.push(encrypted);
};
