/**
 * Matérias do site Seguros Financeiros.
 *
 * Para publicar uma matéria, acrescente um objeto nesta lista. A página /materias
 * passa a listá-la e a página /materias/<slug> é gerada automaticamente.
 * Enquanto a lista estiver vazia, /materias mostra o aviso "Em breve".
 *
 * Exemplo de formato (não publicado):
 * {
 *   slug: "seguro-garantia-judicial-deposito-recursal",
 *   titulo: "Título da matéria",
 *   resumo: "Resumo de uma ou duas frases para a listagem e para o Google.",
 *   categoria: "Seguro Garantia",
 *   data: "2026-11-02",            // AAAA-MM-DD
 *   leitura: "6 min de leitura",
 *   conteudo: `<p>Texto em HTML...</p><h2>Subtítulo</h2><p>...</p>`
 * }
 */
export const materias = [];

export function dataBR(iso) {
  const [a, m, d] = String(iso || "").split("-");
  const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  return a && m && d ? `${Number(d)} de ${meses[Number(m) - 1]} de ${a}` : "";
}

export function ordenadas() {
  return [...materias].sort((x, y) => String(y.data).localeCompare(String(x.data)));
}
