
export type HookStateInitialSetter<S> = () => S;
export type HookStateInitAction<S> = S | HookStateInitialSetter<S>;

export type HookStateSetter<S> = ((prevState: S) => S) | (() => S);
export type HookStateSetAction<S> = S | HookStateSetter<S>;

export type HookStateResolvable<S> = S | HookStateInitialSetter<S> | HookStateSetter<S>;

export function resolveHookState<S>(nextState: HookStateInitAction<S>): S;
export function resolveHookState<S, C extends S>(
  nextState: HookStateSetAction<S>,
  currentState?: C
): S;
export function resolveHookState<S, C extends S>(
  nextState: HookStateResolvable<S>,
  currentState?: C
): S;
export function resolveHookState<S, C extends S>(
  nextState: HookStateResolvable<S>,
  currentState?: C
): S {
  if (typeof nextState === 'function') {
    return nextState.length ? (nextState as Function)(currentState) : (nextState as Function)();
  }

  return nextState;
}
