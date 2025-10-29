'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { MouseEvent, ReactNode } from 'react';

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  [key: string]: unknown;
}

export default function TransitionLink({ href, children, className, onClick, ...props }: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Пропускаем если это внешняя ссылка или якорь
    if (href.startsWith('http') || href.startsWith('#')) {
      return;
    }

    // Если кликаем на ту же страницу - просто закрываем меню и ничего не делаем
    if (pathname === href) {
      e.preventDefault();
      if (onClick) {
        onClick(e);
      }
      return;
    }

    e.preventDefault();
    
    // Вызываем переданный onClick (например, закрытие бургер-меню)
    if (onClick) {
      onClick(e);
    }
    
    // Отправляем событие для начала transition
    window.dispatchEvent(new CustomEvent('start-page-transition'));
    
    // Небольшая задержка для запуска анимации
    setTimeout(() => {
      router.push(href);
    }, 50);
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

