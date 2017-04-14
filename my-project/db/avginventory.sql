select avg(lbkum) from mbew_lite
join mard_lite on mbew_lite.matnr = mard_lite.matnr
where lfgja = $1;
