<?

function generateRandomPassword($length=8, $strength=0) { // strength 는 복잡도

    $vowels = 'aeuy';
    $consonants = 'bdghjmnpqrstvz';

    if ($strength & 1) {
        $consonants .= '0123456789';
        $consonants .= '!#@';
    }

    if ($strength & 2) {
        $vowels .= "AEUY";
    }

    if ($strength & 4) {
        $consonants .= '23456789';
    }

    if ($strength & 8) {
        $consonants .= '@#$%';
    }


    $password = '';

    $alt = 0; // time() % 2; // 난수 나누기 하면 나머지가 0 아니면 1로 나오도록

    for ($i = 0; $i < $length; $i++) {

        if ($alt == 1) {

            $password .= $consonants[(rand() % strlen($consonants))];

            $alt = 0;

        } else {

            $password .= $vowels[(rand() % strlen($vowels))];

            $alt = 1;

        }

    }

    return $password;

}


$ranpass = generateRandomPassword(8,1);

echo "$ranpass";

?>