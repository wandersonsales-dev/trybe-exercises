-- 1 - Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
SELECT
  UCASE('trybe');
-- 2 - Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?' .
SELECT
  REPLACE(
    'Você já ouviu falar do DuckDuckGo?',
    'DuckDuckGo',
    'Google'
  );