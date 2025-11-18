'use client';

import { AddressProvider as AddressProviderComponent } from '../context/AddressContext';

export default function AddressProvider({ children }: { children: React.ReactNode }) {
  return <AddressProviderComponent>{children}</AddressProviderComponent>;
}

