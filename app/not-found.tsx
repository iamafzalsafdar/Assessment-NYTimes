import { Button } from '@/components/ui/button'
import { FileWarning } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <FileWarning className="h-16 w-16 text-muted-foreground mb-4" />
      <h1 className="text-3xl font-bold mb-2">Article Not Found</h1>
      <p className="text-muted-foreground mb-6 max-w-md">
        We couldn't find the article you're looking for. It may have been removed or the URL might
        be incorrect.
      </p>
      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}
