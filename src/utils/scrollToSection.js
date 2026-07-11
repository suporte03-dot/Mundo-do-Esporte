const HEADER_OFFSET = 120

export const scrollToSection = (id) => {
  const section = document.getElementById(id)
  if (!section) return

  const y = section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  window.scrollTo({ top: y, behavior: 'smooth' })
}

export const handleSectionClick = (event, sectionId, callback) => {
  event.preventDefault()
  callback?.()
  scrollToSection(sectionId)
}
