select sum(((Lbkum - vmkum + lbstf)*verpr)/lbkum)as cost from mbew_lite mb
join mard_lite ma on mb.matnr = ma.matnr
where lfgja = $1;
