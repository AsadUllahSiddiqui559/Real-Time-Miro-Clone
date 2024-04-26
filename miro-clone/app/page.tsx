import { Button } from "@/components/ui/button";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
    <Button> click me</Button>
    <Link href="/test">test</Link>
    </div>
  );
}
