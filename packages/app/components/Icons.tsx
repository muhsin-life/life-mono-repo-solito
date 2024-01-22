import * as Icon from 'react-native-feather'
import { G, Path, Svg, SvgProps } from 'react-native-svg'
export const Icons = {
  categoryMenu: (props: SvgProps) => (
    <Svg
      fill="currentColor"
      className="bi bi-grid"
      viewBox="0 0 16 16"
      {...props}
    >
      <Path d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5zM2.5 2a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm6.5.5A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM1 10.5A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm6.5.5A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5z" />
    </Svg>
  ),
  prescriptionIcon: (props: SvgProps) => (
    <Svg width={22} height={22} viewBox="0 0 22 22" {...props}>
      <G transform="translate(65 -955)">
        <Path
          data-name="Rectangle 8"
          transform="translate(-65 955)"
          fill="#fff"
          d="M0 0H22V22H0z"
        />
        <G data-name="Prescription">
          <Path
            data-name="Path 6574"
            d="M-629.5 5932.728v-18.072s.08-1 1.358-1h8.9l4.144 4.145v14.177s-.219 1.382-1.382 1.382h-11.66s-.61.114-.887-.19a3.383 3.383 0 00-.473-.442z"
            transform="translate(1728.323 353.788) translate(-1160 -5311.22)"
            fill="#fff"
          />
          <G data-name="Group 8075" fill="#1d1d1d">
            <Path
              data-name="Path 6555"
              d="M79.228 4.39L74.963.125a.426.426 0 00-.3-.125h-8.957A1.707 1.707 0 0064 1.706v17.058a1.707 1.707 0 001.706 1.706h11.941a1.707 1.707 0 001.706-1.706V4.691a.426.426 0 00-.125-.3zm-4.14-2.934L77.9 4.265h-1.959a.854.854 0 01-.853-.853zM78.5 18.764a.854.854 0 01-.853.853H65.706a.854.854 0 01-.853-.853V1.706a.854.854 0 01.853-.853h8.529v2.559a1.707 1.707 0 001.706 1.706H78.5z"
              transform="translate(1728.323 353.788) translate(-1790 601.977) translate(-64)"
            />
            <Path
              data-name="Path 6556"
              d="M177.329 175.879a.428.428 0 00-.6.067l-1.257 1.571-1.944-2.721a2.128 2.128 0 00-.731-4.127h-1.706a.426.426 0 00-.426.426v5.97a.426.426 0 00.853 0v-2.132h1.06l2.34 3.276-1.6 2a.427.427 0 00.666.533l1.45-1.813 1.281 1.794a.428.428 0 10.694-.5l-1.422-1.99 1.408-1.76a.427.427 0 00-.066-.594zm-5.81-1.8v-2.559h1.281a1.28 1.28 0 010 2.559z"
              transform="translate(1728.323 353.788) translate(-1790 601.977) translate(-166.401 -163.845)"
            />
          </G>
        </G>
      </G>
    </Svg>
  ),
  userIcon: (props: SvgProps) => (
    <Svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </Svg>
  ),
  cartIcon: (props: SvgProps) => (
    <Svg
      style={{
        flex: 1,
      }}
      {...props}
    >
      <Path d="M10 10H110V110H10z" stroke="red" fill="#00f" />
    </Svg>
  ),
}
