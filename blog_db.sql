-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1:3306
-- Üretim Zamanı: 22 Şub 2020, 19:36:11
-- Sunucu sürümü: 5.7.28
-- PHP Sürümü: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `blog_db`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `blog`
--

DROP TABLE IF EXISTS `blog`;
CREATE TABLE IF NOT EXISTS `blog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post` varchar(250) NOT NULL,
  `username` varchar(25) NOT NULL,
  `post_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Tablo döküm verisi `blog`
--

INSERT INTO `blog` (`id`, `post`, `username`, `post_date`) VALUES
(1, 'aytugggg', 'aytug', '2020-02-18 11:39:12'),
(2, 'asdasdas', 'aytug', '2020-02-18 11:40:52'),
(3, 'asdsadsadsadsa', 'aytug', '2020-02-18 11:42:05'),
(4, 'asdsdasdsad', 'aytug', '2020-02-18 11:55:01'),
(5, 'asddsadad', 'aytug', '2020-02-18 11:59:38'),
(14, 'asdadasdas', 'aytugsss', '2020-02-22 13:03:27'),
(7, 'asdasdas', 'aytug', '2020-02-18 12:15:45'),
(8, 'asdasdasdas', 'aytug', '2020-02-18 12:16:16'),
(9, 'asdasdasdasasdasdsad', 'aytug', '2020-02-18 12:16:23'),
(10, 'adasdasdsa', 'aytug', '2020-02-18 12:16:56'),
(11, 'dasdasdasdda', 'aytug', '2020-02-20 21:50:40'),
(12, 'asdadsadasdsa', 'aytug', '2020-02-20 21:50:43'),
(13, 'asdasdsadasdasd', 'aytug', '2020-02-20 21:50:46'),
(15, 'adassada', 'aytug', '2020-02-22 13:37:00');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users_tbl`
--

DROP TABLE IF EXISTS `users_tbl`;
CREATE TABLE IF NOT EXISTS `users_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL,
  `email` varchar(50) NOT NULL,
  `referrer` varchar(25) NOT NULL,
  `photo` varchar(50) NOT NULL,
  `token` varchar(12) DEFAULT NULL,
  `token_Expire` datetime NOT NULL,
  `role` varchar(10) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Tablo döküm verisi `users_tbl`
--

INSERT INTO `users_tbl` (`id`, `username`, `password`, `email`, `referrer`, `photo`, `token`, `token_Expire`, `role`) VALUES
(1, 'aytug', 'tombul', 'aytugtombul@gmail.com', 'aytug', 'sss.png', NULL, '2020-02-18 11:38:53', 'admin'),
(6, 'asdasda', 'asdasdsads', 'adasdasdasd', 'asdsadasdsa', 'cvphoto.jfif', NULL, '2020-02-22 21:55:28', 'user');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
