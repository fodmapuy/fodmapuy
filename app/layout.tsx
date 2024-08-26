// "use client";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { NavBar } from "@/components/navbar";
// import Timeline from "@/components/home-page/timeline";
// import { useState, useEffect } from "react";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [activeSection, setActiveSection] = useState<string | null>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     const sections = document.querySelectorAll("section[id]");
//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <div className="fixed inset-0 -z-10 bg-gradient-radial" />
//         <NavBar />
//         <div className="relative max-w-7xl mx-auto">
//           <div className="hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-48 z-10">
//             <Timeline className="h-full w-full" activeSection={activeSection} />
//           </div>
//           <main className="pt-16">{children}</main>
//         </div>
//       </body>
//     </html>
//   );
// }
// checkpoint 1

"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import Timeline from "@/components/home-page/timeline";
import { useState, useEffect, useCallback } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeSection, setActiveSection] = useState<string>("welcome");

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Detect when 10% of the section is visible
    });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed inset-0 -z-10 bg-gradient-radial" />
        <NavBar />
        <div className="relative max-w-7xl mx-auto">
          <div className="hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-48 z-10">
            <Timeline className="h-full w-full" activeSection={activeSection} />
          </div>
          <main className="pt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
