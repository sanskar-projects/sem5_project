<html>
<body>
<?php
$_mail=$_GET["_mail"];

$conn=mysqli_connect("localhost","root","","NGO_database");
$sql="INSERT INTO mail VALUES('$_mail')";
if($conn->query($sql)===TRUE)
{
echo "<a>Thank You!!!!!</a>";
}
?>
</body>
</html>
