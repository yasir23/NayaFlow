import React from 'react';

declare module 'react-syntax-highlighter' {
  export interface SyntaxHighlighterProps {
    language?: string;
    style?: Record<string, React.CSSProperties>;
    children?: React.ReactNode;
    className?: string;
    customStyle?: React.CSSProperties;
    codeTagProps?: React.HTMLAttributes<HTMLElement>;
    useInlineStyles?: boolean;
    showLineNumbers?: boolean;
    startingLineNumber?: number;
    lineNumberStyle?: React.CSSProperties;
    wrapLines?: boolean;
    lineProps?: LineTagPropsFunction | React.HTMLAttributes<HTMLElement>;
    renderer?: (props: RendererProps) => React.ReactNode;
    PreTag?: React.ComponentType<React.HTMLAttributes<HTMLElement>> | keyof JSX.IntrinsicElements;
    CodeTag?: React.ComponentType<React.HTMLAttributes<HTMLElement>> | keyof JSX.IntrinsicElements;
    showInlineLineNumbers?: boolean;
  }

  interface LineTagPropsFunction {
    (lineNumber: number): React.HTMLAttributes<HTMLElement>;
  }

  interface RendererProps {
    rows: React.ReactNode[];
    stylesheet: string;
    useInlineStyles: boolean;
  }

  export const Light: React.ComponentType<SyntaxHighlighterProps>;
  export const Prism: React.ComponentType<SyntaxHighlighterProps>;

  // Add other exports as needed
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
  export const tomorrow: Record<string, React.CSSProperties>;
  export const prism: Record<string, React.CSSProperties>;
  export const darcula: Record<string, React.CSSProperties>;
  export const okaidia: Record<string, React.CSSProperties>;
  export const dracula: Record<string, React.CSSProperties>;
  export const vs: Record<string, React.CSSProperties>;
  export const xonokai: Record<string, React.CSSProperties>;
  export const atomDark: Record<string, React.CSSProperties>;
  
  // Add other style exports as needed
} 