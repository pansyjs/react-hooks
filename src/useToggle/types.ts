export type State = string | number | boolean | undefined;

export interface Actions<T = State> {
  setLeft: () => void;
  setRight: () => void;
  toggle: (value?: T) => void;
}
