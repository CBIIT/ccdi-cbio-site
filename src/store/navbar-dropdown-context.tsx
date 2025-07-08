import { createContext } from 'react';

type DropdownContextType = {
  clickedTitle: string;
  setClickedTitle: (title: string) => void;
};

export const DropdownContext = createContext<DropdownContextType>({
  clickedTitle: '',
  setClickedTitle: (title: string) => {
    throw new Error(
      'DropdownContext: "setClickedTitle" was called outside of a provider. Ensure your component is wrapped in the DropdownContext.Provider.'
    );
  },
});
