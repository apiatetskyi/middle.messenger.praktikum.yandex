import Handlebars from "handlebars";

const parser = new DOMParser();

export const renderHtml = (container, html = "") => {
  if (!container) return;

  const doc = parser.parseFromString(html, "text/html");
  container.innerHTML = "";
  container.appendChild(doc.body.firstChild);
};

export const getCompiledTemplate = (template, data) => {
  return Handlebars.compile(template)(data);
};
