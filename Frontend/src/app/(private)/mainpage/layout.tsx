// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function MainPageLayout({
//   children,
// }: {
//   children: React.ReactNode;
//   // children: React.PropsWithChildren;
// }) {
//   return (
//     <html lang="en">
//       {/* <body className={inter.className}>{children}</body> */}
//       <body className={inter.className}>
//         <AntdRegistry>{children}</AntdRegistry>
//       </body>
//     </html>
//   );
// }

export default function MainPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <AntdRegistry>{children}</AntdRegistry>
      {/* {children} */}
    </section>
  );
}