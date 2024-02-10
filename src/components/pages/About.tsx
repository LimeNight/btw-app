import React from 'react'

function ww(what: HTMLElement, where: HTMLElement) {
  where.insertBefore(what, where.firstChild)
}
function About() {
  return (
    <div>AboutMe</div>
  )
}

export default About