"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { DashboardLayout as LegacyDashboardLayout } from '../../src/layouts/DashboardLayout';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <LegacyDashboardLayout currentPath={pathname}>
      {children}
    </LegacyDashboardLayout>
  );
}
