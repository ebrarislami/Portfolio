import React from "react"
import { Helmet } from "react-helmet"
import noScript from "../sass/noscript.scss"

export default () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
      <noscript>{`
        <link rel="stylesheet" href=${noScript} />
    `}</noscript>
      <title>Ebrar Islami</title>
    </Helmet>
  )
}
