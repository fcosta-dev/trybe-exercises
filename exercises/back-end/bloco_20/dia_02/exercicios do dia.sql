-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
select m.title, b.domestic_sales, b.international_sales
from Movies as m
inner join BoxOffice as b
on m.id = b.movie_id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
select m.title, b.domestic_sales, b.international_sales
from Movies as m
inner join BoxOffice as b
on m.id = b.movie_id
where international_sales > domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
select m.title, b.rating
from Movies as m
inner join BoxOffice as b
on m.id = b.movie_id
order BY rating desc;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
select t.name, t.location, m.title, m.director
from Theater as t
left join Movies as m
on t.id = m.theater_id 
order by t.name;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
select m.title, m.director, m.year, m.length_minutes, t.name, t.location
from Theater as t
right join Movies as m
on t.id = m.theater_id
order by t.name;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
select * from Movies
where id in (
	select movie_id from BoxOffice where rating > 7.5 
);

select m.title, b.rating  
from Movies as m
inner join BoxOffice as b
on b.movie_id = m.id
where b.rating > 7.5;

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
select rating
from BoxOffice
where movie_id in (
	select id from Movies where year > 2009
);

select m.title, b.rating
from Movies as m
inner join BoxOffice as b
on m.id = b.movie_id
where m.year > 2009;


-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
select t.name, t.location
from Theater as t
where exists (
	select * from Movies where Movies.theater_id = t.id
);

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
select * from Movies;
select * from BoxOffice;
select * from Theater;

select t.name, t.location
from Theater as t
where NOT exists (
	select * from Movies where Movies.theater_id = t.id
);
