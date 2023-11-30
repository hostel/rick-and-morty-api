import { Character, Characters } from '../gql/graphql';

export type TCharacterListItem = Pick<Character, 'image' | 'name' | 'created'> & { id: string };

export type TCharactersList = {
  characters: Pick<Characters, 'info'> & {
    results: TCharacterListItem[];
  };
};

export type TStatus = 'Alive' | 'Dead' | 'unknown';

export type TCharacter = {
  character: Omit<Character, 'status'> & { status: TStatus };
};
