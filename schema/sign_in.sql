-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 19, 2019 at 12:24 AM
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

-- --------------------------------------------------------

--
-- Table structure for table `sign_in_info`
--

CREATE TABLE `sign_in_info` (
  `id` int(11) NOT NULL,
  `open` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sign_in_info`
--

INSERT INTO `sign_in_info` (`id`, `open`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sign_in_members`
--

CREATE TABLE `sign_in_members` (
  `FirstName` varchar(128) NOT NULL,
  `LastName` varchar(128) NOT NULL,
  `Email` varchar(128) NOT NULL,
  `ID` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sign_in_members`
--

INSERT INTO `sign_in_members` (`FirstName`, `LastName`, `Email`, `ID`) VALUES
('Jacob', 'Huber', 'huber2jb@mail.uc.edu', '6015890011108044'),
('Thomas', 'Muha', 'muhats@mail.uc.edu', '6015890012346742');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sign_in_attendance`
--
ALTER TABLE `sign_in_attendance`
  ADD PRIMARY KEY (`Date`,`Email`);

--
-- Indexes for table `sign_in_info`
--
ALTER TABLE `sign_in_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sign_in_members`
--
ALTER TABLE `sign_in_members`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sign_in_info`
--
ALTER TABLE `sign_in_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
