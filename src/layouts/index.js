import React from "react"
import Navbar from "../components/Navbar/Navbar"

import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"

const Layout = ({ location, children }) => {
  return (
    <>
      <Navbar />
      <TransitionProvider location={location}>
        <TransitionViews>{children}</TransitionViews>
      </TransitionProvider>
    </>
  )
}

export default Layout
