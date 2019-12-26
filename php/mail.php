
<?php

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $mail = $_POST['mail'];
    $content = $_POST['content'];


    $to      = 'pierregodino.contact@yahoo.com';
    $subject = 'DEVIS | ' . $name;
    $message = ` <h1 style="text-align: center;margin-bottom: 50px">DEMANDE DE DEVIS</h1>
                 <hr>
                 <p style="text-align: center;">$content</p>
                 <hr>
                 <p style="text-align: center;">Numéro de téléphone: $phone</p>
                 <p style="text-align: center;">Email: $mail</p>
                `;
    $headers = array(
        'From' => 'site@pierre-godino.com',
    );

    
    mail($to, $subject, $message, $headers);
?>
