import { useEffect, useState } from 'react'
/**
 * Prevent to call the function too often!
 * @param {T} value parameter represents the watched value that you want to debounce. It can be of any type T
 * @param {Number} delay parameter is an optional number representing the milliseconds for the debounce delay. If not provided, it defaults to 300 milliseconds.
 * @returns {T} a debounced value that will only update after the specified delay has passed without any further updates to the original value. It is commonly used for handling user input or any situation where you want to delay an action until the user has finished making changes.
 */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}