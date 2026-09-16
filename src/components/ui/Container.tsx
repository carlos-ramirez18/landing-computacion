import type { HTMLAttributes } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement>;

/**
 * Envoltorio de ancho máximo consistente para el contenido de cada
 * sección. Centraliza el max-width y el padding horizontal para que
 * no se repita (ni se desalinee) sección por sección.
 */
export function Container({ className = '', children, ...props }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 ${className}`} {...props}>
      {children}
    </div>
  );
}
