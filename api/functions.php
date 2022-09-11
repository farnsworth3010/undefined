<?php

function getDays ($connect){
    $schedule = mysqli_query($connect, "SELECT * FROM `schedule`");
    $daysList = [];
    while($day = mysqli_fetch_assoc($schedule))
    {
        $daysList[] = $day;
    }
    echo json_encode($daysList);
}