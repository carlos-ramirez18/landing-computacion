import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 ' +
  'font-heading text-sm font-medium transition-colors ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ' +
  'disabled:pointer-events-none disabled:opacity-50';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-copper text-paper hover:bg-copper-dark focus-visible:outline-copper-dark',
  secondary:
    'border border-steel bg-transparent text-steel hover:bg-steel hover:text-paper focus-visible:outline-steel',
  ghost: 'bg-transparent text-ink hover:bg-line focus-visible:outline-ink',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

/** Botón para acciones dentro de la página (ej. abrir un modal a futuro). */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className = '', ...props }, ref) => (
    <button
      ref={ref}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  )
);
Button.displayName = 'Button';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
}

/**
 * Mismo look que Button, pero como <a>. Es lo que se usa para los CTA
 * reales de este proyecto: tel:, mailto:, wa.me y anchors internos —
 * son navegación, no acciones de JS, así que el elemento semánticamente
 * correcto es un link, no un botón.
 */
export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ variant = 'primary', className = '', ...props }, ref) => (
    <a
      ref={ref}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  )
);
ButtonLink.displayName = 'ButtonLink';
