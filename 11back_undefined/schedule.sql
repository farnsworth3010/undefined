-- phpMyAdmin SQL Dump
-- version 5.2.0-2.fc37
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 06, 2022 at 11:50 AM
-- Server version: 10.5.16-MariaDB
-- PHP Version: 8.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stdtest`
--

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `id` int(11) NOT NULL,
  `lesson_number` int(3) NOT NULL,
  `audience` varchar(100) NOT NULL,
  `group_id` int(11) NOT NULL,
  `day_number` int(3) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `subgroup_id` int(3) DEFAULT NULL,
  `teacher` varchar(100) NOT NULL,
  `group_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`id`, `lesson_number`, `audience`, `group_id`, `day_number`, `subject`, `subgroup_id`, `teacher`, `group_name`) VALUES
(1, 2, 'ауд. 141', 0, 2, 'Основы алгоритмизации и программирования (лк)', NULL, 'Корчевская Е.А. (доц.)', '22ИСИТ1д'),
(2, 3, 'ауд. 141', 0, 2, 'История белорусской государственности (лк)', NULL, 'Пархимович Н.Н. (доц.)', '22ИСИТ1д'),
(3, 4, 'ауд. 307', 0, 2, 'Основы алгоритмизации и программирования (лаб)', 1, 'Столяренко А.Ю. (пр.)', '22ИСИТ1д'),
(4, 4, 'ауд. 219', 0, 2, 'Основы алгоритмизации и программирования (лаб)', 2, 'Иванова Л.В. (пр.)', '22ИСИТ1д'),
(5, 5, 'ауд. 531', 0, 2, 'История белорусской государственности (пз)', NULL, 'Шрамук Е.П. (пр.)', '22ИСИТ1д'),
(6, 1, 'ауд. 141', 0, 3, 'Медиакультура личности (лк)(фак-в)', NULL, 'Витько Е.А. (доц.)', '22ИСИТ1д'),
(7, 2, 'ауд. 313', 0, 3, 'Основы компьютерной графики (лаб)', 1, 'Шпаков С.А. (ст.пр.)', '22ИСИТ1д'),
(8, 2, 'ауд. 333', 0, 3, 'Основы компьютерной графики (лаб)', 2, 'Исаченко А.С. (ст.пр.)', '22ИСИТ1д'),
(9, 3, 'ауд. 703', 0, 3, 'Математический анализ (лк)', NULL, 'Александрович Т.А. (ст.пр.)', '22ИСИТ1д'),
(10, 4, 'ауд. 317', 0, 3, 'Математический анализ (пз)', NULL, 'Александрович Т.А. (ст.пр.)', '22ИСИТ1д'),
(11, 5, 'ауд. спортзал', 0, 3, 'Физическая культура (пз)', NULL, '', '22ИСИТ1д'),
(12, 2, 'ауд. 426', 0, 4, 'Основы конструирования программ (лк)', NULL, 'Корчевская Е.А. (доц.)', '22ИСИТ1д'),
(13, 3, 'ауд. 307', 0, 4, 'Основы конструирования программ (лаб)', 1, 'Петрова Т.К. (ст.пр.)', '22ИСИТ1д'),
(14, 3, 'ауд. 308', 0, 4, 'Основы конструирования программ (лаб)', 2, 'Степанов В.А. (пр.)', '22ИСИТ1д'),
(15, 4, 'ауд. 119', 0, 4, 'Технологии разработки программного обеспечения (лк)', NULL, 'Ермоченко С.А. (доц.)', '22ИСИТ1д'),
(16, 6, 'ауд. 319', 0, 4, 'Иностранный язык (пз)', NULL, 'Кажекина Л.В. (ст.пр.)', '22ИСИТ1д'),
(17, 2, 'ауд. 141', 0, 5, 'Логика (лк)', NULL, 'Давлятова Е.В. (доц.)', '22ИСИТ1д'),
(18, 3, 'ауд. 213', 0, 5, 'Иностранный язык (пз)(фак-в)', 1, 'Балло Ю.А. (ст.пр.)', '22ИСИТ1д'),
(19, 3, 'ауд. 535', 0, 5, 'Иностранный язык (пз)(фак-в)', 2, 'Шкатуло Н.М. (ст.пр.)', '22ИСИТ1д'),
(20, 4, 'ауд. 309', 0, 5, 'Иностранный язык (пз)(фак-в)', 1, 'Балло Ю.А. (ст.пр.)', '22ИСИТ1д'),
(21, 4, 'ауд. 307', 0, 5, 'Иностранный язык (пз)(фак-в)', 2, 'Шкатуло Н.М. (ст.пр.)', '22ИСИТ1д'),
(22, 5, '', 0, 5, 'Технологии разработки программного обеспечения (лаб)', 1, 'Петрова Т.К. (ст.пр.)', '22ИСИТ1д'),
(23, 5, '', 0, 5, 'Технологии разработки программного обеспечения (лаб)', 2, 'Степанов В.А. (пр.)', '22ИСИТ1д'),
(24, 2, 'ауд. 528', 1, 2, 'Линейная алгебра (пз)', NULL, 'Александрович Т.А. (ст.пр.)', '22МИ1д'),
(25, 3, 'ауд. 141', 1, 2, 'История белорусской государственности (лк)', NULL, 'Пархимович Н.Н. (доц.)', '22МИ1д'),
(26, 4, 'ауд. 200е', 1, 2, 'Программирование в визуализированных средах (лк)', NULL, 'Шедько В.В. (ст.пр.)', '22МИ1д'),
(27, 5, 'ауд. 313', 1, 2, 'Компьютерная графика и мультимедиа (лаб)', 1, 'Исаченко А.С. (ст.пр.)', '22МИ1д'),
(28, 5, 'ауд. 303', 1, 2, 'Компьютерная графика и мультимедиа (лаб)', 2, 'Стайнова А.А. (пр.)', '22МИ1д'),
(29, 6, 'ауд. 526', 1, 2, 'История белорусской государственности (пз)', NULL, 'Шрамук Е.П. (пр.)', '22МИ1д'),
(30, 1, 'ауд. 141', 1, 3, 'Медиакультура личности (лк)(фак-в)', NULL, 'Витько Е.А. (доц.)', '22МИ1д'),
(31, 2, 'ауд. 128', 1, 3, 'Основы психологии и педагогики (пз)', NULL, 'Турковский В.И. (доц.)', '22МИ1д'),
(32, 3, 'ауд. 425', 1, 3, 'Элементарная математика (пз)', NULL, 'Ализарчик Л.Л. (доц.)', '22МИ1д'),
(33, 4, 'ауд. 213', 1, 3, 'Элементарная математика (лк)', NULL, 'Ализарчик Л.Л. (доц.)', '22МИ1д'),
(34, 5, 'ауд. спортзал', 1, 3, 'Физическая культура (пз)', NULL, '', '22МИ1д'),
(35, 2, 'ауд. 128', 1, 4, 'Аналитическая геометрия (лк)', NULL, 'Подоксенов М.Н. (доц.)', '22МИ1д'),
(36, 3, 'ауд. 219', 1, 4, 'Иностранный язык (общее владение) (пз)', 1, 'Кажекина Л.В. (ст.пр.)', '22МИ1д'),
(37, 3, 'ауд. 303', 1, 4, 'Иностранный язык (общее владение) (пз)', 2, 'Шкатуло Н.М. (ст.пр.)', '22МИ1д'),
(38, 4, 'ауд. 219', 1, 4, 'Иностранный язык (общее владение) (пз)', 1, 'Кажекина Л.В. (ст.пр.)', '22МИ1д'),
(39, 4, 'ауд. 307', 1, 4, 'Иностранный язык (общее владение) (пз)', 2, 'Шкатуло Н.М. (ст.пр.)', '22МИ1д'),
(40, 5, '', 1, 4, '', 1, '', '22МИ1д'),
(41, 5, 'ауд. 313', 1, 4, '', 2, 'Исаченко А.С. (ст.пр.)', '22МИ1д'),
(42, 6, 'ауд. 319', 1, 4, 'Иностранный язык (пз)', NULL, 'Кажекина Л.В. (ст.пр.)', '22МИ1д'),
(43, 2, 'ауд. 426', 1, 5, 'Основы психологии и педагогики (лк)', NULL, 'Турковский В.И. (доц.)', '22МИ1д'),
(44, 3, 'ауд. 128', 1, 5, 'Аналитическая геометрия (пз)', NULL, 'Подоксенов М.Н. (доц.)', '22МИ1д'),
(45, 4, 'ауд. 319', 1, 5, 'Основы информатики (лаб)', 1, 'Чиркина А.А. (доц.)', '22МИ1д'),
(46, 4, 'ауд. 308', 1, 5, 'Основы информатики (лаб)', 2, 'Шпаков С.А. (ст.пр.)', '22МИ1д'),
(47, 5, 'ауд. 303', 1, 5, 'Программирование в визуализированных средах (лаб)', 1, 'Исаченко А.С. (ст.пр.)', '22МИ1д'),
(48, 5, '', 1, 5, 'Программирование в визуализированных средах (лаб)', 2, '', '22МИ1д'),
(49, 1, 'ауд. 119', 2, 2, 'Алгебра и теория чисел (пз)', NULL, 'Мехович А.П. (доц.)', '22ПИ_ВЕБ1д'),
(50, 2, 'ауд. 534', 2, 2, 'Алгебра и теория чисел (лк)', NULL, 'Мехович А.П. (доц.)', '22ПИ_ВЕБ1д'),
(51, 3, 'ауд. 141', 2, 2, 'История белорусской государственности (лк)', NULL, 'Пархимович Н.Н. (доц.)', '22ПИ_ВЕБ1д'),
(52, 4, 'ауд. 427', 2, 2, 'Дискретная математика (пз)', NULL, 'Александрович Т.А. (ст.пр.)', '22ПИ_ВЕБ1д'),
(53, 5, 'ауд. 307', 2, 2, 'Основы и методологии программирования (лаб)', 1, 'Исаченко Ю.В. (пр.)', '22ПИ_ВЕБ1д'),
(54, 5, 'ауд. 308', 2, 2, 'Основы и методологии программирования (лаб)', 2, 'Столяренко А.Ю. (пр.)', '22ПИ_ВЕБ1д'),
(55, 1, 'ауд. 141', 2, 3, 'Медиакультура личности (лк)(фак-в)', NULL, 'Витько Е.А. (доц.)', '22ПИ_ВЕБ1д'),
(56, 2, 'ауд. 534', 2, 3, 'Аналитическая геометрия (пз)', NULL, 'Подоксенов М.Н. (доц.)', '22ПИ_ВЕБ1д'),
(57, 3, 'ауд. 141', 2, 3, 'Аналитическая геометрия (лк)', NULL, 'Подоксенов М.Н. (доц.)', '22ПИ_ВЕБ1д'),
(58, 4, 'ауд. 119', 2, 3, 'Основы и методологии программирования (лк)', NULL, 'Корчевская Е.А. (доц.)', '22ПИ_ВЕБ1д'),
(59, 5, 'ауд. спортзал', 2, 3, 'Физическая культура (пз)', NULL, '', '22ПИ_ВЕБ1д'),
(60, 2, 'ауд. 119', 2, 4, 'Введение в специальность (лк)', NULL, 'Ермоченко С.А. (доц.)', '22ПИ_ВЕБ1д'),
(61, 3, 'ауд. 221', 2, 4, 'Введение в специальность (лаб)', 1, 'Исаченко Ю.В. (пр.)', '22ПИ_ВЕБ1д'),
(62, 3, 'ауд. 321', 2, 4, 'Введение в специальность (лаб)', 2, 'Жук Т.Д. (пр.)', '22ПИ_ВЕБ1д'),
(63, 4, 'ауд. 534', 2, 4, 'Дискретная математика (пз)', NULL, 'Александрович Т.А. (ст.пр.)', '22ПИ_ВЕБ1д'),
(64, 5, 'ауд. 307', 2, 4, 'Основы и методологии программирования (лаб)', 1, 'Исаченко Ю.В. (пр.)', '22ПИ_ВЕБ1д'),
(65, 5, 'ауд. 308', 2, 4, 'Основы и методологии программирования (лаб)', 2, 'Столяренко А.Ю. (пр.)', '22ПИ_ВЕБ1д'),
(66, 6, 'ауд. 319', 2, 4, 'Иностранный язык (пз)', NULL, 'Кажекина Л.В. (ст.пр.)', '22ПИ_ВЕБ1д'),
(67, 2, 'ауд. 534', 2, 5, 'Математический анализ (лк)', NULL, 'Кавитова Т.В. (ст.пр.)', '22ПИ_ВЕБ1д'),
(68, 3, 'ауд. 536', 2, 5, 'Математический анализ (пз)', NULL, 'Александрович Т.А. (ст.пр.)', '22ПИ_ВЕБ1д'),
(69, 4, 'ауд. 531', 2, 5, 'Математический анализ (пз)', NULL, 'Александрович Т.А. (ст.пр.)', '22ПИ_ВЕБ1д'),
(70, 5, 'ауд. 703', 2, 5, 'История белорусской государственности (пз)', NULL, 'Шрамук Е.П. (пр.)', '22ПИ_ВЕБ1д'),
(71, 2, 'ауд. 534', 3, 2, 'Алгебра и теория чисел (лк)', NULL, 'Мехович А.П. (доц.)', '22ПИ_ПОКС1д'),
(72, 3, 'ауд. 141', 3, 2, 'История белорусской государственности (лк)', NULL, 'Пархимович Н.Н. (доц.)', '22ПИ_ПОКС1д'),
(73, 4, 'ауд. 530', 3, 2, 'Аналитическая геометрия (пз)', NULL, 'Подоксенов М.Н. (доц.)', '22ПИ_ПОКС1д'),
(74, 1, 'ауд. 141', 3, 3, 'Медиакультура личности (лк)(фак-в)', NULL, 'Витько Е.А. (доц.)', '22ПИ_ПОКС1д'),
(75, 2, 'ауд. 119', 3, 3, 'Основы и методологии программирования (лк)', NULL, 'Корчевская Е.А. (доц.)', '22ПИ_ПОКС1д'),
(76, 3, 'ауд. 141', 3, 3, 'Аналитическая геометрия (лк)', NULL, 'Подоксенов М.Н. (доц.)', '22ПИ_ПОКС1д'),
(77, 4, 'ауд. 308', 3, 3, 'Основы и методологии программирования (лаб)', 1, 'Исаченко Ю.В. (пр.)', '22ПИ_ПОКС1д'),
(78, 4, 'ауд. 221', 3, 3, 'Основы и методологии программирования (лаб)', 2, 'Столяренко А.Ю. (пр.)', '22ПИ_ПОКС1д'),
(79, 5, 'ауд. спортзал', 3, 3, 'Физическая культура (пз)', NULL, '', '22ПИ_ПОКС1д'),
(80, 6, '', 3, 3, '', 1, '', '22ПИ_ПОКС1д'),
(81, 6, 'ауд. 308', 3, 3, '', 2, 'Жук Т.Д. (пр.)', '22ПИ_ПОКС1д'),
(82, 2, 'ауд. 119', 3, 4, 'Введение в специальность (лк)', NULL, 'Ермоченко С.А. (доц.)', '22ПИ_ПОКС1д'),
(83, 3, 'ауд. 141', 3, 4, 'Основы и методологии программирования (лк)', NULL, 'Корчевская Е.А. (доц.)', '22ПИ_ПОКС1д'),
(84, 4, 'ауд. 627', 3, 4, 'Дискретная математика и математическая логика (пз)', NULL, 'Караулова Т.Б. (ст.пр.)', '22ПИ_ПОКС1д'),
(85, 5, 'ауд. 612', 3, 4, 'История белорусской государственности (пз)', NULL, 'Шрамук Е.П. (пр.)', '22ПИ_ПОКС1д'),
(86, 6, 'ауд. 319', 3, 4, 'Иностранный язык (пз)', NULL, 'Кажекина Л.В. (ст.пр.)', '22ПИ_ПОКС1д'),
(87, 1, 'ауд. 309', 3, 5, 'Введение в специальность (лаб)', 1, 'Иванова Л.В. (пр.)', '22ПИ_ПОКС1д'),
(88, 1, '', 3, 5, 'Введение в специальность (лаб)', 2, '', '22ПИ_ПОКС1д'),
(89, 2, 'ауд. 534', 3, 5, 'Математический анализ (лк)', NULL, 'Кавитова Т.В. (ст.пр.)', '22ПИ_ПОКС1д'),
(90, 3, 'ауд. 534', 3, 5, 'Математический анализ (пз)', NULL, 'Кавитова Т.В. (ст.пр.)', '22ПИ_ПОКС1д'),
(91, 4, 'ауд. 536', 3, 5, 'Математический анализ (пз)', NULL, 'Кавитова Т.В. (ст.пр.)', '22ПИ_ПОКС1д'),
(92, 5, 'ауд. 317', 3, 5, 'Алгебра и теория чисел (пз)', NULL, 'Мехович А.П. (доц.)', '22ПИ_ПОКС1д'),
(93, 1, 'ауд. 526', 4, 2, 'Основы библиотечно-библиографических знаний (пз)(фак-в)', NULL, 'Голубев В.А. (пр.)', '22ПМ1д'),
(94, 2, 'ауд. 307', 4, 2, 'Основы и методологии программирования (лаб)', 1, 'Степанов В.А. (пр.)', '22ПМ1д'),
(95, 2, 'ауд. 308', 4, 2, 'Основы и методологии программирования (лаб)', 2, 'Столяренко А.Ю. (пр.)', '22ПМ1д'),
(96, 3, 'ауд. 528', 4, 2, 'Дифференциальное и интегральное исчисление (пз)', NULL, 'Иванова Ж.В. (доц.)', '22ПМ1д'),
(97, 4, 'ауд. 141', 4, 2, 'История белорусской государственности (лк)', NULL, 'Пархимович Н.Н. (доц.)', '22ПМ1д'),
(98, 5, 'ауд. 128', 4, 2, 'Дискретная математика (пз)', NULL, 'Караулова Т.Б. (ст.пр.)', '22ПМ1д'),
(99, 1, 'ауд. 141', 4, 3, 'Медиакультура личности (лк)(фак-в)', NULL, 'Витько Е.А. (доц.)', '22ПМ1д'),
(100, 2, 'ауд. 119', 4, 3, 'Основы и методологии программирования (лк)', NULL, 'Корчевская Е.А. (доц.)', '22ПМ1д'),
(101, 3, 'ауд. 141', 4, 3, 'Аналитическая геометрия (лк)', NULL, 'Подоксенов М.Н. (доц.)', '22ПМ1д'),
(102, 4, 'ауд. 526', 4, 3, 'Дифференциальное и интегральное исчисление (пз)', NULL, 'Иванова Ж.В. (доц.)', '22ПМ1д'),
(103, 5, 'ауд. спортзал', 4, 3, 'Физическая культура (пз)', NULL, '', '22ПМ1д'),
(104, 2, 'ауд. 307', 4, 4, 'Основы и методологии программирования (лаб)', 1, 'Степанов В.А. (пр.)', '22ПМ1д'),
(105, 2, 'ауд. 309', 4, 4, 'Основы и методологии программирования (лаб)', 2, 'Столяренко А.Ю. (пр.)', '22ПМ1д'),
(106, 3, 'ауд. 141', 4, 4, 'Основы и методологии программирования (лк)', NULL, 'Корчевская Е.А. (доц.)', '22ПМ1д'),
(107, 4, 'ауд. 517', 4, 4, 'Основы высшей алгебры (лк)', NULL, 'Мехович А.П. (доц.)', '22ПМ1д'),
(108, 5, 'ауд. 531', 4, 4, 'Основы высшей алгебры (пз)', NULL, 'Мехович А.П. (доц.)', '22ПМ1д'),
(109, 6, 'ауд. 303', 4, 4, 'Иностранный язык (пз)(фак-в)', NULL, 'Гончарова С.А. (пр.)', '22ПМ1д'),
(110, 2, 'ауд. 405', 4, 5, 'Дискретная математика (лк)', NULL, 'Караулова Т.Б. (ст.пр.)', '22ПМ1д'),
(111, 3, 'ауд. 405', 4, 5, 'Иностранный язык (пз)(фак-в)', NULL, 'Гончарова С.А. (пр.)', '22ПМ1д'),
(112, 4, 'ауд. 405', 4, 5, 'Иностранный язык (пз)(фак-в)', NULL, 'Гончарова С.А. (пр.)', '22ПМ1д'),
(113, 2, 'ауд. 141', 5, 2, 'Основы алгоритмизации и программирования (лк)', NULL, 'Корчевская Е.А. (доц.)', '22ПОИТ1д'),
(114, 3, 'ауд. 113', 5, 2, 'Основы программной инженерии (лк)', NULL, 'Ермоченко С.А. (доц.)', '22ПОИТ1д'),
(115, 4, 'ауд. 141', 5, 2, 'История белорусской государственности (лк)', NULL, 'Пархимович Н.Н. (доц.)', '22ПОИТ1д'),
(116, 5, 'ауд. 306', 5, 2, 'Основы программной инженерии (лаб)', 1, 'Иванова Л.В. (пр.)', '22ПОИТ1д'),
(117, 5, 'ауд. 333', 5, 2, 'Основы программной инженерии (лаб)', 2, 'Жук Т.Д. (пр.)', '22ПОИТ1д'),
(118, 2, 'ауд. 528', 5, 3, 'Математическая логика (пз)', NULL, 'Караулова Т.Б. (ст.пр.)', '22ПОИТ1д'),
(119, 3, 'ауд. 303', 5, 3, 'Иностранный язык (пз)(фак-в)', 1, 'Балло Ю.А. (ст.пр.)', '22ПОИТ1д'),
(120, 3, 'ауд. 308', 5, 3, 'Иностранный язык (пз)(фак-в)', 2, 'Шкатуло Н.М. (ст.пр.)', '22ПОИТ1д'),
(121, 4, 'ауд. 306', 5, 3, 'Иностранный язык (пз)(фак-в)', 1, 'Балло Ю.А. (ст.пр.)', '22ПОИТ1д'),
(122, 4, 'ауд. 309', 5, 3, 'Иностранный язык (пз)(фак-в)', 2, 'Шкатуло Н.М. (ст.пр.)', '22ПОИТ1д'),
(123, 5, 'ауд. спортзал', 5, 3, 'Физическая культура (пз)', NULL, '', '22ПОИТ1д'),
(124, 2, 'ауд. 528', 5, 4, 'Математический анализ (лк)', NULL, 'Иванова Ж.В. (доц.)', '22ПОИТ1д'),
(125, 3, 'ауд. 526', 5, 4, 'Математический анализ (лк)', NULL, 'Иванова Ж.В. (доц.)', '22ПОИТ1д'),
(126, 4, 'ауд. 526', 5, 4, 'История белорусской государственности (пз)', NULL, 'Шрамук Е.П. (пр.)', '22ПОИТ1д'),
(127, 5, 'ауд. 526', 5, 4, 'Линейная алгебра и аналитическая геометрия (пз)', NULL, 'Шлапаков С.А. (доц.)', '22ПОИТ1д'),
(128, 6, 'ауд. 303', 5, 4, 'Иностранный язык (пз)(фак-в)', NULL, 'Гончарова С.А. (пр.)', '22ПОИТ1д'),
(129, 2, 'ауд. 313', 5, 5, 'Основы компьютерной графики (лаб)', 1, 'Булгакова Н.В. (ст.пр.)', '22ПОИТ1д'),
(130, 2, 'ауд. 333', 5, 5, 'Основы компьютерной графики (лаб)', 2, 'Стайнова А.А. (пр.)', '22ПОИТ1д'),
(131, 3, 'ауд. 530', 5, 5, 'Дискретная математика (лк)', NULL, 'Караулова Т.Б. (ст.пр.)', '22ПОИТ1д'),
(132, 4, 'ауд. 426', 5, 5, 'Дискретная математика (пз)', NULL, 'Караулова Т.Б. (ст.пр.)', '22ПОИТ1д'),
(133, 5, 'ауд. 534', 5, 5, 'Математический анализ (пз)', NULL, 'Иванова Ж.В. (доц.)', '22ПОИТ1д'),
(134, 2, 'ауд. 530', 6, 2, 'Высшая математика (лк)', NULL, 'Шлапаков С.А. (доц.)', '22УИР1д'),
(135, 3, 'ауд. 530', 6, 2, 'Высшая математика (пз)', NULL, 'Шлапаков С.А. (доц.)', '22УИР1д'),
(136, 4, 'ауд. 141', 6, 2, 'История белорусской государственности (лк)', NULL, 'Пархимович Н.Н. (доц.)', '22УИР1д'),
(137, 2, 'ауд. 200е', 6, 3, 'Прикладная информатика (лк)', NULL, 'Чиркина А.А. (доц.)', '22УИР1д'),
(138, 3, 'ауд. 308', 6, 3, 'Иностранный язык (пз)(фак-в)', 1, 'Шкатуло Н.М. (ст.пр.)', '22УИР1д'),
(139, 3, 'ауд. 219', 6, 3, 'Иностранный язык (пз)(фак-в)', 2, 'Кажекина Л.В. (ст.пр.)', '22УИР1д'),
(140, 4, 'ауд. 309', 6, 3, 'Иностранный язык (пз)(фак-в)', 1, 'Шкатуло Н.М. (ст.пр.)', '22УИР1д'),
(141, 4, 'ауд. 219', 6, 3, 'Иностранный язык (пз)(фак-в)', 2, 'Кажекина Л.В. (ст.пр.)', '22УИР1д'),
(142, 5, 'ауд. спортзал', 6, 3, 'Физическая культура (пз)', NULL, '', '22УИР1д'),
(143, 2, 'ауд. 213', 6, 4, 'Экономическая теория (лк)', NULL, 'Трацевская Л.Ф. (доц.)', '22УИР1д'),
(144, 3, 'ауд. 412', 6, 4, 'Экономическая теория (пз)', NULL, 'Трацевская Л.Ф. (доц.)', '22УИР1д'),
(145, 4, 'ауд. 313', 6, 4, 'Компьютерная графика (лаб)', 1, 'Шпаков С.А. (ст.пр.)', '22УИР1д'),
(146, 4, 'ауд. 308', 6, 4, 'Компьютерная графика (лаб)', 2, 'Степанов В.А. (пр.)', '22УИР1д'),
(147, 5, '', 6, 4, 'Прикладная информатика (лаб)', 1, 'Чиркина А.А. (доц.)', '22УИР1д'),
(148, 5, '', 6, 4, 'Прикладная информатика (лаб)', 2, 'Шпаков С.А. (ст.пр.)', '22УИР1д'),
(149, 6, 'ауд. 303', 6, 4, 'Иностранный язык (пз)(фак-в)', NULL, 'Гончарова С.А. (пр.)', '22УИР1д'),
(150, 2, 'ауд. 307', 6, 5, 'Архитектура вычислительных систем (лаб)', 1, 'Исаченко Ю.В. (пр.)', '22УИР1д'),
(151, 2, 'ауд. 303', 6, 5, 'Архитектура вычислительных систем (лаб)', 2, 'Шпаков С.А. (ст.пр.)', '22УИР1д'),
(152, 3, '', 6, 5, 'Прикладная информатика (лаб)', 1, 'Чиркина А.А. (доц.)', '22УИР1д'),
(153, 3, '', 6, 5, 'Прикладная информатика (лаб)', 2, 'Шпаков С.А. (ст.пр.)', '22УИР1д'),
(154, 4, 'ауд. 200е', 6, 5, 'Компьютерная графика (лк)', NULL, 'Булгакова Н.В. (ст.пр.)', '22УИР1д'),
(155, 5, 'ауд. 113', 6, 5, 'Белорусский язык (профессиональная лексика) (пз)', NULL, 'Зайцева Е.А. (ст.пр.)', '22УИР1д'),
(156, 6, 'ауд. 526', 6, 5, 'История белорусской государственности (пз)', NULL, 'Шрамук Е.П. (пр.)', '22УИР1д'),
(157, 1, '', 7, 2, '', 1, '', '22ФИЗ1д'),
(158, 1, 'ауд. 208', 7, 2, '', 2, 'Денисенко Т.А. (пр.)', '22ФИЗ1д'),
(159, 2, 'ауд. 141', 7, 2, 'Основы алгоритмизации и программирования (лк)', NULL, 'Корчевская Е.А. (доц.)', '22ФИЗ1д'),
(160, 3, 'ауд. 627', 7, 2, 'Безопасность жизнедеятельности человека (лк)', NULL, 'Дударев А.Н. (ст.пр.)', '22ФИЗ1д'),
(161, 4, 'ауд. 141', 7, 2, 'История белорусской государственности (лк)', NULL, 'Пархимович Н.Н. (доц.)', '22ФИЗ1д'),
(162, 5, 'ауд. 517', 7, 2, 'Аналитическая геометрия и линейная алгебра (лк)', NULL, 'Шлапаков С.А. (доц.)', '22ФИЗ1д'),
(163, 2, 'ауд. 307', 7, 3, 'Основы алгоритмизации и программирования (лаб)', 1, 'Исаченко Ю.В. (пр.)', '22ФИЗ1д'),
(164, 2, 'ауд. 308', 7, 3, 'Основы алгоритмизации и программирования (лаб)', 2, 'Степанов В.А. (пр.)', '22ФИЗ1д'),
(165, 3, 'ауд. 113', 7, 3, 'Механика (лк)', NULL, 'Антонович Д.А. (доц.)', '22ФИЗ1д'),
(166, 4, 'ауд. 534', 7, 3, 'Аналитическая геометрия и линейная алгебра (лк)', NULL, 'Шлапаков С.А. (доц.)', '22ФИЗ1д'),
(167, 5, 'ауд. спортзал', 7, 3, 'Физическая культура (пз)', NULL, '', '22ФИЗ1д'),
(168, 6, 'ауд. 517', 7, 3, 'История белорусской государственности (пз)', NULL, 'Шрамук Е.П. (пр.)', '22ФИЗ1д'),
(169, 1, 'ауд. 526', 7, 4, 'Основы библиотечно-библиографических знакий (пз)(фак-в)', NULL, 'Голубев В.А. (пр.)', '22ФИЗ1д'),
(170, 2, 'ауд. 526', 7, 4, 'Аналитическая геометрия и линейная алгебра (пз)', NULL, 'Александрович Т.А. (ст.пр.)', '22ФИЗ1д'),
(171, 3, 'ауд. 216', 7, 4, 'Элементарная физика (пз)', NULL, 'Пышненко О.В. (ст.пр.)', '22ФИЗ1д'),
(172, 4, 'ауд. 216', 7, 4, 'Механика (лк)', NULL, 'Антонович Д.А. (доц.)', '22ФИЗ1д'),
(173, 5, 'ауд. 703', 7, 4, 'Механика (пз)', NULL, 'Чернявский М.М. (пр.)', '22ФИЗ1д'),
(174, 6, 'ауд. 303', 7, 4, 'Иностранный язык (пз)(фак-в)', NULL, 'Гончарова С.А. (пр.)', '22ФИЗ1д'),
(175, 1, '', 7, 5, '', 1, '', '22ФИЗ1д'),
(176, 1, 'ауд. 208', 7, 5, '', 2, 'Денисенко Т.А. (пр.)', '22ФИЗ1д'),
(177, 2, 'ауд. 521', 7, 5, 'Безопасность жизнедеятельности человека (пз)', NULL, 'Орлова Н.А. (пр.)', '22ФИЗ1д'),
(178, 3, 'ауд. 703', 7, 5, 'Механика (пз)', NULL, 'Чернявский М.М. (пр.)', '22ФИЗ1д'),
(179, 4, 'ауд. 119', 7, 5, 'Иностранный язык (пз)', NULL, 'Кажекина Л.В. (ст.пр.)', '22ФИЗ1д'),
(180, 5, 'ауд. 517', 7, 5, 'Аналитическая геометрия и линейная алгебра (пз)', NULL, 'Александрович Т.А. (ст.пр.)', '22ФИЗ1д');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=181;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
