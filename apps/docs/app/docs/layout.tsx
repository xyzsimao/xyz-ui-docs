import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const base = baseOptions();

  return (
    <>
              {children}
    </>

  )
}