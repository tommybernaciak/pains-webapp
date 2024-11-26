import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Card>
          <CardHeader>
            <CardTitle>Connect with wallet</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 grid-rows-4 gap-4">
            <Button variant="outline">Connect</Button>
            <Button variant="outline">Connect</Button>
            <Button className="row-start-2" variant="outline">
              Connect
            </Button>
            <Button className="row-start-2" variant="outline">
              Connect
            </Button>
            <Button className="row-start-3" variant="outline">
              Connect
            </Button>
            <Button className="row-start-3" variant="outline">
              Connect
            </Button>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Pains footer</p>
      </footer>
    </div>
  );
}
