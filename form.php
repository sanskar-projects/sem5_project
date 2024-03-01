<html>
<body>
<?php
$fname=$_GET["fname"];
$lname=$_GET["lname"];
$address=$_GET["address"];
$city=$_GET["city"];
$state=$_GET["state"];
$country=$_GET["country"];
$zip=$_GET["zip"];
$tel=$_GET["tel"];
$mail=$_GET["mail"];
$_address=$_GET["_address"];
$_city=$_GET["_city"];
$_state=$_GET["_state"];
$_country=$_GET["_country"];
$_zip=$_GET["_zip"];
$date=$_GET["date"];
$subject=$_GET["subject"];
$desc=$_GET["desc"];
$consent=$_GET["consent"];

$conn=mysqli_connect("localhost","root","","NGO_database");
$sql="INSERT INTO reports VALUES('$fname','$lname','$address','$city','$state','$country','$zip','$tel','$mail','$_address','$_city','$_state','$_country','$_zip''$date','$subject','$desc','$consent')";
if($conn->query(sql)===TRUE)
{
echo "Submitted";
}
?>
</body>
</html>
