'use client'
import { type Framework, FrameworkProvider } from '@/framework/index'
import type { ReactNode } from 'react'
import { useParams, usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'

const DefaultLink = 'a' as unknown as Framework['Link']

export function NextProvider({
  children,
  Link: CustomLink,
  Image: CustomImage,
}: {
  children: ReactNode
  Link?: Framework['Link']
  Image?: Framework['Image']
}) {
  return (
    <FrameworkProvider
      usePathname={usePathname}
      useRouter={useRouter}
      useParams={useParams}
      Link={CustomLink ?? DefaultLink}
      Image={CustomImage ?? (Image as Framework['Image'])}
    >
      {children}
    </FrameworkProvider>
  )
}
