'use client';

import Script from 'next/script'

export default function GoogleAnalytics({GA_MEASUREMENT_ID} : {GA_MEASUREMENT_ID : string}){
    return (
        <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZLZVT2QX55"></script>
            <Script id='google-analytics' strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-ZLZVT2QX55');
                `,
                }}
            />
        </>
)}