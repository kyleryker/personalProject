select lbkum from mbew_lite
join mard_lite on mbew_lite.matnr = mard_lite.matnr
where verpr = 0 and lfmon = $1;
