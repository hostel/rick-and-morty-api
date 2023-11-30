import { TCharactersList } from '../../../types';

export const flatterPages = (pages: TCharactersList[]) => {
  return pages?.reduce(
    (acc, item) => {
      acc = {
        ...acc,
        info: item?.characters?.info,
        results: [...(acc?.results || []), ...item.characters?.results],
      };

      return acc;
    },
    {
      info: {},
      results: [],
    } as TCharactersList['characters'],
  );
};
