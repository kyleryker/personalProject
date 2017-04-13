select stprs * lbkum from mbew_lite mb
join mard_lite ma on mb.matnr = ma.matnr
where verpr = 0 and lfmon = $1;
