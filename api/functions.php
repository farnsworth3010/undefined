<?php

function getSchedule($group_id, $connect){
    $schedule = mysqli_query($connect, "SELECT * FROM `schedule` WHERE group_id = $group_id");
    $daysList = [];
    while($day = mysqli_fetch_assoc($schedule))
    {
        $daysList[] = $day;
    }
    echo json_encode($daysList);
}