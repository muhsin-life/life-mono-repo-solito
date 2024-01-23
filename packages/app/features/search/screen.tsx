import { Skeleton } from 'app/components/ui/Skeleton'
import { themeColors } from 'app/config'
import { TextInput } from 'app/design/input'
import { ScrollView } from 'app/design/scrollView'
import { Pressable } from 'app/design/touchableOpacity'
import { H1, H5, Text } from 'app/design/typography'
import { View } from 'app/design/view'
import { useSearchSuggestion } from 'app/hooks/useData'
import { formatPrice, getPriceDataByLocale } from 'app/lib/utils'
import { useSafeArea } from 'app/provider/safe-area/use-safe-area'
import { useEffect, useState } from 'react'
import * as Icon from 'react-native-feather'
import { SolitoImage } from 'solito/image'
import { useDebouncedCallback } from 'use-debounce'

export function SearchScreen() {
  const safeareaInsets = useSafeArea()
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(false)

  const { data, refetch } = useSearchSuggestion(searchQuery, 'ae-en')

  const getSearchData = useDebouncedCallback(async () => {
    await refetch()
    setLoading(false)
  }, 1000)

  useEffect(() => {
    setLoading(true)
    getSearchData()
  }, [searchQuery])

  return (
    <View className="flex-1 bg-white ">
      <View
        className={'flex-1 bg-white px-4 py-2 flex-col'}
        style={safeareaInsets}
      >
        <View className="flex-row items-center border-b border-muted pb-2">
          <Pressable className="mr-4 w-10 h-10 bg-muted rounded-lg items-center justify-center">
            <Icon.ArrowLeft
              width={18}
              height={18}
              color={themeColors.muted.foreground}
            />
          </Pressable>
          <View className="relative px-3 rounded-md  flex-1 h-10 border border-slate-200 items-center flex-row">
            <Icon.Search
              color={themeColors.muted.foreground}
              width={18}
              height={18}
              style={{
                position: 'absolute',
                left: 10,
              }}
            />
            <TextInput
              onChangeText={(text) => setSearchQuery(text)}
              className=" flex-1 pl-6"
              placeholder="Search Medicine & Healthcare Products"
            />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={true} className="mb-6">
          <View className="flex-col ">
            <H5 className="text-base">Trending Searches</H5>
            {loading ? (
              <View className=" ">
                <View className="flex-1 flex-row flex-wrap space-x-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton
                      className="flex-col flex-1 h-7 "
                      key={`skelton-${i}`}
                    />
                  ))}
                </View>
              </View>
            ) : (
              data?.results[1] && (
                <View className=" ">
                  <ScrollView
                    className="overflow-visible"
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >
                    {data?.results[1].hits.map((suggestion) => (
                      <Pressable
                        key={suggestion._id}
                        className="bg-muted mr-2 h-7 text-sm items-center  flex-row p-1 px-3 rounded-lg font-medium border border-slate-200"
                      >
                        <Icon.TrendingUp
                          color={themeColors.muted.foreground}
                          width={17}
                          height={17}
                        />
                        <Text className="ml-2 capitalize text-xs">
                          {suggestion.query}
                        </Text>
                      </Pressable>
                    ))}
                  </ScrollView>
                </View>
              )
            )}
          </View>
          <View className="flex-col mt-1.5">
            <H5 className="text-base">Trending Categories</H5>
            {loading ? (
              <View className=" ">
                <View className="flex-1 flex-row flex-wrap space-x-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton
                      className="flex-col flex-1 h-14 "
                      key={`skelton-${i}`}
                    />
                  ))}
                </View>
              </View>
            ) : (
              data?.results[3] && (
                <View className=" ">
                  <ScrollView
                    className="overflow-visible"
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >
                    {data?.results[3].hits.map((suggestion) => (
                      <Pressable
                        href={`/brand/${suggestion.slug}`}
                        key={suggestion._id}
                        className="bg-white h-14 mr-2  items-center  flex-row p-1 px-3 rounded-lg font-medium border border-muted"
                      >
                        <SolitoImage
                          src={
                            suggestion.images?.logo ??
                            '/images/default-product-image.png'
                          }
                          style={{
                            borderRadius: 9999,
                            aspectRatio: 1,
                          }}
                          width={40}
                          height={40}
                          alt={suggestion.name || 'cat-image'}
                        />
                        <Text className="ml-2 capitalize text-xs font-medium">
                          {suggestion.name}
                        </Text>
                      </Pressable>
                    ))}
                  </ScrollView>
                </View>
              )
            )}
          </View>
          <View className="flex-col mt-1.5">
            <H5 className="text-base">Trending Brands</H5>
            {loading ? (
              <View className=" ">
                <View className="flex-1 flex-row flex-wrap space-x-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton
                      className="flex-col flex-1 h-12 "
                      key={`skelton-${i}`}
                    />
                  ))}
                </View>
              </View>
            ) : (
              data?.results[2] && (
                <View className=" ">
                  <ScrollView
                    className="overflow-visible"
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >
                    {data?.results[2].hits.map((suggestion) => (
                      <Pressable
                        href={`/brand/${suggestion.slug}`}
                        key={suggestion._id}
                        className="bg-white  mr-2 h-12 items-center  flex-row p-1 px-3 rounded-lg font-medium border border-muted"
                      >
                        <SolitoImage
                          quality={100}
                          src={
                            suggestion.images?.logo ??
                            '/images/default-product-image.png'
                          }
                          style={{
                            aspectRatio: 1,
                          }}
                          width={45}
                          height={45}
                          alt={suggestion.name || 'cat-image'}
                        />
                      </Pressable>
                    ))}
                  </ScrollView>
                </View>
              )
            )}
          </View>
          <View className="flex-col mt-1.5">
            <H5 className="text-base">Products</H5>
            {loading ? (
              <View className=" flex-col flex-1 space-y-2">
                {Array.from({ length: 4 }).map((_, i) => (
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
            ) : (
              data?.results[0] && (
                <ScrollView className="overflow-visible">
                  {data?.results[0].hits.map((suggestion) => {
                    const priceData = getPriceDataByLocale(
                      'ae-en' as locale,
                      suggestion.prices,
                    )

                    return (
                      <View
                        href={`/product/${suggestion.slug}`}
                        key={suggestion._id}
                        className="bg-white h-16 mb-2  items-center  flex-row p-1  rounded-lg font-medium border border-muted"
                      >
                        <View className="border border-muted rounded-lg">
                          <SolitoImage
                            quality={100}
                            src={
                              suggestion.images?.featured_image ??
                              '/images/default-product-image.png'
                            }
                            style={{
                              aspectRatio: 1,
                            }}
                            width={50}
                            height={50}
                            alt={suggestion.name || 'product-image'}
                          />
                        </View>
                        <View className="ml-2 flex-col justify-between space-y-1">
                          <Text className="capitalize text-xs ">
                            {suggestion.title}
                          </Text>

                          <View className="flex-row items-center space-x-2">
                            {priceData?.price.offer_price !==
                            priceData?.price.regular_price ? (
                              <>
                                <Text className="text-red-500 text-xs font-medium">
                                  {formatPrice(
                                    priceData?.price.offer_price || '',
                                  )}
                                </Text>
                                <Text className="text-secondary text-[10px] line-through">
                                  {formatPrice(
                                    priceData?.price.regular_price || '',
                                  )}
                                </Text>
                              </>
                            ) : (
                              <Text className="text-secondary text-xs font-medium">
                                {formatPrice(
                                  priceData?.price.regular_price || '',
                                )}
                              </Text>
                            )}
                          </View>
                        </View>
                      </View>
                    )
                  })}
                </ScrollView>
              )
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
