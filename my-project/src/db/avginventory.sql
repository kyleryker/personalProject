select avg(lbkum) from mbew_lite mb
join mard_lite ma on mb.matnr = ma.matnr
where lfmon = $1;
