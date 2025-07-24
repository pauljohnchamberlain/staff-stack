import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] py-20 text-center">
      <div className="space-y-8 max-w-2xl mx-auto">
        <h1 className="text-7xl font-lexend font-bold text-[#0f2c4a]">404</h1>

        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-lexend font-bold text-[#0f2c4a]">
            Page Not Found
          </h2>

          <p className="text-lg text-muted-foreground max-w-lg mx-auto font-inter">
            The team you're looking for might be working remotely somewhere
            else. Let's get you back to where you can find our talented staff.
          </p>
        </div>

        <div className="py-4">
          <div className="h-20 w-20 mx-auto relative">
            <div className="absolute inset-0 bg-[#09d8f5]/20 rounded-full animate-ping" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#09d8f5]"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#e60b8a] hover:bg-[#e60b8a]/90 text-white font-lexend"
            asChild
          >
            <Link href="/">Return Home</Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-[#09d8f5] text-[#0f2c4a] hover:bg-[#09d8f5]/10 font-lexend"
            asChild
          >
            <Link href="/contact-us">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
