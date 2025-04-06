/// <reference types="react" />

declare module 'react' {
  import * as React from 'react';
  export = React;
  export as namespace React;
  
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T) => void];
  export function useEffect(effect: () => void | (() => void), deps?: ReadonlyArray<any>): void;
  export function useRef<T>(initialValue: T): { current: T };
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: ReadonlyArray<any>): T;
  export function useMemo<T>(factory: () => T, deps: ReadonlyArray<any>): T;
  export function useContext<T>(context: React.Context<T>): T;
}

declare module 'react-dom' {
  import * as ReactDOM from 'react-dom';
  export = ReactDOM;
  export as namespace ReactDOM;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
} 