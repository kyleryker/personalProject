select sum(((vmkum - lbkum) + lbstf)/lbkum)as cost from mbew_lite mb
join mard_lite ma on mb.matnr = ma.matnr
where lfgja = $1;
