<?php
    if(isset($_POST['submit'])){
        $email=$_POST['email'];
        $msg = $_POST['subject'];
        $loc = $_POST['location'];

        $to = 'abhishek.hotti1225@gmail.com';
        
        mail($to,$loc,$msg, 'From:'.$email);
    }
?>