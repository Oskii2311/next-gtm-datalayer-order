import { GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager
        gtmId="GTM-XXXXXXX"
        dataLayer={{ user_id: "example-user" }}
      />
      <body>{children}</body>
    </html>
  );
}
