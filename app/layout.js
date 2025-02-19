import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const host_Grotesk=Host_Grotesk({
  subsets:['latin']
})

export const metadata = {
  title: "AI Logo Maker - Hafeez Baig Project",
  description: "Create a logo in seconds with AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={host_Grotesk.className}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
