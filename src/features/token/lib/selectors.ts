import { RootState } from '../../../store';

export const selectToken = (state: RootState) => state.token.token;
