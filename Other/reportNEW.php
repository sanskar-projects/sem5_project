<html>
<body>
<?php
$animal=$_GET["animal"];
$adopter=$_GET["adopter"];
$email=$_GET["email"];
$phone=$_GET["phone"];
$date=$_GET["date"];

if(isset($_GET["agree"]))
{
$conn=mysqli_connect("localhost","root","","team1database");
$sql="INSERT INTO adopt VALUES('$animal','$adopter','$email','$phone','$date')";
if($conn->query($sql)===TRUE)
{
echo "<h1>Thank you for donating!</h1>";
}
else
{
echo "enter valid details";
}
}
else
{
echo "please tick the consent box";
}
?>
</body>
</html>
