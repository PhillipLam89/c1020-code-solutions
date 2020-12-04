select "countries"."name" as "Country",
       count("cities") as "Total Cities"
  from "countries"
  join "cities" using ("countryId")
 group by "countryId";
