select
       "categories"."name" as "Movie Category by Lisa Monroe",
      count("filmCategory"."filmId") as "# of Films Starred In"
  from "categories"
  join "filmCategory" using ("categoryId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "actors"."firstName" = 'Lisa' AND
        "actors"."lastName" = 'Monroe'
  group by "Movie Category by Lisa Monroe";
