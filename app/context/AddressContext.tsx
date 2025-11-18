'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Address {
  id: string;
  name: string;
  type: 'home' | 'office' | 'other';
  address: string;
  city: string;
  pincode: string;
  phone: string;
  isDefault: boolean;
}

interface AddressContextType {
  addresses: Address[];
  addAddress: (address: Omit<Address, 'id'>) => void;
  updateAddress: (id: string, address: Partial<Address>) => void;
  deleteAddress: (id: string) => void;
  setDefaultAddress: (id: string) => void;
  getDefaultAddress: () => Address | undefined;
  getAddressById: (id: string) => Address | undefined;
}

const AddressContext = createContext<AddressContextType | undefined>(undefined);

export function AddressProvider({ children }: { children: ReactNode }) {
  const [addresses, setAddresses] = useState<Address[]>([]);

  // Load addresses from localStorage on mount
  useEffect(() => {
    const savedAddresses = localStorage.getItem('medswift_addresses');
    if (savedAddresses) {
      try {
        setAddresses(JSON.parse(savedAddresses));
      } catch (error) {
        console.error('Error loading addresses:', error);
        localStorage.removeItem('medswift_addresses');
      }
    }
  }, []);

  // Save addresses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('medswift_addresses', JSON.stringify(addresses));
  }, [addresses]);

  const addAddress = (addressData: Omit<Address, 'id'>) => {
    const newAddress: Address = {
      id: 'addr_' + Date.now(),
      ...addressData,
    };

    setAddresses((prev) => {
      // If this is set as default, remove default from others
      if (newAddress.isDefault) {
        const updated = prev.map((addr) => ({ ...addr, isDefault: false }));
        return [...updated, newAddress];
      }
      return [...prev, newAddress];
    });
  };

  const updateAddress = (id: string, addressData: Partial<Address>) => {
    setAddresses((prev) => {
      const updated = prev.map((addr) => {
        if (addr.id === id) {
          const updatedAddr = { ...addr, ...addressData };
          // If setting as default, remove default from others
          if (addressData.isDefault) {
            return updatedAddr;
          }
          return updatedAddr;
        }
        // If another address is being set as default, remove default from this one
        if (addressData.isDefault) {
          return { ...addr, isDefault: false };
        }
        return addr;
      });
      return updated;
    });
  };

  const deleteAddress = (id: string) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  const setDefaultAddress = (id: string) => {
    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
  };

  const getDefaultAddress = () => {
    return addresses.find((addr) => addr.isDefault) || addresses[0];
  };

  const getAddressById = (id: string) => {
    return addresses.find((addr) => addr.id === id);
  };

  return (
    <AddressContext.Provider
      value={{
        addresses,
        addAddress,
        updateAddress,
        deleteAddress,
        setDefaultAddress,
        getDefaultAddress,
        getAddressById,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export function useAddress() {
  const context = useContext(AddressContext);
  if (context === undefined) {
    throw new Error('useAddress must be used within an AddressProvider');
  }
  return context;
}

