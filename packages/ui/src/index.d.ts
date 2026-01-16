declare module 'myworkspace-ui' {
  export interface ButtonProps {
    text?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    [key: string]: any;
  }

  export const Button: React.FC<ButtonProps>;
}