-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 04 fév. 2022 à 13:46
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cv1`
--

-- --------------------------------------------------------

--
-- Structure de la table `contenu`
--

CREATE TABLE `contenu` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `contenu`
--

INSERT INTO `contenu` (`id`, `titre`, `text`) VALUES
(1, 'Profil', 'Fais le vide dans ton esprit, sois sans formes, sans contours, comme l’eau.\r\n    L’eau qu’on verse  dans une tasse devient la tasse ”\r\nCette citation illustre parfaitement ma personnalité, car je suis une personne avec de la présence d’esprit tout en ayant des capacités d\'adaptation.\r\nAinsi, je suis une personne ayant des qualifications dans le sens de vos recherches.\r\n'),
(2, 'Centres d’intérêts', '•Je possède quelques titres \r\nde tennis de table qui garantissent\r\n une exécution rapide et efficace de\r\n mes actions.\r\n•Digital painting\r\n'),
(3, 'chrono', '-2021-\r\n Université de technologie - Université Gustave Eiffel\r\nDiplôme universitaire et technologique des métiers du\r\n multimédia et de l\'internet.\r\n\r\n	•Projet tutoré de Première année, rôle: Chef de projet \r\net graphiste\r\n'),
(4, 'Coordonnées', 'adresse d’habitation: \r\n92 rue de Malnoue\r\n Noisy-le-Grand-93160\r\n\r\ne-maill:\r\nm.andriamiraho@gmail.com\r\n\r\ntéléphone: \r\n07 64 23 29 48'),
(5, 'Compétences', 'Adobe Première Pro /Pack office /Adobe Illustrator /Adobe Indesign /Adobe Photoshop # Javascript /CSS /HTML /PHP # Français - C2 /Anglais - B1 / Malgache - des notions');

-- --------------------------------------------------------

--
-- Structure de la table `project`
--

CREATE TABLE `project` (
  `id_project` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `short_description` varchar(255) NOT NULL,
  `language` varchar(50) NOT NULL,
  `nbrLike` int(100) NOT NULL,
  `description` text NOT NULL,
  `link` varchar(255) NOT NULL,
  `imgLink` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `project`
--

INSERT INTO `project` (`id_project`, `name`, `short_description`, `language`, `nbrLike`, `description`, `link`, `imgLink`) VALUES
(1, 'Outfeat', 'Une plateforme pour promouvoir les vêtements éco-responsable', 'php;html;css;js;sql;bootstrap', 12, 'Projet tutoré de dernière année de DUT MMI. \nRôle: Scrum master et développeur full-stack.\nJ\'ai été chargé de créer from scratch - en collaboration avec d\'autre développeur- la web application (PWA) OutFeat avec des fonctionnalités innovantes.', 'https://outfeat.fr/', './src/img/imgProject/outfeat/outfeat.svg|./src/img/imgProject/outfeat/outfeat-swipe.svg|./src/img/imgProject/outfeat/outfeat-swipe-desktop.svg'),
(2, 'MMi dating simulator', 'Un jeu de type visual novel pour l\'orientation\r\n', 'php;html;css;javascript;jquery', 6, 'Projet tutoré de première année du DUT MMI. Rôles: chef de projet et graphiste', 'https://github.com/FeeZBLH/LPDJ_ProjetTut', './src/img/mmi_dating.png|https://lh6.googleusercontent.com/86QpO4rD80j1H2HQ_vhrMs0ZOraHI3v0is5sgxowLQSuz1osski3pqSlzpW_Ive0-EGmizLo190q0hDb208hrBa5NRW5I99p0mkFSi4R_sZj86dtJ9MuJWgD8YxLQOqsCa8-VS5W-sw'),
(3, 'You have been coroned', 'Un jeu de type \"shoot them up\"', 'js;d3', 20, 'Projet réalisé dans le cadre d\'un TP sur la programmation orientée objet', 'https://github.com/BambiDesOceans/You-veBeenCoroned', './src/img/corona.svg'),
(4, 'MMi TODO', 'organisation des projet', 'php;css;html;jquery', 5, 'Projet de ma propre initiative pour organisé les travaux des mmi', 'https://www.mathieuandry.fr/mmi.todo/', './src/img/imgProject/mmiTodo/M.png|./src/img/imgProject/mmiTodo/screen.png'),
(5, 'Trend', 'Blog réalisé dans la matière développement back', 'php;bootstrap;css;html;javascript', 10, 'Le projet Trend est un mini blog disposant d\'un backoffice. Rôle: développeur fullstack', 'https://trend.marinavelasco.fr/', '../img/Trend.svg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `contenu`
--
ALTER TABLE `contenu`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id_project`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `contenu`
--
ALTER TABLE `contenu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `project`
--
ALTER TABLE `project`
  MODIFY `id_project` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
