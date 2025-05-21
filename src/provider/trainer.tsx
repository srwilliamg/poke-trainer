import { AppStoreTrainer, trainerStore } from "@/store/store"

import { Provider } from "react-redux"
import { useRef } from "react"

export default function StoreProvider({
    children
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStoreTrainer | null>(null)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = trainerStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
