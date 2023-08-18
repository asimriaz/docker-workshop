<?php
//These are the defined authentication environment in the db service

// The MySQL service named in the docker-compose.yml.
$host = 'db';

// Database use name
$user = 'root';

//database user password
$pass = '123456';

// database name
$mydatabase = 'lms';
// check the mysql connection status

$conn = new mysqli($host, $user, $pass, $mydatabase);

// select query
$sql = 'SELECT * FROM books';

if ($result = $conn->query($sql)) {
    while ($data = $result->fetch_object()) {
        $books[] = $data;
    }
}

foreach ($books as $book) {
    echo "<br>";
    echo $book->bookid . " " . $book->title;
    echo "<br>";
}
?>