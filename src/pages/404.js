import React, { useEffect } from "react"
import { navigate } from "gatsby"

import Seo from "../components/seo"

const NotFoundPage = () => {
  useEffect(() => {
    navigate(process.env.GATSBY_REDIRECT_URL)
  }, [])

  return null
}

export const Head = () => <Seo title="Redirecting..." />

export default NotFoundPage
