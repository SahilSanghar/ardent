import Script from "next/script";

export const metadata = {
  title: "Success",
  description: "Successfully submitted the form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Google Analytics Script */}

      {/* <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-17389056295"
      ></Script> */}

      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17389056295"
        ></Script>

        <Script id="google-analytics-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17389056295');
          `}
        </Script>

        <Script id="google-analytics-success">
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-17389056295/4JMxCJzAy_caEKfi3-NA',
              'value': 1.0,
              'currency': 'INR'
            });
          `}
        </Script>
      </head>

      <body>{children}</body>
    </html>
  );
}