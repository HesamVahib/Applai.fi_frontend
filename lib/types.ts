export type Job = {
  id: number;
  title: string;
  company: string;
  city: string;
  date: string;
  link: string;
  category: string;
};

export type Filters = {
  city: string;
  category: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  favoriteJobIds: number[];
};

export type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export type Theme = 'light' | 'dark';

export type FilterButtonProps = {
    id: string;
    resetSignal: boolean;
};