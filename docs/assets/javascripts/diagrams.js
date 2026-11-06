// MkDocs renders fenced Mermaid blocks as code; convert them before rendering.
document.addEventListener('DOMContentLoaded', async () => {
  const diagrams = [];
  document.querySelectorAll('pre > code.language-mermaid').forEach((code) => {
    const diagram = document.createElement('div');
    diagram.className = 'mermaid';
    diagram.textContent = code.textContent;
    code.parentElement.replaceWith(diagram);
    diagrams.push(diagram);
  });
  if (!diagrams.length) return;
  mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', theme: 'default' });
  try {
    await mermaid.run({ nodes: diagrams });
  } catch (error) {
    console.error('Не удалось отобразить диаграммы Mermaid:', error);
  }
});
