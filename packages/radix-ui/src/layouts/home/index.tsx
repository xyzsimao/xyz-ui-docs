'use client'

import { cn } from '@/utils/cn.js';
import { type ComponentProps, createContext, type FC, use } from 'react'
import { BaseLayoutProps, NavOptions } from '../shared';
import { Header } from './client';
import React from 'react';


export interface HomeLayoutProps extends BaseLayoutProps {
  nav?: Partial<
    NavOptions & {
      /**
       * Open mobile menu when hovering the trigger
       */
      enableHoverToOpen?: boolean;
    }
  >;
}

export function HomeLayout(props: HomeLayoutProps & ComponentProps<'main'>) {
  const { nav = {}, links,   githubUrl,  themeSwitch = {}, searchToggle, ...rest } = props;

  return (
    <main
      id="nd-home-layout"
      {...rest}
      className={cn('flex flex-1 flex-col [--fd-layout-width:1400px]', rest.className)}
    >
      {nav.enabled !== false &&
        (nav.component ?? ( 
          <Header
            links={links}
            nav={nav}
            themeSwitch={themeSwitch}
            // searchToggle={searchToggle}
            // i18n={i18n}
            // githubUrl={githubUrl}
          />
        ))}
      {props.children}
    </main>
  );
}