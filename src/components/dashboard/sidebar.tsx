// * ESTRUTURA SEGUINDO COMPOSITION PATTERN

import Link from "next/link";

import { cn } from "@/lib/utils";

export type DashboardSidebarGenericProps<T = any> = {
  children: React.ReactNode;
  className?: string;
} & T;

// * ESTRUTURA GERAL
export function DashboardSidebar({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return (
    <aside
      className={cn(
        ["border-r border-border flex flex-col space-y-6"],
        className
      )}
    >
      {children}
    </aside>
  );
}

// * CABEÇALHO
export function DashboardSidebarHeader({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return (
    <header className={cn(["px-6 py-3 border-b border-border"], className)}>
      {children}
    </header>
  );
}

// * TITULO DO CABEÇALHO
export function DashboardSidebarHeaderTitle({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return <h2 className={cn([""], className)}>{children}</h2>;
}

// * "DIV" PRINCIPAL PARA AS NAVS
export function DashboardSidebarMain({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return <main className={cn(["px-3"], className)}>{children}</main>;
}

// * ESTRUTURA DA NAV
export function DashboardSidebarNav({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return <nav className={cn([""], className)}>{children}</nav>;
}

// * CABEÇALHO DA NAV
export function DashboardSidebarNavHeader({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return <header className={cn([""], className)}>{children}</header>;
}

// * TITULO DO CABEÇALHO
export function DashboardSidebarNavHeaderTitle({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return (
    <div
      className={cn(
        ["text-xs uppercase text-muted-foreground ml-3"],
        className
      )}
    >
      {children}
    </div>
  );
}

// * CORPO PRINCIPAL DA NAV
export function DashboardSidebarNavMain({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return <main className={cn(["flex flex-col"], className)}>{children}</main>;
}

type DashboardSidebarNavLinkProps = {
  href: string;
  active?: boolean;
};

// * LINKS
export function DashboardSidebarNavLink({
  children,
  className,
  href,
  active,
}: DashboardSidebarGenericProps<DashboardSidebarNavLinkProps>) {
  return (
    <Link
      href={href}
      className={cn(
        ["flex items-center text-sm px-3 py-2 rounded-md"],
        active && "bg-secondary",
        className
      )}
    >
      {children}
    </Link>
  );
}

// * FOOTER
export function DashboardSidebarFooter({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return (
    <footer className={cn(["p-6 mt-auto border-t border-border"], className)}>
      {children}
    </footer>
  );
}
