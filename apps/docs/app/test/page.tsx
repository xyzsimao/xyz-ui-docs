import { HighlightedCode } from '@/components/highlighted-code'
import { Adaptable, Effortless, Flexible } from './illustrations';
import { Link } from 'xyzdocs-core/framework';
import { Button } from '@/registry/new-york-v4/ui/button';
const flagsSetupCodeblock = `import { flag } from 'flags/next';
export const exampleFlag = flag({
  key: 'example-flag',
  decide() {
    return Math.random() > 0.5;
  },
});`
const flagsImportCodeblock = `import { exampleFlag } from "../flags";

export default async function Page() {
  const example = await exampleFlag();

  return <div>Flag {example ? "on" : "off"}</div>;
}`

const FEATURES = [
  {
    title: 'Works with any provider',
    description:
      'Use any flag provider, or none at all. Flexible integrations for your projects.',
    illustration: <Flexible />,
  },
  {
    title: 'Effortless integration',
    description:
      'Integrate with App Router, Pages Router, and Routing Middleware.',
    illustration: <Effortless />,
  },
  {
    title: 'Release strategically',
    description:
      'Ideal for A/B testing and controlled rollouts. Experiment with confidence.',
    illustration: <Adaptable />,
  },
];


export default async function HomePage() {
  return (
    <div className="flex h-full flex-col">
      {/* Sections */}
      <div className="grid">
        {/* Features */}
        <div className="grid gap-8 py-8 sm:py-20">
          <div className="grid max-w-3xl gap-2 text-balance">
            <h2 className="text-heading-20 sm:text-heading-24 md:text-heading-32 lg:text-heading-40">
              Using flags as code
            </h2>
            <p className="text-lg text-gray-900">
              The SDK sits between your application and the source of your
              flags, helping you follow best practices and keep your website
              fast.
            </p>
          </div>
          <div className="grid gap-6 md:gap-20 md:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title}>
                <div className="flex items-center justify-center">
                  {feature.illustration}
                </div>
                <h3 className="mt-3 text-heading-20 md:mt-6">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-gray-900 md:mt-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Code examples */}
        <div className="grid gap-8 py-8 sm:py-12">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="grid max-w-3xl gap-2 text-balance">
              <h2 className="text-heading-20 sm:text-heading-24 md:text-heading-32">
                Effortless setup
              </h2>
              <p className="text-lg text-gray-900">
                With a simple declarative API to define and use your feature
                flags.
              </p>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="shrink-0 rounded-full"
              asChild
            >
              <Link href="/frameworks/next" prefetch={true}>
                Read the Docs
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 md:gap-20 md:grid-cols-2">
            <HighlightedCode
              code={flagsSetupCodeblock}
              lang="typescript"
              filename="flags.ts"
              caption="Declaring a flag"
            />
            <HighlightedCode
              code={flagsImportCodeblock}
              lang="tsx"
              filename="app/page.tsx"
              caption="Using a flag"
            />
          </div>
        </div>

 

 
      </div>
    </div>
  )
}
