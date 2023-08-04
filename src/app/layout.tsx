import './globals.css'
import type { Metadata } from 'next'

import { SessionProvider } from "next-auth/react"

export const metadata: Metadata = {
  title: 'Emotional Intelligence',
  description: 'Lean about your emotions and how to better express your feelings.',
}

type RootLayoutProps = {
  children: React.ReactNode;
  Component: any;
  pageProps: {
    session: any;
  };
};



export default function RootLayout({ 
  // og code
  // children, }: { children: React.ReactNode }) 

  children, Component, pageProps }: RootLayoutProps)  

  //new code to add
  // Component, pageProps: { session, ...pageProps } }) 


  {
  return (
    <SessionProvider session={pageProps.session}>

    <html lang="en">


    

      <body>
        <Component {...pageProps} />
        {children}
      </body>
    </html>

    </SessionProvider>
  )
}
