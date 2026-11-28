'use client';

import type { ReactNode } from 'react';
import { useLanguage } from '../i18n/language-provider';

const BOOKING_URL = 'https://meet.saasolution.es/othmanderaz';

export function BookingLink({ children, className }: { children: ReactNode; className?: string }) {
  const { locale } = useLanguage();
  const href = `${BOOKING_URL}?locale=${encodeURIComponent(locale)}`;

  return <a className={className} href={href} target="_blank" rel="noopener">{children}</a>;
}
