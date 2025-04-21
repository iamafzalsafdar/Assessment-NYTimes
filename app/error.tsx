'use client'

import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <AlertCircle className="h-16 w-16 text-destructive mb-4" />
      <h1 className="text-3xl font-bold mb-2">Something went wrong</h1>
      <p className="text-muted-foreground mb-2 max-w-md">
        We encountered an error while trying to load the articles.
      </p>
      <div className="bg-muted p-4 rounded-md mb-6 max-w-md overflow-auto text-left">
        <p className="font-mono text-sm break-words">{error.message}</p>
      </div>
      <div className="space-y-2">
        <Button onClick={reset} className="mr-2">
          Try again
        </Button>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Reload page
        </Button>
      </div>
    </div>
  )
}
