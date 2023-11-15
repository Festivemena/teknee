import { useMediaQuery } from "react-responsive";
export default function useBreakpoint() {
  /** The chosen breakpoints are from bootstrap 5 which are more reliable than material-ui
   */
  const isWideDesktop = useMediaQuery({ minWidth: 1400 });
  const isSlimDesktop = useMediaQuery({ minWidth: 1200, maxWidth: 1399.99 });
  const isWideTablet = useMediaQuery({ minWidth: 992, maxWidth: 1199.99 });
  const isSlimTablet = useMediaQuery({ minWidth: 768, maxWidth: 991.99 });
  const isWideMobile = useMediaQuery({ minWidth: 576, maxWidth: 767.99 });
  const isSlimMobile = useMediaQuery({ maxWidth: 575.99 });

  return {
    isMobile: isSlimMobile || isWideMobile,
    isTablet: isSlimTablet || isWideTablet,
    isDesktop: isSlimDesktop || isWideDesktop,
    isSlimMobile,
    isSlimTablet,
    isSlimDesktop,
    isWideDesktop,
    isWideTablet,
    isWideMobile,
    xs: isSlimMobile,
    sm: isWideMobile,
    md: isSlimTablet,
    lg: isWideTablet,
    xl: isSlimDesktop,
    xxl: isWideDesktop,
    size: ["xs", "sm", "md", "lg", "xl", "xxl"][
      [
        isSlimMobile,
        isWideMobile,
        isSlimTablet,
        isWideTablet,
        isSlimDesktop,
        isWideDesktop,
      ].indexOf(true)
    ],
  };
}
