export const AUTH_STATE_CHANGED = 'AUTH_STATE_CHANGED';

export const authStateChanged = user => ({
  type: AUTH_STATE_CHANGED,
  user,
});
