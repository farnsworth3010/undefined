<?php
    function getSchedule($group_name, $connect){
        $schedule = mysqli_query($connect, "SELECT * FROM `schedule` WHERE group_name = $group_name");
        $daysList = [];
        while($day = mysqli_fetch_assoc($schedule))
        {
            $daysList[] = $day;
        }
        echo json_encode($daysList);
    }
    function getAll($connect){
        for($i = 0; $i < 8; $i++){
            $group_id = strval($i);
            $schedule = mysqli_query($connect, "SELECT * FROM `schedule`");
            $daysList = [];
            while($day = mysqli_fetch_assoc($schedule))
            {
                $daysList[] = $day;
            }


            echo("case "+json_decode(json_encode($daysList[0]))->group_name+":\nresponse=");
            echo json_encode($daysList);
            echo("\nbreak;\n");
        }
    }
?>