"use client";

import {
  DashboardSidebarNav,
  DashboardSidebarNavMain,
  DashboardSidebarNavLink,
} from "@/components/dashboard/sidebar";
import { usePathname } from "next/navigation";

export default function SettingsSidebar() {
    const pathName = usePathname()

    const isActive = (path : string) => {
        return pathName === path
    }

  return (
    <aside>
      <DashboardSidebarNav>
        <DashboardSidebarNavMain>
          <DashboardSidebarNavLink href="/App/settings" active={isActive("/App/settings")}>
            My profile
          </DashboardSidebarNavLink>
          <DashboardSidebarNavLink href="/App/settings/theme" active={isActive("/App/settings/theme")}>
            Theme
          </DashboardSidebarNavLink>
          <DashboardSidebarNavLink href="/App/settings/billing" active={isActive("/App/settings/billing")}>
            Billing
          </DashboardSidebarNavLink>
        </DashboardSidebarNavMain>
      </DashboardSidebarNav>
    </aside>
  );
}
