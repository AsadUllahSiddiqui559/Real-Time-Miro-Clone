export default function TestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>
    <p>test layout</p>
    {children}
    </section>
}
