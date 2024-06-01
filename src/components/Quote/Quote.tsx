import { HTMLAttributes } from "react"

import { cva } from "cva"

const styles = cva({
  base: "relative my-8 -mx-8 pt-11 pl-12 pb-8 pr-8 text-lg text-neutral-800 bg-neutral-900 [&_p]:m-0 [&_p]:text-neutral-300 antialiased",
})

export const Quote: React.FC<HTMLAttributes<HTMLQuoteElement>> = ({
  className,
  children,
  ...props
}) => (
  <blockquote className={styles({ className })} {...props}>
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
        fill="#FAFAFA"
        fillOpacity="0.05"
      />
    </svg>

    {children}
  </blockquote>
)
