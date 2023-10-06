import React from "react"

const Seo = ({ description, title, children }) => (
  <>
    <title>{title || ""}</title>
    <meta name="description" content={description || ""} />
    <meta property="og:title" content={title || ""} />
    <meta property="og:description" content={description || ""} />
    {children}
  </>
)

export default Seo
