import { View } from 'app/design/view'
import { cn } from 'app/lib/utils'
import { ViewProps } from 'react-native'

function Skeleton({ className, ...props }: ViewProps) {
  return (
    <View
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  )
}

export { Skeleton }
