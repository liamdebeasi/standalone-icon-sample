import { InjectionToken, Optional, Provider, SkipSelf } from '@angular/core';

export function provideIcons(icons: Record<string, string>): Provider[] {
  return [
    {
      provide: IonIconsToken,
      useFactory: (parentIcons?: Record<string, string>[]) => ({
        ...parentIcons?.reduce((acc, icons) => ({ ...acc, ...icons }), {}),
        ...icons,
      }),
      deps: [[IonIconsToken, new Optional(), new SkipSelf()]],
      multi: true,
    },
  ];
}

export const IonIconsToken = new InjectionToken<Record<string, string>[]>(
  'Icons Token',
);
