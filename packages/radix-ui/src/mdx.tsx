import Link from 'xyzdocs-core/link';
import type {
  AnchorHTMLAttributes,
  FC,
  HTMLAttributes,
  ImgHTMLAttributes,
  TableHTMLAttributes,
} from 'react';
import { Heading } from './components/heading';

const defaultMdxComponents = {
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => <Heading as="h1" {...props} />,
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => <Heading as="h2" {...props} />,
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => <Heading as="h3" {...props} />,
  h4: (props: HTMLAttributes<HTMLHeadingElement>) => <Heading as="h4" {...props} />,
  h5: (props: HTMLAttributes<HTMLHeadingElement>) => <Heading as="h5" {...props} />,
  h6: (props: HTMLAttributes<HTMLHeadingElement>) => <Heading as="h6" {...props} />,
}

export { defaultMdxComponents as default };