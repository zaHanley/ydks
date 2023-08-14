import SignInButton from "@/components/SignInButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession();
  if (session?.user) {
    return redirect("/dashboard");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">You Don&apos;t Know S***</CardTitle>
            <CardDescription className="text-xs">
              ... but maybe you do? <br /> prove it.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignInButton text="Sign in with Google" />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
