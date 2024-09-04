"use client";
import { cn } from "@/lib/utils";
import { MenuIcon, Home, Globe } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Dialog, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { usePathname, useRouter } from "next/navigation";

export function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

  const isSpanish = pathname.startsWith("/es");
  const isEnglish = pathname.startsWith("/en");

  const toggleLanguage = () => {
    console.log("Current pathname:", pathname);
    console.log("Is Spanish:", isSpanish);
    console.log("Is English:", isEnglish);

    let newPath;
    if (isSpanish) {
      newPath = `/en${pathname.substring(3)}`;
    } else if (isEnglish) {
      newPath = `/es${pathname.substring(3)}`;
    } else {
      newPath = `/es${pathname}`;
    }

    // Handle root paths
    if (newPath === '/en' || newPath === '/es' || newPath === '/es/') {
      newPath = newPath.replace(/\/$/, ''); // Remove trailing slash
    }

    console.log("New path:", newPath);
    router.push(newPath);
  };

  return (
    <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50] mt-[2rem]">
      <div className="flex justify-between md:w-[720px] w-[95%] border dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 rounded-xl p-2 shadow-lg">
        <Dialog>
          <SheetTrigger className="min-[825px]:hidden p-2 transition">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>fodmap</SheetTitle>
              <SheetDescription>
                {isSpanish
                  ? "Escala y lanza productos con desarrolladores expertos, bajo demanda, a una tarifa mensual fija"
                  : "Scale and launch products with expert developers, on-demand, at a flat monthly fee"}
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
              <DialogClose asChild>
                <Link href={isSpanish ? "/es" : "/en"}>
                  <Button variant="outline" className="w-full">
                    {isSpanish ? "Inicio" : "Home"}
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href={isSpanish ? "/es/quees" : "/en/quees"}>
                  <Button variant="outline" className="w-full">
                    {isSpanish ? "¿Qué es?" : "What is?"}
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link
                  href={isSpanish ? "/es/fodmap-benefits" : "/en/fodmap-benefits"}
                >
                  <Button variant="outline" className="w-full">
                    {isSpanish ? "Beneficios" : "Benefits"}
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href={isSpanish ? "/es/contact" : "/en/contact"}>
                  <Button variant="outline" className="w-full">
                    {isSpanish ? "Contacto" : "Contact"}
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={toggleLanguage}
                >
                  <Globe className="h-[1.2rem] w-[1.2rem] mr-2" />
                  {isSpanish ? "Switch to English" : "Cambiar a Español"}
                </Button>
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog>
        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden ">
            <Link href={isSpanish ? "/es" : "/en"} className="pl-2">
              <h1 className="font-bold">fodmap uy</h1>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2 max-[825px]:hidden">
          <Link href={isSpanish ? "/es/quees" : "/en/quees"}>
            <Button variant="ghost">
              {isSpanish ? "¿Qué es?" : "What is?"}
            </Button>
          </Link>
          <Link href={isSpanish ? "/es/fodmap-benefits" : "/en/fodmap-benefits"}>
            <Button variant="ghost">
              {isSpanish ? "Beneficios" : "Benefits"}
            </Button>
          </Link>
          <Link href={isSpanish ? "/es/contact" : "/en/contact"}>
            <Button variant="ghost">
              {isSpanish ? "Contacto" : "Contact"}
            </Button>
          </Link>
          <Link href={isSpanish ? "/es" : "/en"}>
            <Button variant="ghost">
              <Home className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </Link>
          <Button variant="ghost" onClick={toggleLanguage}>
            <Globe className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
