select "line1",
  "cities"."name" as "Current city",
  "district",
  "countries"."name" as "country"
from "addresses"
join "cities" using ("cityId") join "countries" using ("countryId");
