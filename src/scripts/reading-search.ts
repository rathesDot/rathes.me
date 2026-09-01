export {}

const input = document.querySelector<HTMLInputElement>("#search")
const groups = document.querySelectorAll<HTMLElement>("[data-book-group]")

// The page ships every book, so searching is a matter of hiding the ones
// that don't match — no request, no re-render.
const applyFilter = (term: string) => {
  const query = term.trim().toLowerCase()

  groups.forEach((group) => {
    let matches = 0

    group.querySelectorAll<HTMLElement>("[data-book]").forEach((item) => {
      const matched = (item.dataset.book ?? "").includes(query)
      item.hidden = !matched
      if (matched) matches += 1
    })

    // A list with nothing left in it drops out entirely, the way the
    // server-rendered version used to skip empty groups.
    group.hidden = matches === 0
  })
}

const syncUrl = (term: string) => {
  const url = new URL(window.location.href)

  if (term) {
    url.searchParams.set("q", term)
  } else {
    url.searchParams.delete("q")
  }

  window.history.replaceState(null, "", url)
}

// Nothing renders the search term server-side anymore, so a shared ?q= link
// is applied here on load instead.
const initialTerm = new URL(window.location.href).searchParams.get("q") ?? ""

if (input) {
  input.value = initialTerm
  input.addEventListener("input", () => {
    applyFilter(input.value)
    syncUrl(input.value)
  })
}

applyFilter(initialTerm)
