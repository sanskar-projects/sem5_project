<html>
<body>
<?php
$fullname=$_GET["fullname"];
$email=$_GET["email"];
$query=$_GET["query"];
if(!empty($email))
{
$conn=mysqli_connect("localhost","root","","team1database");
$sql="INSERT INTO contact VALUES('$fullname','$email','$query')";
if($conn->query($sql)===TRUE)
{
echo "<h1>Thank you for contacting we will get back to you soon!</h1>";
}
}
else
{
echo "enter valid details";
}
?>
</body>
</html>
