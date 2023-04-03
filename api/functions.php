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
    function getLastCheck() {
        $lastcheck = mysqli_query($connect, "SELECT * FROM `check`");
        test = mysqli_fetch_assoc($lastcheck))
        echo json_encode($lastcheck);
    }
    function getAll($connect){
        for($i = 0; $i < 8; $i++){
            $group_id = strval($i);
            $schedule = mysqli_query($connect, "SELECT * FROM `schedule` WHERE group_id = $group_id");
            $daysList = [];
            while($day = mysqli_fetch_assoc($schedule))
            {
                $daysList[] = $day;
            }
            echo("case $i:\nresponse=");
            echo json_encode($daysList);
            echo("\nbreak;\n");
        }
    }
?>
