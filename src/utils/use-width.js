import { useState, useEffect } from "react"

const isClient = typeof window === "object"

const useWidth = initialWidth => {
  const [width, setWidth] = useState(
    isClient ? window.innerWidth : initialWidth
  )
  useEffect(() => {
    if (isClient) {
      const handler = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handler)
      return () => window.removeEventListener("resize", handler)
    } else {
      return undefined
    }
  })

  return width
}

export default useWidth
