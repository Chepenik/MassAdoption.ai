const GA_ID = process.env.NEXT_PUBLIC_GA_ID; 

import Script from 'next/script';

export const GoogleAnalytics = () => (
  <>
    <Script 
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} 
      strategy="afterInteractive"
    />
    <Script id="gtag-init">
      {`
        window.dataLayer = window.dataLayer || [];
        window.gtag('js', new Date());
        window.gtag('config', ${GA_ID});
      `}
    </Script>
  </>
)