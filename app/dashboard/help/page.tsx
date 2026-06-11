"use client";

import React from 'react';
import { PageContainer } from '../../../src/components/layout/PageContainer';

export default function HelpRoute() {
  return (
    <PageContainer>
      <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-foreground tracking-tight">Help Center</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Support resources will be available in the next dashboard phase.
        </p>
      </div>
    </PageContainer>
  );
}
