import { CodeBlock } from "../code-block"

 

type PreviewCodeProps = {
  code: string
  language: string
  filename: string
}

export const PreviewCode = ({ code, language }: PreviewCodeProps) => {
  return <CodeBlock code={code} lang={language}></CodeBlock>
}
