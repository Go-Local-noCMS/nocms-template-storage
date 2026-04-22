import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-heading font-bold text-primary">404</h1>
      <p className="mt-4 text-lg text-muted max-w-md text-center">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary">Return Home</Button>
      </div>
    </div>
  );
}
