import { Provider } from 'react-redux';
import { trainerStore } from '@/store/store';

let storeRef = null;

export default function StoreTrainerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!storeRef) {
    storeRef = trainerStore();
  }

  return <Provider store={storeRef}>{children}</Provider>;
}
