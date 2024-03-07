import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admine - FB",
  description: "Generated by create next app",
};

export default function AdminLayout({ children }) {
  return (
    <>
        <span> Admine Navbar Logout</span>
        {children}
    </>
  );
}
