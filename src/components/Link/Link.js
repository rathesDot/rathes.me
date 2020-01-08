const Link = ({ children, element, ...props }) => {
  const Element = element || "a"

  return <Element {...props}>{children}</Element>
}

export default Link
