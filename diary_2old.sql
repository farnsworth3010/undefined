-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 06, 2021 at 11:06 PM
-- Server version: 8.0.27
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ave_diary_2.0`
--

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `id` tinyint NOT NULL,
  `login` varchar(12) NOT NULL,
  `name` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`id`, `login`, `name`) VALUES
(1, 'v46c10ahpsw', '10 \"А\"');

-- --------------------------------------------------------

--
-- Table structure for table `hometask`
--

CREATE TABLE `hometask` (
  `id` tinyint NOT NULL,
  `class_id` tinyint NOT NULL,
  `date` date NOT NULL,
  `lesson_id` tinyint NOT NULL,
  `text` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `hometask`
--

INSERT INTO `hometask` (`id`, `class_id`, `date`, `lesson_id`, `text`) VALUES
(1, 1, '2021-03-19', 1, 'test1'),
(2, 1, '2021-03-19', 2, 'p29'),
(3, 1, '2021-03-19', 3, 'asdasdasdasd'),
(4, 1, '2021-03-17', 17, 'P27-29.1 упр 29.1 N5'),
(5, 1, '2021-03-17', 25, 'тест'),
(6, 1, '2021-03-17', 6, 'тест'),
(51, 1, '2021-04-22', 4, 'Весь 4 том, тест по содержанию'),
(52, 1, '2021-04-26', 14, 'P22 с. 209'),
(54, 1, '2021-04-20', 17, 'P33 упр. 24 1-6'),
(55, 1, '2021-04-20', 16, 'КР 36-49'),
(56, 1, '2021-04-20', 9, '369'),
(57, 1, '2021-04-19', 14, 'P21'),
(58, 1, '2021-04-19', 1, 'пр. 295 302 305'),
(59, 1, '2021-04-19', 8, 'P11 376а,б 378а 370а'),
(65, 1, '2021-04-27', 9, 'P12 384 388'),
(66, 1, '2021-04-21', 17, 'P33 упр 24(7) цт. С. 200 (1,2,3)'),
(67, 1, '2021-04-21', 8, '3.104 3.105а 3.106 3.107а 3.108'),
(68, 1, '2021-04-21', 6, 'Диалог'),
(71, 1, '2021-04-22', 17, 'P33-1 33-2 повт 31-33 с. 215 8-11'),
(72, 1, '2021-04-26', 19, '41-44 СР'),
(73, 1, '2021-04-23', 8, 'P27 сб. 27.1а 27.2 27.3 27.4 27.5 '),
(74, 1, '2021-04-23', 17, 'P27-30 цт с. 205 (12-20) повт формулы '),
(75, 1, '2021-04-27', 16, 'P50'),
(76, 1, '2021-04-27', 17, 'P27-33 с. 212-213 цт об тест 6 ЦТ с. 203(4,5,6,7,8,9) КР'),
(77, 1, '2021-05-03', 14, 'P23'),
(78, 1, '2021-04-28', 19, 'P45 1-3'),
(79, 1, '2021-04-27', 9, '3.138а 3.139а без графика 3.141 без 3.142 без'),
(80, 1, '2021-05-05', 12, ' P29'),
(81, 1, '2021-04-28', 8, '3.141 3.144 3.147б 3.146г 3.145б'),
(82, 1, '2021-04-29', 6, 'Билеты'),
(83, 1, '2021-04-29', 16, 'Тест'),
(97, 1, '2021-05-03', 4, 'Человек в футляре'),
(98, 1, '2021-04-30', 6, 'Билет, газета '),
(99, 1, '2021-04-30', 8, '28.1 28.2г 28.3б'),
(100, 1, '2021-05-04', 16, 'P52 описать функции письменно'),
(102, 1, '2021-05-03', 0, 'таблица ист бел'),
(103, 1, '2021-05-03', 8, '29.1а 29.2 29.3 29.4а 29.5а СР стр140'),
(104, 1, '2021-05-03', 6, 'билет'),
(105, 1, '2021-05-03', 4, 'Сочинение'),
(107, 1, '2021-05-05', 19, 'P47 задания '),
(108, 1, '2021-05-06', 4, 'Крыжовник, человек в футляре'),
(109, 1, '2021-05-06', 2, 'Отрывок '),
(110, 1, '2021-05-04', 6, 'Билеты '),
(111, 1, '2021-05-04', 17, 'P35 упр 25 1-3'),
(112, 1, '2021-05-05', 17, '.пар. 35, упр. 25 (1-3) по Эл. приложению'),
(113, 1, '2021-05-05', 6, 'Билеты'),
(114, 1, '2021-05-05', 8, '27.9 27.10');

-- --------------------------------------------------------

--
-- Table structure for table `lessons`
--

CREATE TABLE `lessons` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `lessons`
--

INSERT INTO `lessons` (`id`, `name`) VALUES
(1, 'Бел. яз.'),
(2, 'Бел. лит.'),
(3, 'Рус. яз.'),
(4, 'Рус. лит.'),
(5, 'Ин. яз.'),
(6, 'Англ. яз.'),
(7, 'Матем.'),
(8, 'Алгебра'),
(9, 'Геометрия'),
(10, 'Информ.'),
(11, 'Человек и мир'),
(12, 'Всем. ист.'),
(13, 'Ист. бел.'),
(14, 'Обществов.'),
(15, 'География'),
(16, 'Биология'),
(17, 'Физика'),
(18, 'Астрономия'),
(19, 'Химия'),
(20, 'ИЗО'),
(21, 'Музыка'),
(22, 'Труд'),
(23, 'Искусство'),
(24, 'Черчение'),
(25, 'Физкульт.'),
(26, 'ДМП'),
(27, 'ОБЖ'),
(28, 'Кл. час'),
(29, 'Инф. час'),
(31, 'Астрономия');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int NOT NULL,
  `class_id` int NOT NULL,
  `text` text NOT NULL,
  `type` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `id` int NOT NULL,
  `lesson_number` int NOT NULL,
  `room` varchar(20) NOT NULL,
  `class_id` int NOT NULL,
  `lesson_id` int NOT NULL,
  `day_number` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`id`, `lesson_number`, `room`, `class_id`, `lesson_id`, `day_number`) VALUES
(1, 1, '427', 1, 31, 1),
(2, 2, '433', 1, 12, 1),
(3, 3, '311 404 413', 1, 6, 1),
(4, 4, '311 404 413', 1, 6, 1),
(5, 5, '429', 1, 9, 1),
(6, 6, '429', 1, 9, 1),
(7, 7, '123', 1, 10, 1),
(8, 1, '408', 1, 19, 2),
(9, 2, '427', 1, 17, 2),
(10, 3, '345', 1, 4, 2),
(11, 4, '311 404 413', 1, 6, 2),
(12, 5, '401', 1, 8, 2),
(13, 6, '427', 1, 17, 2),
(15, 1, '310', 1, 16, 3),
(16, 2, '345', 1, 3, 3),
(17, 3, '427', 1, 17, 3),
(18, 4, '435', 1, 8, 3),
(19, 5, '427', 1, 17, 3),
(20, 6, '311 404 413', 1, 6, 3),
(28, 1, '343', 1, 2, 4),
(29, 2, '429', 1, 1, 4),
(30, 3, 'сп. зал', 1, 25, 4),
(31, 4, '408', 1, 19, 4),
(32, 5, '411', 1, 8, 4),
(33, 6, '433', 1, 13, 4),
(34, 7, '431', 1, 14, 4),
(35, 1, '310', 1, 16, 5),
(36, 2, '405', 1, 8, 5),
(37, 3, 'сп. зал', 1, 25, 5),
(38, 4, '311 404 406', 1, 6, 5),
(39, 5, '310', 1, 15, 5),
(40, 6, '345', 1, 4, 5),
(41, 7, '123', 1, 10, 5);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int UNSIGNED NOT NULL,
  `user_login` varchar(30) CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL,
  `user_password` varchar(32) CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL,
  `user_avatar` tinyint(1) NOT NULL DEFAULT '0',
  `user_hash` varchar(32) CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL DEFAULT '',
  `user_birthday` date DEFAULT NULL,
  `user_firstname` varchar(12) CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL,
  `user_lastname` varchar(12) CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL,
  `class_id` tinyint DEFAULT NULL,
  `status` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_login`, `user_password`, `user_avatar`, `user_hash`, `user_birthday`, `user_firstname`, `user_lastname`, `class_id`, `status`) VALUES
(1, 'kgbsenior', '6344f315098ccfdb051985d27f0dd811', 1, 'bf209e965e6d504bdac3a7682a032ff6', NULL, 'Ростислав ', 'Данченко', 1, '1'),
(2, 'IGOR78', 'ba681f41ba8a056820c2a15a6958024e', 1, 'dc7acd4c894137846fb26dde68bfa4b7', NULL, 'Игорь', 'Данченко', 1, ''),
(3, 'zerne', 'e5f9e1a85b3313aad4e0ab2a1fe386fb', 1, '7255bc9012bea2eca170aa86d5484545', NULL, 'зерне', 'зерне', 1, ''),
(10, 'test', '6344f315098ccfdb051985d27f0dd811', 0, '7b357182cafed3ccd7f9b9324c283941', NULL, 'test', 'test', 1, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hometask`
--
ALTER TABLE `hometask`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lessons`
--
ALTER TABLE `lessons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_2` (`id`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `id` tinyint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `hometask`
--
ALTER TABLE `hometask`
  MODIFY `id` tinyint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT for table `lessons`
--
ALTER TABLE `lessons`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
