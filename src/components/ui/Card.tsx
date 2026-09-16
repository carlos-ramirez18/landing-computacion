import type { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Marca la card como destacada con un borde de acento a la izquierda
   * (evocando un pin de conector), en vez de la sombra genérica que
   * suelen usar todas las cards por igual. Usar con criterio: si todo
   * está destacado, nada lo está (ej. un producto en oferta, el plan
   * recomendado).
   */
  accent?: boolean;
}

export function Card({ accent = false, className = '', children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-sm border border-line bg-paper p-6 ${
        accent ? 'border-l-4 border-l-copper' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
