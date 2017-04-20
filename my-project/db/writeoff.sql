select lbkum from mbew_lite
join mard_lite on mbew_lite.matnr = mard_lite.matnr
where kalkl = 0 and lfmon = $1;
