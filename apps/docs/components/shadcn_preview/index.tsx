import { cn } from '@/lib/cn'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'xyzdocs-radix-ui/components/tabs'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { BoxIcon, CodeIcon, EyeIcon } from 'lucide-react'
import { PreviewCode } from './code'
import { PreviewRender } from './render'

type PreviewProps = {
  name: string
  className?: string
  type?: 'component' | 'block'
}

export const ComponentPreview = async ({
  name,
  className,
  type = 'component',
}: PreviewProps) => {
  const code = await readFile(
    join(process.cwd(), 'examples', 'radix', `${name}.tsx`),
    'utf-8',
  )

  const Component = await import(`@/examples/radix/${name}`).then(
    (module) => module.default,
  )
  return (
    <div
      className={cn(
        'size-full overflow-hidden rounded-lg border bg-background',
        type === 'block' && 'h-[48rem]',
        type === 'component' && 'h-[32rem]',
        className,
      )}
    >
      <Tabs className="size-full gap-0" defaultValue="preview">
        <TabsList className="w-full rounded-none border-b">
          <TabsTrigger value="code">
            <CodeIcon className="text-muted-foreground" size={16} />
            Code
          </TabsTrigger>
          <TabsTrigger value="preview">
            <EyeIcon className="text-muted-foreground" size={16} />
            Preview
          </TabsTrigger>
        </TabsList>
        <TabsContent value="code">
          <PreviewCode code={code} language="tsx" filename={'accordion.tsx'} />
        </TabsContent>
        <TabsContent value="preview">
          <PreviewRender>
            <Component />
          </PreviewRender>
        </TabsContent>
      </Tabs>
    </div>
  )
}
