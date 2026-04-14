import React, { createContext, useContext, useState, useEffect } from 'react';

interface ExchangeRates {
  [key: string]: number;
}

interface CurrencyContextType {
  currency: string;
  setCurrency: (currency: string) => void;
  exchangeRates: ExchangeRates;
  convertPrice: (price: string, toCurrency: string) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<string>(() => {
    return localStorage.getItem('selectedCurrency') || 'eur';
  });

  const [exchangeRates] = useState<ExchangeRates>({
    eur: 1,
    usd: 1.08,
    inr: 89.50,
    myr: 5.00,
  });

  // Save currency preference to localStorage
  useEffect(() => {
    localStorage.setItem('selectedCurrency', currency);
  }, [currency]);

  // Convert price from EUR (base) to target currency
  const convertPrice = (price: string | number, toCurrency: string): string => {
    try {
      // Convert to string if it's a number
      const priceStr = typeof price === 'number' ? price.toString() : price;
      
      // Extract numeric value, handling both formats like "100", "100.50", or "€100.50"
      const numPrice = parseFloat(priceStr.replace(/[^0-9.]/g, ''));
      
      if (isNaN(numPrice)) return String(price);

      const rate = exchangeRates[toCurrency] || 1;
      const converted = numPrice * rate;

      // Format with currency symbol
      const currencySymbols: { [key: string]: string } = {
        eur: '€',
        usd: '$',
        inr: '₹',
        myr: 'RM',
      };

      // Round to nearest whole number (remove all decimals)
      const roundedPrice = Math.round(converted);
      
      return `${currencySymbols[toCurrency] || ''}${roundedPrice}`;
    } catch {
      return String(price);
    }
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, exchangeRates, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within CurrencyProvider');
  }
  return context;
};