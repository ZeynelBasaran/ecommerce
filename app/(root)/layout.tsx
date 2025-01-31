import Footer from "@/components/footer";
import Header from "@/components/shared/header/header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="container h-screen flex flex-col">
        <Header />
        <main className="">
            {children}
        </main>
        <Footer />
      </div>
    );
  }
  