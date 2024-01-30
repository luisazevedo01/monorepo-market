'use client'
import GraphQLProvider from '../graphql/graphql-provider';
import { Inter } from 'next/font/google'
import '/src/styles/globals.css'
import NavBar from '../components/navbar/nav-bar';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import React, { useState } from 'react';
import { theme } from '../theme/theme';
import { ClipLoader } from 'react-spinners';
import { Loading, LoadingProvider } from '../context/loading';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <LoadingProvider>
            <Loading />
            <NavBar />
            <AppRouterCacheProvider>
              <GraphQLProvider>

                {children}

              </GraphQLProvider>
            </AppRouterCacheProvider>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
