import { createContext } from 'react';

type DropdownContextType = {
  clickedTitle: string;
  setClickedTitle: (title: string) => void;
};

export const DropdownContext = createContext<DropdownContextType>({
  clickedTitle: '',
  // eslint-disable-next-line
  setClickedTitle: (title: string) => {},
});
