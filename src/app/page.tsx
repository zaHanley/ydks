import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>You Don't Know S***</h1>
      <Button>Button</Button>
    </main>
  );
}
