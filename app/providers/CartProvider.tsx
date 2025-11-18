'use client';

import { CartProvider as CartProviderComponent } from '../context/CartContext';

export default function CartProvider({ children }: { children: React.ReactNode }) {
  return <CartProviderComponent>{children}</CartProviderComponent>;
}

