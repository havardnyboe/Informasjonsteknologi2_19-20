let div = document.getElementById("teller");

for (i=0; i<10; i++) {
	for (j=0; j<10; j++) {
		for (k=0; k<10;k++) {
			div.innerHTML += String(i)+String(j)+String(k)+' ';
		}
	}
}