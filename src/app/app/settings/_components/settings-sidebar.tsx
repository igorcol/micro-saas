"use client";

import {
  DashboardSidebarNav,
  DashboardSidebarNavMain,
  DashboardSidebarNavLink,
} from "@/components/dashboard/sidebar";

export default function SettingsSidebar() {
  return (
    <aside>
      <DashboardSidebarNav>
        <DashboardSidebarNavMain>
          <DashboardSidebarNavLink href="/App/settings/home">
            My profile
          </DashboardSidebarNavLink>
          <DashboardSidebarNavLink href="/App/settings/theme">
            Theme
          </DashboardSidebarNavLink>
          <DashboardSidebarNavLink href="/App/settings/billing">
            Billing
          </DashboardSidebarNavLink>
        </DashboardSidebarNavMain>
      </DashboardSidebarNav>
    </aside>
  );
}
