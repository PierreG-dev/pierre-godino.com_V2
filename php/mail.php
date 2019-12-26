
<?php



    $to      = 'pierregodino.contact@yahoo.com';
    $subject = 'Nouvelle demande de devis';
    $message = $content;
    $headers = array(
        'From' => 'site@pierre-godino.com',
    );

    mail($to, $subject, $message, $headers);

?>
