<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP基礎P</title>
</head>
<body>

<?php
try
{
 $dsn ='mysql:dbname=phpkiso;host=localhost';
 $user = 'root';
 $password = '';
 $dbh = new PDO($dsn, $user, $password);
 $dbh->query('SET NAMES utf8');

 $nickname = $_POST['nickname'];
 $email = $_POST['email'];
 $goiken = $_POST['goiken'];

 $nickname=htmlspecialchars($nickname);
 $email=htmlspecialchars($email);
 $goiken=htmlspecialchars($goiken);

 print $nickname;
 print '様<br />';
 print '<font color="#ff0000">ご意見ありがとうございました！</font><br />';
 print '頂いたご意見の確認『';
 print $goiken;
 print '』<br />';
 print $email;
 print 'にメールを送りましたのでご確認ください。';

 $mail_sub='アンケートを受け付けました。';
 $mail_body=$nickname."様へ\nアンケートへのご協力ありがとうございました。";
 $mail_body=html_entity_decode($mail_body,ENT_QUOTES,"UTF-8");
 $mail_head='From:こちらのメールアドレス';
 mb_language('Japanese');
 mb_internal_encoding("UTF-8");
 mb_send_mail($email, $mail_sub, $mail_body, $mail_head);

 $sql = 'INSERT INTO anketo(nickname,email,goiken) VALUES ("'.$nickname.'","'.$email.'","'.$goiken.'")';
 $stmt = $dbh->prepare($sql);
 $stmt->execute();

 $dbh = null;	
}

catch(Exception $e)
{
 print'ただいま障害が発生しています、ご迷惑をお掛けしますが復旧までしばらくお待ちください。';
}
?>

</body>