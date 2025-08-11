import {Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";





const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SmartFin AI",
  description: "Budget Tracker",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          {/* header */}

          <Header />
         <ThemeProvider attribute="class" 
         defaultTheme="light" enableSystem={false}>
          <main className="min-h-screen">{children}</main>
         </ThemeProvider>

         {/* Toaster for toast messages */}
         <Toaster richColors position="bottom-right" />

          {/* footer */}
          {/* <Footer/> */}
          <footer className="pt-4 pb-2">
          <div className="">
                <p className="text-center text-muted-foreground text-sm pb-5">
                  ©smartfinai@gmail.com 2025. All rights reserved.
                  <br />
                  SmartFin AI | Made by Dhanish S | team-smartfinai@2025.
                </p>
              </div>
          </footer>
          {/* Chatbase Embed Script */}
          <script
  dangerouslySetInnerHTML={{
    __html: `(function(){
      if(!window.chatbase||window.chatbase("getState")!=="initialized"){
        window.chatbase=(...arguments)=>{
          if(!window.chatbase.q){window.chatbase.q=[]}
          window.chatbase.q.push(arguments)
        };
        window.chatbase=new Proxy(window.chatbase,{
          get(target,prop){
            if(prop==="q"){return target.q}
            return(...args)=>target(prop,...args)
          }
        })
      }
      const onLoad=function(){
        const script=document.createElement("script");
        script.src="https://www.chatbase.co/embed.min.js";
        script.id="${process.env.NEXT_PUBLIC_CHATBASE_ID}";
        script.domain="www.chatbase.co";
        document.body.appendChild(script)
      };
      if(document.readyState==="complete"){
        onLoad()
      }else{
        window.addEventListener("load",onLoad)
      }
    })();`,
  }}
></script>

        </body>
      </html>
    </ClerkProvider>
  );
}
