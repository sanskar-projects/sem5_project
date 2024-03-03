<html>
<body>
<?php
$fname=$_GET["fname"];
$lname=$_GET["lname"];
$city=$_GET["city"];
$state=$_GET["state"];
$email=$_GET["email"];
$phone=$_GET["phone"];
$addressofanimal=$_GET["addressofanimal"];
$cityofanimal=$_GET["cityofanimal"];
$stateofanimal=$_GET["stateofanimal"];
$countryofanimal=$_GET["countryofanimal"];
$date=$_GET["date"];
$pincode=$_GET["pincode"];
$concern=$_GET["concern"];

$conn=mysqli_connect("localhost","root","","team1database");
$sql="INSERT INTO report VALUES('$fname','$lname','$city','$state','$email','$phone','$addressofanimal','$cityofanimal','$stateofanimal','$countryofanimal','$date','$pincode','$concern')";
if($conn->query($sql)===TRUE)
{
echo "<h1>Thank you for donating!</h1>";
}
else
{
echo "enter valid details";
}
?>
</body>
</html>
