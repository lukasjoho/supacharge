'use client';
import colors from '@/resolveConfig';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToasterProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Toaster
        toastOptions={{
          // Define default options
          position: 'top-left',
          duration: 3000,
          style: {
            padding: '12px 12px 12px 12px',
            backgroundColor: colors.slate[800],
            color: colors.slate[50],
          },
          iconTheme: {
            primary: colors.slate[50],
            secondary: colors.slate[950],
          },

          success: {
            style: {
              backgroundColor: colors.green[600],
            },
            iconTheme: {
              primary: colors.slate[50],
              secondary: colors.green[600],
            },
          },

          error: {
            style: {
              backgroundColor: colors.red[600],
            },
            iconTheme: {
              primary: colors.slate[50],
              secondary: colors.red[600],
            },
          },
        }}
      />
    </>
  );
};

export default ToasterProvider;
