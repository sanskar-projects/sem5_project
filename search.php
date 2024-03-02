<html>
<body>
<?php
$n=$_GET['n'];
$conn=mysqli_connect("localhost","root","","NGO_database");
$sql="SELECT * FROM reports WHERE tel=$n";
$res=mysqli_query($conn,$sql);
if(mysqli_num_rows($res)>0)
{
echo "<table border=\"1\">";
echo "<tr>";
echo "<th>First name</th>";
echo "<th>Last name</th>";
echo "<th>Address</th>";
echo "<th>City</th>";
echo "<th>State</th>";
echo "<th>Country</th>";
echo "<th>Pin code</th>";
echo "<th>Telephone</th>";
echo "<th>E-mail</th>";
echo "<th>Address where animal is located</th>";
echo "<th>City where animal is located</th>";
echo "<th>State where animal is located</th>";
echo "<th>Country where animal is located</th>";
echo "<th>Pin code where animal is located</th>";
echo "<th>Date observed</th>";
echo "<th>Subject</th>";
echo "<th>Description</th>";
echo "</tr>";
while($row=mysqli_fetch_array($res))
{

echo "<tr>";
echo "<td>".$row['fname']."</td>";
echo "<td>".$row['lname']."</td>";
echo "<td>".$row['address']."</td>";
echo "<td>".$row['city']."</td>";
echo "<td>".$row['state']."</td>";
echo "<td>".$row['country']."</td>";
echo "<td>".$row['zip']."</td>";
echo "<td>".$row['tel']."</td>";
echo "<td>".$row['mail']."</td>";
echo "<td>".$row['address2']."</td>";
echo "<td>".$row['city2']."</td>";
echo "<td>".$row['state2']."</td>";
echo "<td>".$row['country2']."</td>";
echo "<td>".$row['zip2']."</td>";
echo "<td>".$row['date']."</td>";
echo "<td>".$row['subject']."</td>";
echo "<td>".$row['description']."</td>";
}
echo "</table>";
}
else
{
echo "<h1>NO REPORT FOUND</h1>";
}
?>
</body>
</html>
