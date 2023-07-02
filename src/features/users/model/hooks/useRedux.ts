import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';

import { RootState, AppDispatch } from '../../../../../store';

export const useAppDispatch = () => useDispatch<ThunkDispatch<AppDispatch, void, Action>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
