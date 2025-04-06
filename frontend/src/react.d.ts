declare module 'react' {
  export default React;
  export const useState: <T>(initialState: T | (() => T)) => [T, (newState: T) => void];
  export const useEffect: (effect: () => void | (() => void), deps?: ReadonlyArray<any>) => void;
  export const useRef: <T>(initialValue: T) => { current: T };
  export const useCallback: <T extends (...args: any[]) => any>(callback: T, deps: ReadonlyArray<any>) => T;
  export const useMemo: <T>(factory: () => T, deps: ReadonlyArray<any>) => T;
  export const useContext: <T>(context: React.Context<T>) => T;
} 