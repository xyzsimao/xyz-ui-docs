import defaultMdxComponents from 'xyzdocs-radix-ui/mdx';
import * as FilesComponents from 'xyzdocs-radix-ui/components/files'
import * as TabsComponents from 'xyzdocs-radix-ui/components/tabs'
import type { MDXComponents } from 'mdx/types';
import { Accordion, Accordions } from 'xyzdocs-radix-ui/components/accordion'
import * as icons from 'lucide-react';
import { Color } from './components/color'

export function getMDXComponents(components?: MDXComponents) {
  return {
    // ...(icons as unknown as MDXComponents),
    Color,
    ...defaultMdxComponents,
    ...TabsComponents,
    ...FilesComponents,
    Accordion,
    Accordions,
    ...components,
  } satisfies MDXComponents
}

// declare module 'mdx/types.js' {
//   // Augment the MDX types to make it understand React.
//   // eslint-disable-next-line @typescript-eslint/no-namespace
//   namespace JSX {
//     type Element = React.JSX.Element;
//     type ElementClass = React.JSX.ElementClass;
//     type ElementType = React.JSX.ElementType;
//     type IntrinsicElements = React.JSX.IntrinsicElements;
//   }
// }

// declare global {
//   type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
// }
