import { ComponentProps, Fragment, useState } from 'react'
import type { HomeLayoutProps } from '.'
import Link from 'xyzdocs-core/link'
import { LinkItem, LinkItemType, NavOptions, useLinkItems } from '../shared'
import { cva } from 'class-variance-authority'
import { buttonVariants } from '@/components/ui/button'
import React from 'react'
 
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import cn from 'cnfast'
 
import { ThemeToggle } from '../shared/theme-toggle'
import { useIsScrollTop } from '@/utils/use-is-scroll-top'

export const navItemVariants = cva('[&_svg]:size-4', {
  variants: {
    variant: {
      main: 'inline-flex items-center gap-1 p-2 text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground data-[active=true]:text-fd-primary',
      button: buttonVariants({
        color: 'secondary',
        className: 'gap-1.5',
      }),
      icon: buttonVariants({
        color: 'ghost',
        size: 'icon',
      }),
    },
  },
  defaultVariants: {
    variant: 'main',
  },
})

function isSecondary(item: LinkItemType): boolean {
  if ('secondary' in item && item.secondary != null) return item.secondary

  return item.type === 'icon'
}

function NavigationMenuLinkItem({
  item,
  ...props
}: {
  item: LinkItemType
  className?: string
}) {
  if (item.type === 'custom') return <div {...props}>{item.children}</div>

  if (item.type === 'menu') {
    const children = item.items.map((child, j) => {
      if (child.type === 'custom') {
        return <Fragment key={j}>{child.children}</Fragment>
      }

      const {
        banner = child.icon ? (
          <div className="w-fit rounded-md border bg-fd-muted p-1 [&_svg]:size-4">
            {child.icon}
          </div>
        ) : null,
        ...rest
      } = child.menu ?? {}

      return (
        <NavigationMenuLink key={`${j}-${child.url}`} asChild>
          <Link
            href={child.url}
            external={child.external}
            {...rest}
            className={cn(
              'flex flex-col gap-2 rounded-lg border bg-fd-card p-3 transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground',
              rest.className,
            )}
          >
            {rest.children ?? (
              <>
                {banner}
                <p className="text-base font-medium">{child.text}</p>
                <p className="text-sm text-fd-muted-foreground empty:hidden">
                  {child.description}
                </p>
              </>
            )}
          </Link>
        </NavigationMenuLink>
      )
    })

    return (
      <NavigationMenuItem {...props}>
        <NavigationMenuTrigger className={cn(navItemVariants(), 'rounded-md')}>
          {item.url ? (
            <Link href={item.url} external={item.external}>
              {item.text}
            </Link>
          ) : (
            item.text
          )}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="grid grid-cols-1 gap-2 p-4 md:grid-cols-2 lg:grid-cols-3">
          {children}
        </NavigationMenuContent>
      </NavigationMenuItem>
    )
  }

  return (
    <NavigationMenuItem {...props}>
      <NavigationMenuLink asChild>
        <LinkItem
          item={item}
          aria-label={item.type === 'icon' ? item.label : undefined}
          className={cn(navItemVariants({ variant: item.type }))}
        >
          {item.type === 'icon' ? item.icon : item.text}
        </LinkItem>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

function HeaderNavigationMenu({
  transparentMode = 'none',
  ...props
}: ComponentProps<'div'> & {
  transparentMode?: NavOptions['transparentMode']
}) {
  const [value, setValue] = useState('')
  const isTop = useIsScrollTop({ enabled: transparentMode === 'top' }) ?? true
  const isTransparent =
    transparentMode === 'top' ? isTop : transparentMode === 'always'

  return (
    <NavigationMenu value={value} onValueChange={setValue} asChild>
      <header
        id="nd-nav"
        {...props}
        className={cn('sticky h-14 top-0 z-40', props.className)}
      >
        <div
          className={cn(
            'backdrop-blur-lg border-b transition-colors *:mx-auto *:max-w-(--fd-layout-width)',
            value.length > 0 && 'max-lg:shadow-lg max-lg:rounded-b-2xl',
            (!isTransparent || value.length > 0) && 'bg-fd-background/80',
          )}
        >
          <NavigationMenuList
            className="flex h-14 w-full items-center px-4"
            asChild
          >
            <nav>{props.children}</nav>
          </NavigationMenuList>

          <NavigationMenuViewport />
        </div>
      </header>
    </NavigationMenu>
  )
}

export function Header({
  nav = {},
  //   i18n = false,
  links,
  //   githubUrl,
  themeSwitch = {},
  //   searchToggle = {},
}: HomeLayoutProps) {
  const { navItems, menuItems } = useLinkItems({ links })
  return (
    <HeaderNavigationMenu>
      {/* {renderTitleNav(nav, {
        className: 'inline-flex items-center gap-2.5 font-semibold',
      })} */}
      {nav.children}
      <ul className="flex flex-row items-center gap-2 px-6 max-sm:hidden">
        {navItems
          .filter((item) => !isSecondary(item))
          .map((item, i) => (
            <NavigationMenuLinkItem key={i} item={item} className="text-sm" />
          ))}
      </ul>
      <div className="flex flex-row items-center justify-end gap-1.5 flex-1 max-lg:hidden">
        {/* {searchToggle.enabled !== false &&
          (searchToggle.components?.lg ?? (
            <LargeSearchToggle
              className="w-full rounded-full ps-2.5 max-w-[240px]"
              hideIfDisabled
            />
          ))} */}
        {themeSwitch.enabled !== false &&
          (themeSwitch.component ?? <ThemeToggle mode={themeSwitch?.mode} />)}
        {/* {i18n && (
          <LanguageToggle>
            <Languages className="size-5" />
          </LanguageToggle>
        )} */}
        <ul className="flex flex-row gap-2 items-center empty:hidden">
          {navItems.filter(isSecondary).map((item, i) => (
            <NavigationMenuLinkItem
              key={i}
              className={cn(
                item.type === 'icon' && '-mx-1 first:ms-0 last:me-0',
              )}
              item={item}
            />
          ))}
        </ul>
      </div>
    </HeaderNavigationMenu>
  )
}

export function renderTitleNav(
  { title, url = '/' }: Partial<NavOptions>,
  props: ComponentProps<'a'>,
) {
  if (typeof title === 'function') return title({ href: url, ...props })
  return (
    <Link href={url} {...props}>
      {title}
    </Link>
  )
}
