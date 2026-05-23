import type { BaseResource, Currency } from './common';

export type PackageStatus = 'active' | 'draft';

export interface Package extends BaseResource {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly currency: Currency;
  readonly destination: string;
  readonly duration: string;
  readonly image: string;
  readonly status: PackageStatus;
  readonly type: string;
}
