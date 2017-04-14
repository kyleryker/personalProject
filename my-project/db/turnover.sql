select (((Lbkum - vmkum + lbstf)*verpr)/lbkum) from mbew_lite mb
join mard_lite ma on mb.matnr = ma.matnr
where lfgja = $1;
