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


function gethight() {

    var array = [];
    array[0] = Number(document.getElementById("num1").value);
    array[1] = Number(document.getElementById("num2").value);
    array[2] = Number(document.getElementById("num3").value);
    array[3] = Number(document.getElementById("num4").value);
    array[4] = Number(document.getElementById("num5").value);
    max = array[0];
    for (j = 1; j < array.length; j++) {
        if (array[j] > max) {
            max = array[j];
        }

    }
    var msg1 = ("the highest number is : " + max);
    document.getElementById("maxx").innerHTML = msg1;

}


function getprod() {

    var array1 = [];
    array1[0] = Number(document.getElementById("num11").value);
    array1[1] = Number(document.getElementById("num22").value);
    array1[2] = Number(document.getElementById("num33").value);
    array1[3] = Number(document.getElementById("num44").value);
    array1[4] = Number(document.getElementById("num55").value);


    var sum = 1,
        p;
    for (p = 0; p < array1.length; p++) {
        product = sum * array1[p];
        sum = product;
    }

    var msg3 = ("the product of all inputes is : " + sum);
    document.getElementById("prod").innerHTML = msg3;

}

function uppercase() {
    var input = document.getElementById("upper").value;
    var input2 = [];
    input2 = input;
    for (q = 0; q < input2.length; q++) {}
    return input2.charAt(0).toUpperCase() + input2.slice(1);


}

//////////////////////////////////////////

var students = [];
var grades = [];
var stu2, stu1, avg, sum1 = 0,mn,lo,comp;

function pushgrade() 
{
    stu1 = document.getElementById("name").value;
    students.push(stu1);
    stu2 = Number(document.getElementById("grade").value);
    grades.push(stu2);

    document.getElementById("prod1").innerHTML = students;
    document.getElementById("prod2").innerHTML = grades;
}

function getavg()
{
    for (mn = 0; mn < grades.length; mn++) 
    {
        sum1 = sum1 + grades[mn];
    }
    avg = sum1 /(grades.length);
    lo = avg.toFixed(2);
    avg = "the average of all grades is : "+ lo ;
    document.getElementById("prod3").innerHTML = avg;
    for (comp=0;comp<grades.length;comp++)
    {
    	if (grades[compare]>=0 && grades[compare]<=60 )
    	{
    		alert("F");
    	}
    }

}