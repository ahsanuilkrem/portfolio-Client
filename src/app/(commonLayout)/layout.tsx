import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";


export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div className=" bg-blue-50">
       <Navbar />
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </div>
     
    </>
  );
}
