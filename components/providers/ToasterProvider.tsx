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
          position: 'bottom-right',
          duration: 3000,
          style: {
            padding: '16px 12px 16px 12px',
            backgroundColor: `${colors.slate[800]}90`,
            border: `1px solid ${colors.slate[800]}`,
            color: colors.slate[50],
            backdropFilter: 'blur(20px)',
          },

          loading: {
            icon: '👀',
            style: {
              background: colors.slate[950],
              color: 'white',
              border: `1px solid ${colors.slate[800]}`,
            },
            iconTheme: {
              primary: 'white',
              secondary: colors.slate[950],
            },
          },
          success: {
            style: {
              background: `${colors.green[600]}75`,
              border: `1px solid ${colors.green[600]}`,
              color: 'white',
            },
            iconTheme: {
              primary: 'white',
              secondary: colors.green[600],
            },
          },

          error: {
            style: {
              background: colors.red[600],
              color: 'white',
            },

            iconTheme: {
              primary: 'white',
              secondary: colors.red[600],
            },
          },
        }}
      />
    </>
  );
};

export default ToasterProvider;
