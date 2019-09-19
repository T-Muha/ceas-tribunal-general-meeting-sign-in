-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 19, 2019 at 12:27 AM
-- Server version: 5.7.24-log
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sign_in`
--

-- --------------------------------------------------------

--
-- Table structure for table `sign_in_attendance`
--

CREATE TABLE `sign_in_attendance` (
  `Date` varchar(128) NOT NULL,
  `Email` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sign_in_attendance`
--

INSERT INTO `sign_in_attendance` (`Date`, `Email`) VALUES
('09/18/2019', 'huber2jb@mail.uc.edu'),
('09/18/2019', 'muhats@mail.uc.edu'),
('09/19/2019', 'huber2jb@mail.uc.edu');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sign_in_attendance`
--
ALTER TABLE `sign_in_attendance`
  ADD PRIMARY KEY (`Date`,`Email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
