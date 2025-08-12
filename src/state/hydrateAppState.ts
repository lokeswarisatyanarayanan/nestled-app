import { getItem } from '@storage';

import type { AppState } from './createSlices';

type SetFn = (fn: (state: AppState) => void) => void;

export async function hydrateAppStateSlice(set: SetFn): Promise<void> {
  const onboarded = await getItem<string>('onboarded');
  const authenticated = await getItem<string>('authenticated');

  set(state => {
    state.app.onboarded = onboarded === 'true';
    state.app.authenticated = authenticated === 'true';
  });
}
