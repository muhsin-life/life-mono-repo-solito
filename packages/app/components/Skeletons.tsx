import { View } from 'app/design/view'
import { Skeleton } from './ui/Skeleton'

interface SkeletonProps {
  total: number
}

const TrendingSkeleton = ({ total }: SkeletonProps) => {
  return (
    <View className="flex-1 flex-row flex-wrap space-x-2">
      {Array.from({ length: total }).map((_, i) => (
        <Skeleton className="flex-col flex-1 h-7 " key={`skelton-${i}`} />
      ))}
    </View>
  )
}
const CategoriesSkeleton = ({ total }: SkeletonProps) => {
  return (
    <View className="flex-1 flex-row flex-wrap items-start justify-between">
      {Array.from({ length: total }).map((_, i) => (
        <View className="w-[49%] h-16" key={`skeleton-${i}`}>
          <Skeleton className="mb-2 flex-1" />
        </View>
      ))}
    </View>
  )
}
const BrandsSkeleton = ({ total }: SkeletonProps) => {
  return (
    <View className="flex-1 flex-row flex-wrap space-x-2">
      {Array.from({ length: total }).map((_, i) => (
        <Skeleton className="flex-col flex-1 h-12 " key={`skelton-${i}`} />
      ))}
    </View>
  )
}

const SearchProductsSkeleton = ({ total }: SkeletonProps) => {
  return (
    <View className=" flex-col flex-1 space-y-2">
      {Array.from({ length: total }).map((_, i) => (
        <View className="flex-1 flex-row " key={`skelton-${i}`}>
          <View className="flex-row flex-1 h-16 bg-white border border-muted p-1">
            <Skeleton className="w-[50px] h-[50px] rounded-lg" />
            <View className="flex-col space-y-1 ml-2 flex-1 justify-between py-1">
              <Skeleton className="flex-col  h-3 rounded" />
              <Skeleton className="flex-col  h-3 rounded w-1/2" />
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

const ProductsSliderSkeleton = () => {
  return (
    <View className=" w-40 h-64 mr-3">
      <View className="relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl">
        <Skeleton className="h-full w-full" />
      </View>
      <Skeleton className="mt-2.5 w-2/3 h-3 rounded-lg" />
      <Skeleton className="mt-1.5 w-16 h-3 rounded-lg" />
      <Skeleton className="mt-1.5 w-12 h-3 rounded-lg" />
    </View>
  )
}

export {
  TrendingSkeleton,
  CategoriesSkeleton,
  BrandsSkeleton,
  SearchProductsSkeleton,
  ProductsSliderSkeleton,
}
