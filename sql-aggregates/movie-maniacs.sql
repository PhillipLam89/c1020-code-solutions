select "customers"."firstName" as "First Name",
      "customers"."lastName" as "Last Name",
      sum("payments"."amount") as "Total Amount Paid (Descending)"
  from "payments"
  join "customers" using ("customerId")
  group by "firstName",
          "lastName"
  order by "Total Amount Paid (Descending)" DESC;
