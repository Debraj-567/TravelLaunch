import type { ReactNode, ElementType } from 'react';
import type { BadgeProps as UIBadgeProps } from '../components/ui/Badge';
import type { ButtonProps as UIButtonProps } from '../components/ui/Button';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

export type ButtonProps = UIButtonProps;

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export type BadgeProps = UIBadgeProps;

export interface EmptyStateProps {
  icon?: ElementType;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
  children?: ReactNode;
}
