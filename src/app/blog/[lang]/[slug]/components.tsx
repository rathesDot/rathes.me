import { ComponentPropsWithRef, PropsWithChildren } from "react"

import { cva, VariantProps } from "../../../../../cva.config"

import { Separator } from "../../../../components/Separator"

import * as List from "../../../../components/List"
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
} from "../../../../components/Heading"

import { Paragraph } from "../../../../components/Paragraph"
import { Link } from "../../../../components/Link"

const image = cva({
  base: "relative block my-4 [&_img]:object-cover [&_img]:object-center",
})

export const caption = cva({ base: "text-neutral-400 block my-1 text-xs" })

const orderedList = cva({
  base: "list-decimal pl-6 my-4 space-y-4 marker:text-neutral-400/70",
})
const unorderedList = cva({
  base: "list-disc pl-6 my-4 space-y-4 marker:text-neutral-400/70",
})
const listItem = cva({ base: "text-neutral-400 antialiased [&_p]:mb-0" })

const bold = cva({ base: "text-neutral-300 font-semibold antialiased" })

const strikethrough = cva({
  base: "line-through decoration-neutral-400 hover:decoration-neutral-400/50 transition-colors font-medium antialiased mb-4",
})

const quote = cva({
  base: "relative my-8 py-8 pl-12 pr-8 bg-neutral-800/30 text-neutral-400",
})

const inlineCode = cva({
  base: "font-mono text-sm",
  variants: {
    codeblock: {
      false:
        "whitespace-normal break-all text-neutral-300 bg-neutral-800 rounded-xs px-1 py-[0.1em]",
    },
  },
})

const codeBlock = cva({
  base: "my-8 overflow-x-auto rounded-sm bg-neutral-800/30 p-8 text-neutral-400 outline outline-neutral-800",
})

const note = cva({
  base: "my-8 p-8 bg-neutral-800/30 outline outline-neutral-800 text-neutral-400 rounded-sm",
  variants: {
    fontFamily: {
      mono: "font-mono",
    },
  },
})

export const components: any = {
  h1: (props: ComponentPropsWithRef<"h1">) => <Heading1 {...props} />,
  h2: (props: ComponentPropsWithRef<"h2">) => <Heading2 {...props} />,
  h3: (props: ComponentPropsWithRef<"h3">) => <Heading3 {...props} />,
  h4: (props: ComponentPropsWithRef<"h4">) => <Heading4 {...props} />,
  p: (props: ComponentPropsWithRef<"p">) => <Paragraph {...props} />,
  hr: (props: ComponentPropsWithRef<"hr">) => <Separator {...props} />,
  ol: ({ className, ...props }: ComponentPropsWithRef<"ol">) => (
    <ol {...props} className={orderedList({ className })} />
  ),
  ul: ({ className, ...props }: ComponentPropsWithRef<"ul">) => (
    <ul {...props} className={unorderedList({ className })} />
  ),
  li: ({ className, ...props }: ComponentPropsWithRef<"li">) => (
    <li {...props} className={listItem({ className })} />
  ),
  blockquote: ({
    className,
    children,
    ...props
  }: ComponentPropsWithRef<"blockquote">) => (
    <blockquote className={quote({ className })} {...props}>
      <svg
        width="41"
        height="33"
        viewBox="0 0 41 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-6 top-6"
      >
        <path
          d="M40.232 17.984V32.832H24.36V23.104C24.36 18.4106 24.872 14.4426 25.896 11.2C26.92 7.87196 28.456 4.45862 30.504 0.959961H38.056C37.288 3.00796 36.5626 4.92796 35.88 6.71996C35.2826 8.51196 34.7706 10.3466 34.344 12.224C34.0026 14.016 33.832 15.936 33.832 17.984H40.232ZM16.04 17.984V32.832H0.167969V23.104C0.167969 18.4106 0.679969 14.4426 1.70397 11.2C2.8133 7.87196 4.3493 4.45862 6.31197 0.959961H13.864C13.0106 3.00796 12.2853 4.92796 11.688 6.71996C11.0906 8.51196 10.6213 10.3466 10.28 12.224C9.93864 14.016 9.76797 15.936 9.76797 17.984H16.04Z"
          fill="currentColor"
          fillOpacity="0.05"
        />
      </svg>

      {children}
    </blockquote>
  ),
  a: ({ href = "#", ...props }: ComponentPropsWithRef<"a">) => (
    <Link href={href} {...props} />
  ),
  img: ({ className, alt, src, ...props }: ComponentPropsWithRef<"img">) => {
    console.log(src, "test")
    return (
      <img
        alt={alt}
        src={`/.netlify/images?url=${src}&w=500`}
        {...props}
        className={image({ className })}
      />
    )
  },
  pre: ({ className, ...props }: ComponentPropsWithRef<"pre">) => (
    <pre {...props} className={codeBlock({ className })} />
  ),
  code: ({ className, ...props }: ComponentPropsWithRef<"code">) => (
    <code className={inlineCode({ codeblock: className !== "" })} {...props} />
  ),
  List: ({ title, children }: PropsWithChildren<{ title?: string }>) => (
    <List.Root>
      {title && <List.Title>{title}</List.Title>}
      <List.Container>{children}</List.Container>
    </List.Root>
  ),
  ListItem: ({
    link,
    subtitle,
    children,
  }: PropsWithChildren<{ link?: string; subtitle?: string }>) => {
    const Subtitle = () => subtitle && <List.Subtitle>{subtitle}</List.Subtitle>
    return (
      <List.Item>
        {link ? (
          <List.Link href={link}>
            {children}
            <Subtitle />
          </List.Link>
        ) : (
          <>
            {children}
            <Subtitle />
          </>
        )}
      </List.Item>
    )
  },
  Note: ({
    className,
    fontFamily,
    ...props
  }: ComponentPropsWithRef<"div"> & VariantProps<typeof note>) => (
    <div className={note({ fontFamily, className })} {...props} />
  ),
  strong: ({ className, ...props }: ComponentPropsWithRef<"strong">) => (
    <strong {...props} className={bold({ className })} />
  ),
  del: ({ className, ...props }: ComponentPropsWithRef<"del">) => (
    <del {...props} className={strikethrough({ className })} />
  ),
}
