import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOSWrapper from "@/components/AOSWrapper"; 

export const metadata: Metadata = {
  title: "RAKEZ",
  description: "",
   icons: {
    icon: "/favicon.svg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AOSWrapper> 
          <Header />
          {children}
          <Footer />
        </AOSWrapper>
      </body>
    </html>
  );
}
