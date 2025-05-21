import type {
 AppDispatchTrainerType,
 AppStateTrainerType,
 AppStoreTrainerType,
} from './store';
import { useDispatch, useSelector, useStore } from 'react-redux';

export const useAppTrainerDispatch =
 useDispatch.withTypes<AppDispatchTrainerType>();
export const useAppTrainerSelector =
 useSelector.withTypes<AppStateTrainerType>();
export const useAppTrainerStore = useStore.withTypes<AppStoreTrainerType>();
