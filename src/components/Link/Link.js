const Link = ({ children, element }) => {
  const Element = element || "a"

  return <Element>{children}</Element>
}

export default Link
