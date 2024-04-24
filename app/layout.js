import {
  Inter,
  Delius_Swash_Caps,
  Kolker_Brush,
  Kumbh_Sans,
  Klee_One,
  DM_Serif_Text,
  Khula,
} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const delius = Delius_Swash_Caps({
  subsets: ["latin"],
  variable: "--delius",
  weight: "400",
});
const kolker = Kolker_Brush({
  subsets: ["latin"],
  variable: "--kolker",
  weight: "400",
});
const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  variable: "--dmSerif",
  weight: "400",
});
const klee = Klee_One({
  subsets: ["latin"],
  variable: "--klee",
  weight: ["400", "600"],
});
const kumbh = Kumbh_Sans({
  subsets: ["latin"],
  variable: "--kumbh",
  weight: ["100", "200", "300", "400", "500"],
});
const khula = Khula({
  subsets: ["latin"],
  variable: "--khula",
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${khula.variable} ${inter.variable} ${delius.variable} ${kolker.variable} ${kumbh.variable} ${klee.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
