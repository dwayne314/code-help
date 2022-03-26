const tags = [
  { id: 1, title: "Javascript" },
  { id: 2, title: "React" },
  { id: 3, title: "Next.js" },
  { id: 4, title: "HTML" },
  { id: 5, title: "CSS" },
  { id: 6, title: "Webpack" },
  { id: 7, title: "Babel" },
  { id: 8, title: "Tailwind" },
  { id: 9, title: "Google Fonts" },
  { id: 10, title: "SVG" },
  { id: 11, title: "Figma" },
];

export function getTagById(id) {
  return tags.find((tag) => tag.id === id);
}
