
<?php

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $mail = $_POST['mail'];
    $content = $_POST['content'];


    $to      = 'pierregodino.contact@yahoo.com';
    $subject = 'DEVIS | ' . $name;
    $message = $content . ' | ' . $phone . ' | ' . $mail;
    $headers = array(
        'From' => 'site@pierre-godino.com',
    );

    
    mail($to, $subject, $message, $headers);
?>
