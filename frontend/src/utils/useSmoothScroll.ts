import { useCallback } from "react";

/**
 * Hook to handle smooth scrolling to elements
 * @param offset - Optional offset from the top of the target element (in pixels)
 */
export function useSmoothScroll(offset = 100) {
  const scrollToElement = useCallback(
    (elementId: string) => {
      const element = document.getElementById(elementId);
      if (!element) return;
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    },
    [offset]
  );

  return { scrollToElement };
}
