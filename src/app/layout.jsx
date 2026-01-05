import { Inter } from "next/font/google";
import "../index.css";
import MainLayout from "../layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Pharmacy Software in India | Mediyaam - Pharmacy Management System",
  description: "India's best pharmacy management software. Complete pharmacy billing software with POS, inventory, and GST compliance. Trusted by 10,000+ medical stores across India.",
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
