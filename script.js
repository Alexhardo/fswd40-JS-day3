function gettemp() {

    var x = Math.floor(Math.random() * 30.5 - 5);
    if (x >= -5 && x <= 10) {
        msg = "the temprature is : " + x + "<br>the weaher is cold <br>";
        document.getElementById("xxx").innerHTML = msg;

        //document.write(msg)
        //alert (msg);
    } else {
        msg = "the temprature is : " + x + "<br>the weaher is moderate <br>";
        document.getElementById("xxx").innerHTML = msg;
        //document.write(msg)
        //alert (msg);

    }
}


function gethight()
 {

	var array = [];
	 array[0]= Number(document.getElementById("num1").value);
	 array[1]= Number(document.getElementById("num2").value);
	 array[2]= Number(document.getElementById("num3").value);
	 array[3]= Number(document.getElementById("num4").value);
	 array[4]= Number(document.getElementById("num5").value);
	 max=array[0];
	 for (j=1;j<array.length;j++)
	 {
	 	if (array[j]>max)
	 	{
	 		max= array[j];
	 	}

	 }var msg1 =("the highest number is : "+max);
	 document.getElementById("maxx").innerHTML=msg1;

}