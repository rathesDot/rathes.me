export {}

const nav = document.querySelector<HTMLElement>("#site-nav")
const toggle = document.querySelector<HTMLButtonElement>("#nav-toggle")

const isOpen = () => nav?.hasAttribute("data-open") ?? false

const setOpen = (open: boolean) => {
  if (!nav || !toggle) return
  nav.toggleAttribute("data-open", open)
  toggle.setAttribute("aria-expanded", String(open))
  document.body.classList.toggle("overflow-hidden", open)
}

toggle?.addEventListener("click", () => setOpen(!isOpen()))

document
  .getElementById("nav-backdrop")
  ?.addEventListener("click", () => setOpen(false))

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isOpen()) setOpen(false)
})

document.querySelectorAll<HTMLAnchorElement>("#nav-links a").forEach((link) => {
  link.addEventListener("click", () => setOpen(false))
})
