<?php

$callback = $_GET['callback'];
$json = '{name: "aaa", age:30}';
echo $callback.'(' . $json . ')';
