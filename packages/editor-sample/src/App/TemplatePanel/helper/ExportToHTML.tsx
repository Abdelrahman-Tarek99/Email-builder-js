export function exportToHtml(doc: any): string {
  function renderBlock(block: any): string {
    switch (block.type) {
      case "Root":
        return block.children?.map(renderBlock).join("") || "";

      case "TextBlock":
        return `<p>${escapeHtml(block.props?.text || "")}</p>`;

      case "HeadingBlock":
        const level = block.props?.level || 1;
        return `<h${level}>${escapeHtml(block.props?.text || "")}</h${level}>`;

      case "ContainerBlock":
        return `<div>${block.children?.map(renderBlock).join("") || ""}</div>`;

      case "ImageBlock":
        return `<img src="${escapeHtml(block.props?.src || "")}" alt="${escapeHtml(block.props?.alt || "")}" />`;

      case "TableBlock":
        return `<table><tbody>${block.children?.map(renderBlock).join("") || ""}</tbody></table>`;

      // Add more cases for custom blocks here

      default:
        return "";
    }
  }

  return `<!DOCTYPE html><html><body>${renderBlock(doc)}</body></html>`;
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
