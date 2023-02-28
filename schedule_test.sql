-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-server
-- Generation Time: Feb 12, 2023 at 07:56 PM
-- Server version: 8.0.19
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `schedule_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `id` int NOT NULL,
  `lesson_number` int NOT NULL,
  `audience` varchar(100) NOT NULL,
  `group_id` int NOT NULL,
  `day_number` int NOT NULL,
  `subject` varchar(100) NOT NULL,
  `subgroup_id` int DEFAULT NULL,
  `teacher` varchar(100) NOT NULL,
  `group_name` varchar(100) NOT NULL,
  `faculty` tinyint NOT NULL,
  `course` tinyint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`id`, `lesson_number`, `audience`, `group_id`, `day_number`, `subject`, `subgroup_id`, `teacher`, `group_name`, `faculty`, `course`) VALUES
(1, 1, 'ауд. 517', 0, 1, 'Теория и практика специального образования (лк)', NULL, 'Чобот Ж.П. (ст.пр.)', '47', 1, 4),
(2, 2, 'ауд. 517', 0, 1, 'Основы теории групп (лк)', NULL, 'Воробьев Н.Н. (проф.)', '47', 1, 4),
(3, 3, 'ауд. 416', 0, 1, 'Семейная педагогика (лк)', NULL, 'Турковский В.И. (доц.)', '47', 1, 4),
(4, 1, 'ауд. 309', 1, 1, 'Проектирование комплексных систем защиты информации (лаб)', 1, 'Пышненко О.В. (ст.пр.)', '48', 1, 4),
(5, 1, 'ауд. 213', 1, 1, 'Автоматизированые системы управления производственными процессами (лаб)', 2, 'Бобровский А.Ю. (пр.)', '48', 1, 4),
(6, 2, 'ауд. 703', 1, 1, 'Автоматизированые системы управления производственными процессами (лк)', NULL, 'Буевич А.Э. (доц.)', '48', 1, 4),
(7, 3, 'ауд. 213', 1, 1, 'Программно-аппаратные средства обеспечения информационной безопасности (лаб)', 1, 'Сапелко Т.И. (ст.пр.)', '48', 1, 4),
(8, 3, '', 1, 1, '', 2, '', '48', 1, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
