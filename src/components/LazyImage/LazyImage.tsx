/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import { useEffect } from 'react'

const LazyImage = (): JSX.Element | null => {
  const defaults = {
    imageLoadedClass: 'js-lazy-image--handled',
    imageSelector: '.js-lazy-image',
    imageTransitionClass: 'fade-in',
    // If the image gets within 50px in the Y axis, start the download.
    rootMargin: '50px 0px',
    threshold: 0.01,
  }
  let config: any
  let imageCount: any
  let images: any
  let observer: any
  /**
   * Fetches the image for the given URL.
   *
   * @param url
   * @example
   */
  function fetchImage(url: string) {
    return new Promise((resolve, reject) => {
      const image = new Image()
      image.onerror = reject
      image.onload = resolve
      image.src = url
    })
  }
  /**
   * Preloads the image.
   *
   * @param image
   * @example
   */
  function preloadImage(image: any) {
    const { src } = image.dataset
    if (!src) {
      return
    }

    return fetchImage(src).then(() => {
      applyImage(image, src)
    })
  }
  /**
   * Load all of the images immediately.
   *
   * @param images
   * @example
   */
  function loadImagesImmediately(images: any) {
    // foreach() is not supported in IE
    for (const image of images) {
      preloadImage(image)
    }
  }
  /**
   * Disconnect the observer.
   *
   * @example
   */
  function disconnect() {
    if (!observer) {
      return
    }
    observer.disconnect()
  }
  /**
   * On intersection.
   *
   * @param entries
   * @example
   */
  function onIntersection(entries: any) {
    // Disconnect if we've already loaded all of the images
    if (imageCount === 0) {
      disconnect()

      return
    }
    // Loop through the entries
    for (const entry of entries) {
      // Are we in viewport?
      if (entry.intersectionRatio > 0) {
        imageCount--
        // Stop watching and load the image
        observer.unobserve(entry.target)
        preloadImage(entry.target)
      }
    }
  }
  /**
   * Apply the image.
   *
   * @param img
   * @param src
   * @param source
   * @example
   */
  function applyImage(img: any, source: string) {
    // Prevent this from being lazy loaded a second time.
    img.classList.add(config.imageLoadedClass)
    img.classList.add(config.imageTransitionClass)
    img.src = source
  }
  useEffect(() => {
    const options: any[] = []
    config = { ...defaults, ...options }
    images = document.querySelectorAll(config.imageSelector)
    imageCount = images.length
    // If we don't have support for intersection observer, loads the images immediately
    if (!('IntersectionObserver' in window)) {
      loadImagesImmediately(images)
    } else {
      // It is supported, load the images
      observer = new IntersectionObserver(onIntersection, config)
      // foreach() is not supported in IE
      for (const image of images) {
        if (image.classList.contains(config.imageLoadedClass)) {
          continue
        }
        observer.observe(image)
      }
    }
  }, [])

  return null
}

export default LazyImage
