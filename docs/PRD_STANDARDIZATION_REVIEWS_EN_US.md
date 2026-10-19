# PRD: Padronização de Artigos de Review para o Público Americano

**Versão:** 1.0  
**Idioma deste documento:** Português  
**Idioma de saída dos artigos:** Inglês americano (en-US)  
**Destino:** Editorial / Google AI Studio / 77 Review  

---

## 1. Visão Geral
### 1.1 Contexto
O site publica artigos de review de produtos voltados ao público dos Estados Unidos. Todo artigo tem como objetivo guiar o leitor de forma honesta, fundamentada e transparente até a decisão de compra por meio do link de afiliado do produto avaliado.

### 1.2 Objetivo
Estrutura padrão de alta conversão e credibilidade jornalística para o consumidor americano, sem alucinações factuais e sem exagero publicitário.

### 1.3 Perfil do Leitor
- Pragmático e cético com marketing sensacionalista.
- Leitura dinâmica (escaneabilidade com tabelas, prós/contras, listas e negrito pontual).
- Foco em preço, durabilidade, garantia e facilidade de reembolso.
- Padrão imperial americano (polegadas, libras, °F, USD).

---

## 2. Regras Críticas e Diretrizes de Afiliado (Seção 3 & 3.1)
1. **Zero Alucinações Factuais:** Nunca inventar dados. O que faltar recebe o marcador `[MISSING: descrição do dado]`.
2. **Preservação de Dados:** Preservar opiniões do autor, notas, números, nomes e especificações.
3. **Link de Afiliado Intocável:** Usar exatamente o link fornecido pelo usuário. Nunca encurtar ou alterar parâmetros.
4. **Posicionamento Obrigatório de CTAs (3 a 5 por produto principal):**
   - CTA 1: Dentro da caixa Quick Take (topo).
   - CTA 2: No fim da seção de Preço e Custo-Benefício (*Is It Worth the Price?*).
   - CTA 3: Após Prós e Contras ou Comparação com alternativas.
   - CTA 4: No Veredito Final (*Final Verdict*).
   - CTA 5 (opcional): No meio de artigos longos, após a seção de Desempenho (*Performance*).
5. **Aviso de Afiliado Antes do Primeiro Link:** Texto de divulgação claro e visível antes de qualquer CTA.
6. **Sem Urgência Falsa:** Proibido inventar escassez ("only 2 left") ou falsos cronômetros.

---

## 3. Estrutura Padrão Obrigatória do Artigo (Seção 4)
1. **Title (H1):** `[Product Name] Review: [Benefit or Verdict Hook] (2026)`
2. **Affiliate Disclosure:** Logo abaixo do H1.
3. **Quick Take:** Veredito em 2–4 linhas, nota, preço, `Best for:`, `Skip if:`, e botão de CTA.
4. **Is It Worth the Price? (Value for Money):** Preço, faixas de desconto, custos adicionais + CTA 2.
5. **Who It's For (and Who Should Skip It):** Listas por perfil de usuário.
6. **Pros and Cons:** Mínimo de 3 prós e 2 contras + CTA 3.
7. **Performance and Real-World Use:** Subtítulos por aspecto relevante com fotos marcadas `[PHOTO: sugestão]`.
8. **Build Quality and Durability:** Materiais, histórico e acabamento.
9. **Warranty, Returns and Support:** Garantia, prazos de reembolso e canais de compra.
10. **How It Compares:** Tabela comparativa com 2 a 3 concorrentes.
11. **Specs:** Tabela de especificações em unidades americanas.
12. **Final Verdict:** 3 a 5 linhas de conclusão + CTA 4 final.
13. **FAQ:** 3 a 5 perguntas naturais com respostas curtas.

---

## 4. Formato de Saída das Respostas (Seção 9)
1. **Artigo Reescrito em Markdown (en-US)**.
2. **Bloco de SEO:** Meta Title, Meta Description (140-160 chars), Slug, Palavra-chave principal, Alt texts sugeridos, Links internos sugeridos.
3. **Relatório de Lacunas (em português):** Lista de todos os `[MISSING]` e `[PHOTO]`, e mapa dos CTAs inseridos.
4. **Resumo das Mudanças (em português):** 3 a 6 linhas sobre a reorganização realizada.
5. **Resultado do Checklist de Qualidade:** Verificação completa dos 17 itens da Seção 10.
