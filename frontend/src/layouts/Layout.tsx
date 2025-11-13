import React from 'react'

import Main from './Main'
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import { SidebarProvider, useSidebar } from '../context/SidebarContext';

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  return (
    <div className="min-h-screen xl:flex">
      <AppSidebar/>

      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <AppHeader/>
        <Main>
          test
        </Main>
      </div>
    </div>
  )
}

const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;