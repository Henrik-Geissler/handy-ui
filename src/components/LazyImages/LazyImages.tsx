/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import { useEffect, useState } from 'react'

const defaults = {
  imageLoadedClass: 'js-lazy-image--handled',
  imageSelector: '.js-lazy-image',
  imageTransitionClass: 'fade-in',
  // If the image gets within 50px in the Y axis, start the download.
  rootMargin: '50px 0px',
  threshold: 0.01,
}
/**
 * Fetches the image for the given URL.
 *
 * @param  url - The URL.
 * @example
 */
const fetchImage = (url: string) => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onerror = reject
    image.onload = resolve
    image.src = url
  })
}
const LazyImages = (): JSX.Element | null => {
  const config = defaults
  const [lazyImageCount, setLazyImageCount] = useState(-1)
  let images: NodeListOf<HTMLImageElement>
  let observer: IntersectionObserver
  /**
   * Apply the image.
   *
   * @param  image - The HTMLImageElement the source will be applied to.
   * @param source - The Source to be applied.
   * @example
   */
  const applyImage = (image: HTMLImageElement, source: string) => {
    // Prevent this from being lazy loaded a second time.
    image.classList.add(config.imageLoadedClass)
    image.onload = () => image.classList.add(config.imageTransitionClass)
    image.src = source
  }
  /**
   * Preloads the image.
   *
   * @param  image - The HTMLImageElement to be preloaded.
   * @example
   */
  const preloadImage = async (image: HTMLImageElement): Promise<void> => {
    const { src } = image.dataset
    if (!src) return
    await fetchImage(src)
    applyImage(image, src)
  }
  /**
   * On intersection.
   *
   * @param  entries - The ObserverEntries.
   * @example
   */
  const onIntersection = (entries: IntersectionObserverEntry[]): void => {
    // Disconnect if we've already loaded all of the images
    if (lazyImageCount === 0) {
      if (observer) observer.disconnect()
    } else {
      entries.forEach((entry: IntersectionObserverEntry) => {
        // Are we in viewport?
        if (entry.intersectionRatio > 0) {
          setLazyImageCount(lazyImageCount - 1)
          // Stop watching and load the image
          observer.unobserve(entry.target)
          preloadImage(entry.target as HTMLImageElement)
        }
      })
    }
  }
  useEffect(() => {
    images = document.querySelectorAll(config.imageSelector)
    setLazyImageCount(images.length)
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(onIntersection, config)
      images.forEach((image: HTMLImageElement) => {
        if (!image.classList.contains(config.imageLoadedClass))
          observer.observe(image)
      })
    } else {
      // If we don't have support for intersection observer, loads the images immediately
      images.forEach((image: HTMLImageElement) => preloadImage(image))
    }
  }, [])

  return null
}

export default LazyImages
