import type { Metadata } from 'next'
import { type ComponentProps, type FC, type ReactNode } from 'react'

import Link from 'xyzdocs-core/link'
import { findSiblings } from 'xyzdocs-core/page-tree'

import {
  DocsBody,
  DocsPage,
  PageLastUpdate,
  MarkdownCopyButton,
  ViewOptionsPopover,
  DocsPageProps,
} from 'xyzdocs-radix-ui/layouts/docs/page'

// import { getSuggestions } from './suggestions';
import { PathUtils } from 'xyzdocs-core/source'
 
import { NotFound } from '@/components/layouts/not-found'
import { createMetadata, getPageImageUrl } from '@/lib/metadata'
import { source } from '@/lib/source'


// function PreviewRenderer({ preview }: { preview: string }): ReactNode {
//   if (preview && preview in Preview) {
//     const Comp = Preview[preview as keyof typeof Preview];
//     return <Comp />;
//   }

//   return null;
// }

export const revalidate = false

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) return <>NotFound</>

  const pageProps = {
    // tableOfContent: {
    //   footer: <SponsorsMarquee />,
    // },
  } satisfies Partial<DocsPageProps>

  // if (page.type === 'openapi') {
  //   return (
  //     <DocsPage full {...pageProps}>
  //       <h1 className="text-[1.75em] font-semibold">{page.data.title}</h1>

  //       <DocsBody>
  //         <OpenAPIPageLazy {...page.data.getOpenAPIPageProps()} />
  //       </DocsBody>
  //     </DocsPage>
  //   );
  // }

  // if (page.type === 'asyncapi') {
  //   return (
  //     <DocsPage full {...pageProps}>
  //       <h1 className="text-[1.75em] font-semibold">{page.data.title}</h1>

  //       <DocsBody>
  //         <AsyncAPIPageLazy {...page.data.getAsyncAPIPageProps()} />
  //       </DocsBody>
  //     </DocsPage>
  //   );
  // }

  // if (page.type === 'graphql') {
  //   return (
  //     <DocsPage full {...pageProps}>
  //       <h1 className="text-[1.75em] font-semibold">{page.data.title}</h1>

  //       <DocsBody>
  //         <GraphQLPageLazy {...page.data.getGraphQLPageProps()} />
  //       </DocsBody>
  //     </DocsPage>
  //   );
  // }

  const { body: Mdx, toc } = await page.data.load()

  return (
    <DocsPage toc={toc} {...pageProps}>
      <h1 className="text-[1.75em] font-semibold">{page.data.title}</h1>
      <p className="text-lg text-fd-muted-foreground mb-2">
        {page.data.description}
      </p>
      <div className="flex flex-row flex-wrap gap-2 items-center border-b pb-6 mb-4">
        {/* <MarkdownCopyButton markdownUrl={`${page.url}.mdx`} />
        <ViewOptionsPopover
          markdownUrl={`${page.url}.mdx`}
          githubUrl={`https://github.com/${owner}/${repo}/blob/dev/apps/docs/content/docs/${page.path}`}
        /> */}
      </div>
      <div className="prose flex-1 text-fd-foreground/90">
        {/* {page.data.preview && <PreviewRenderer preview={page.data.preview} />}
        <FeedbackText onSendAction={onBlockFeedbackAction}> */}
        <Mdx
        // components={getMDXComponents({
        //   ...Twoslash,
        //   a({ href, ...props }) {
        //     const found = source.getPageByHref(href ?? '', {
        //       dir: PathUtils.dirname(page.path),
        //     });

        //     if (!found) return <Link href={href} {...props} />;

        //     return (
        //       <HoverCard>
        //         <HoverCardTrigger
        //           href={found.hash ? `${found.page.url}#${found.hash}` : found.page.url}
        //           {...props}
        //         >
        //           {props.children}
        //         </HoverCardTrigger>
        //         <HoverCardContent className="text-sm">
        //           <p className="font-medium">{found.page.data.title}</p>
        //           <p className="text-fd-muted-foreground">{found.page.data.description}</p>
        //         </HoverCardContent>
        //       </HoverCard>
        //     );
        //   },
        //   Banner,
        //   Mermaid,
        //   TypeTable,
        //   Wrapper,
        //   blockquote: Callout as unknown as FC<ComponentProps<'blockquote'>>,
        //   DocsCategory: ({ url }) => {
        //     return <DocsCategory url={url ?? page.url} />;
        //   },
        //   Installation,
        //   Customization,
        // })}
        />
        {/* </FeedbackText> */}
        {/* {page.data.index ? <DocsCategory url={page.url} /> : null} */}
      </div>
      {/* <Feedback onSendAction={onPageFeedbackAction} /> */}
      {/* {lastModified && <PageLastUpdate date={lastModified} />} */}
    </DocsPage>
  )
}

// function DocsCategory({ url }: { url: string }) {
//   return (
//     <Cards>
//       {findSiblings(source.getPageTree(), url).map((item) => {
//         if (item.type === 'separator') return;
//         if (item.type === 'folder') {
//           if (!item.index) return;
//           item = item.index;
//         }

//         return (
//           <Card key={item.url} title={item.name} href={item.url}>
//             {item.description}
//           </Card>
//         );
//       })}
//     </Cards>
//   );
// }

export async function generateMetadata(
  props: PageProps<'/docs/[[...slug]]'>,
): Promise<Metadata> {
  const { slug = [] } = await props.params
  const page = source.getPage(slug)
  if (!page)
    return createMetadata({
      title: 'Not Found',
    })

  const description =
    page.data.description ?? 'The library for building documentation sites'

  const image = {
    url: getPageImageUrl(page).url,
    width: 1200,
    height: 630,
  }

  return createMetadata({
    title: page.data.title,
    description,
    openGraph: {
      url: `/docs/${page.slugs.join('/')}`,
      images: [image],
    },
    twitter: {
      images: [image],
    },
  })
}

export function generateStaticParams() {
  return source.generateParams()
}
