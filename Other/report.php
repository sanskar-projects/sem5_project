<html>
<body>
<?php
$fullname=$_GET["fullname"];
$email=$_GET["email"];
$address=$_GET["address"];
$city=$_GET["city"];
$state=$_GET["state"];
$fund=$_GET["fund"];
if(!empty($email))
{
$conn=mysqli_connect("localhost","root","","team1database");
$sql="INSERT INTO donate VALUES('$fullname','$email','$address','$city','$state','$fund')";
if($conn->query($sql)===TRUE)
{
echo "<h1>Thank you for donating!</h1>";
}
}
else
{
echo "enter valid details";
}
?>
</body>
</html>
