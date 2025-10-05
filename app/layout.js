import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";
const inter = Inter({ subsets:["latin"]});
export const metadata = {
  title: "medimeet",
  description: "online appointment for doctors",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme:dark,
    }}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} `}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/*header*/}
            <Header/>
        <main className="min-h-screen">
          <Toaster richColors />
          {children}
        </main>
        {/*footer*/}
        <footer>
          <div className="container mx-auto py-4 text-center text-gray-200">
            <p>
              &copy; 2025 medimeet. All rights reserved.
            </p>
          </div>
        </footer>
          </ThemeProvider>
      </body>
    </html>
     </ClerkProvider>
  );
}
