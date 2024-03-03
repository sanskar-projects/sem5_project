<html>
<body>
<?php
$fullname=$_GET["fullname"];
$email=$_GET["email"];
$phone=$_GET["phone"];
$query=$_GET["query"];
if(!empty($email))
{
$conn=mysqli_connect("localhost","root","","team1database");
$sql="INSERT INTO donate VALUES('$fullname','$email','$phone','$query')";
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
