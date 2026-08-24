import Image from 'next/image'
import { cn } from '@/lib/cn'
import Link from 'next/link'
import { cva } from 'class-variance-authority'
import {
  BatteryChargingIcon,
  FileIcon,
  FileTextIcon,
  Heart,
  SearchIcon,
  SettingsIcon,
  TerminalIcon,
  TimerIcon,
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'xyzdocs-radix-ui/components/ui/accordion'
import React from 'react'

export default function Page() {
  return (
    <main className="text-landing-foreground pt-4 pb-6 dark:text-landing-foreground-dark md:pb-12">
      <div className="relative flex min-h-[600px] h-[70vh] max-h-[900px] border rounded-2xl overflow-hidden mx-auto w-full max-w-[1400px] bg-origin-border"></div>
    </main>
  )
}
