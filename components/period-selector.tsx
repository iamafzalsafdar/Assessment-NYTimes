'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

export function PeriodSelector({ currentPeriod }: { currentPeriod: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handlePeriodChange = (value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('period', value)
    router.push(`/?${params.toString()}`)
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Time period:</span>
      <Select value={currentPeriod} onValueChange={handlePeriodChange}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Select period" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">1 day</SelectItem>
          <SelectItem value="7">7 days</SelectItem>
          <SelectItem value="30">30 days</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
