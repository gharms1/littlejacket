<script>

//<!-- Background Colors -->
//var bgcolorlist=new Array("#FFDE00 ", "#FF931E ", "#FF5525 ", "#FF7EFF ")
//document.body.style.background=bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)]
//<!-- Background Colors -->

</script>

<script>
function myFunction() {
    var obj_id = document.getElementById("id_tr_banner");
	myRandomNumber = Math.floor((Math.random() * 4) + 1);
	//alert("random number is: " + myRandomNumber);
	if (myRandomNumber == 1)
	{
	    obj_id.style.backgroundColor = '#FFDE00';
	}

	if (myRandomNumber == 2)
	{
	    obj_id.style.backgroundColor = '#FF931E';
	}

	if (myRandomNumber == 3)
	{
	    obj_id.style.backgroundColor = '#FF5525';
	}

	if (myRandomNumber == 4)
	{
	    obj_id.style.backgroundColor = '#FF7EFF';
	}

}
</script>
