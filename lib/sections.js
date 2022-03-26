const sections = [
  { id: 1, name: "React" },
  { id: 2, name: "SVG" },
  { id: 3, name: "Google Fonts" },
  { id: 4, name: "Tailwind" },
];

export function getSectionById(id) {
  const section = sections.find((section) => section.id === id);

  return section;
}
