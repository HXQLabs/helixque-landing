'use client';

import { type HTMLAttributes, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/buttons/buttons';

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @defaultValue 'normal'
   */
  variant?: 'rainbow' | 'normal';
  /**
   * @defaultValue true
   */

  href?: string;
  target?: string;
  changeLayout?: boolean;
  /**
   * Banner message
   */
  message?: string;
  /**
   * @defaultValue '3rem'
   */
  height?: string;
}

export function Banner({
  id,
  variant = 'normal',
  changeLayout = true,
  message,
  href = 'https://pro.ui-layouts.com',
  target = '_blank',
  height = 'min(3rem, 8vh)', // Default to viewport-relative height with min constraint
  ...props
}: BannerProps): React.ReactElement {
  const [open, setOpen] = useState(true);
  const globalKey = id ? `banner-${id}` : undefined;

  useEffect(() => {
    if (globalKey) setOpen(sessionStorage.getItem(globalKey) !== 'true');
  }, [globalKey]);

  const onClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);
    if (globalKey) {
      sessionStorage.setItem(globalKey, 'true');
      // Dispatch custom event for immediate state updates
      window.dispatchEvent(new CustomEvent('bannerClosed', { detail: { bannerId: globalKey } }));
    }
  }, [globalKey]);

  const bannerContent = (
    <div
      id={id}
      {...props}
      style={{ height: open ? height : '0' }}
      className={cn(
        'relative z-50 flex flex-row font-mono items-center justify-center px-2 sm:px-4 py-1.5 sm:py-2 text-center text-xs sm:text-sm font-medium transition-all duration-300 min-h-[2.5rem] sm:min-h-[3rem]',
        variant === 'rainbow' && ' ',
        'dark:bg-zinc-950 bg-zinc-50',
        !open && 'hidden',
        props.className
      )}
    >
      {changeLayout && open ? (
        <style>{`
        :root:not(.${globalKey ?? 'banner-never'}) { --banner-height: ${height}; }
        `}</style>
      ) : null}
      {globalKey ? (
        <style>{`.${globalKey} #${id} { display: none; }`}</style>
      ) : null}
      {id ? (
        <script
          dangerouslySetInnerHTML={{
            __html: `if (sessionStorage.getItem('${globalKey}') === 'true') document.documentElement.classList.add('${globalKey}');`,
          }}
        />
      ) : null}

      {variant === 'rainbow' ? <RainbowLayer /> : null}
      {message || props.children}
      {id ? (
        <button
          type='button'
          aria-label='Close Banner'
          onClick={onClick}
          className={cn(
            buttonVariants({
              variant: 'ghost',
              className:
                'absolute end-2 top-1/2 -translate-y-1/2 text-muted-foreground',
              size: 'icon',
            })
          )}
        >
          <X className='h-4 w-4' />
        </button>
      ) : null}
    </div>
  );

  return (
    <>
      {target === '_self' ? (
        <Link href={href} className='block group w-full relative'>
          {bannerContent}
        </Link>
      ) : (
        <a href={href} target={target} className='block group w-full relative'>
          {bannerContent}
        </a>
      )}
    </>
  );
}

const RainbowLayer = () => {
  return (
    <>
      <div className='absolute inset-0 z-[-1] rainbow-banner-gradient-1' />
      <div className='absolute inset-0 z-[-1] rainbow-banner-gradient-2' />
    </>
  );
};
