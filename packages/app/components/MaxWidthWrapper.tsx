import { View } from 'app/design/view'
import { cn } from 'app/lib/utils'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <View className={cn('mx-auto w-full  max-w-[1440px]  md:px-7', className)}>
      {children}
    </View>
  )
}

export default MaxWidthWrapper
