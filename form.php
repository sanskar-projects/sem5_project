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
$description=$_GET["description"];
$consent=$_GET["consent"];

$conn=mysqli_connect("localhost","root","","NGO_database");
$sql="INSERT INTO user VALUES('$fname','$lname','$address','$city','$state','$country','$zip','$tel','$mail')";
if($conn->query($sql)===TRUE)
{
$sql="INSERT INTO report VALUES('$_address','$_city','$_state','$_country','$_zip','$date','$subject','$description')";
if($conn->query($sql)===TRUE)
{
echo "
<h1>Thank You!!!!!</h1><br>
<p>
First name: $fname<br>
Last name: $lname<br>
Address: $address<br>
City: $city<br>
State: $state<br>
Country: $country<br>
Pin code: $zip<br>
Telephone: $tel<br>
E-mail: $mail<br>
Address where animal is located: $address<br>
City where animal is located: $_city<br>
State where animal is located: $_state<br>
Country where animal is located: $country<br>
Zip code where animal is located: $zip<br>
Date observed: $date<br>
Subject: $subject<br>
Please describe your concern: $description
</p>
";
}
}
?>
</body>
</html>
