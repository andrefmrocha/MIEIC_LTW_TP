<!DOCTYPE html>
<html lang="en-US">

<head>
    <title>Let me Sum these Numbers for You</title>
    <meta charset="UTF-8">
    <link href="../styles/form.css" rel="stylesheet" type="text/css" media="all">
</head>

<body>
    <?php
    $num1 = $_GET['num1'];
    $num2 = $_GET['num2'];
    if($num1 && $num2){
        $sum = $_GET['num1'] + $_GET['num2']; 
        echo "The sum is $sum";
    }else{
        echo "Invalid parameters";
    }
    
    ?>
    <div>
        <a href="http://gnomo.fe.up.pt/~up201706462/form2.html">Go back</a>
    </div>
</body>

</html>
