import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-obsidian text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-carbon via-obsidian to-obsidian" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[500px] max-h-[500px] bg-blue-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 space-y-6 max-w-md w-full">
        <div className="text-8xl font-black tracking-tighter text-white/20 select-none">
          404
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Page Not Found
          </h1>
          <p className="text-ash text-base leading-relaxed">
            The page you are looking for doesn&apos;t exist or may have been moved.
          </p>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button size="md" className="px-8">
              Return Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" size="md" className="px-8">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
