select ((cast(lbkum as float))/(cast(verpr as float))) from mbew_lite
join mard_lite on mard_lite.matnr = mbew_lite.matnr
where lfgja = $1;
