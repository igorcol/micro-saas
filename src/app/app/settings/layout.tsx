import { DashboardPage, DashboardPageHeader, DashboardPageHeaderTitle, DashboardPageMain } from "@/components/dashboard/page";
import { DashboardSidebarNav, DashboardSidebarNavMain, DashboardSidebarNavLink } from "@/components/dashboard/sidebar";
import { PropsWithChildren } from "react";
import SettingsSidebar from "./_components/settings-sidebar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Settings</DashboardPageHeaderTitle>
      </DashboardPageHeader>

      <DashboardPageMain>   
        <div className="grid grid-cols-[16rem_1fr]">
          <SettingsSidebar />
          <div>{children}</div>
        </div>
      </DashboardPageMain>

    </DashboardPage>
  );
}
