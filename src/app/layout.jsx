import { Inter } from "next/font/google";
import "../index.css";
import MainLayout from "../layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pharma ERP",
  description: "Comprehensive ERP solution for pharmacies",
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
