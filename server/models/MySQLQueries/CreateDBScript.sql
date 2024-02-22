CREATE DATABASE SocialMoviesDB;

USE SocialMoviesDB;

CREATE TABLE `users` (
  `id` BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
  `username` varchar(20) UNIQUE NOT NULL,
  `nickname` varchar(30),
  `email` varchar(250) UNIQUE NOT NULL,
  `password` text NOT NULL,
  `profile_img` text,
  `description` varchar(250),
  `user_token` text,
  `created_at` timestamp DEFAULT (now())
);

CREATE TABLE `favorite_movies` (
  `imdbID` varchar(255),
  `user_id` BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),
  PRIMARY KEY (`imdbID`, `user_id`)
);

CREATE TABLE `watched_movies` (
  `imdbID` varchar(255),
  `user_id` BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),
  PRIMARY KEY (`imdbID`, `user_id`)
);

CREATE TABLE `unwatched_movies` (
  `imdbID` varchar(255),
  `user_id` BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),
  PRIMARY KEY (`imdbID`, `user_id`)
);

CREATE TABLE `posts_users` (
  `post_id` BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),
  `user_id` BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),
  PRIMARY KEY (`post_id`, `user_id`)
);

CREATE TABLE `posts` (
  `id` BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
  `imdb_id` varchar(255),
  `content` varchar(280),
  `likes` integer NOT NULL DEFAULT 0,
  `created_at` timestamp DEFAULT (now())
);

CREATE TABLE `posts_comments` (
  `posts_id` BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),
  `comments_id` BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),
  PRIMARY KEY (`posts_id`, `comments_id`)
);

CREATE TABLE `comments` (
  `id` BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
  `user_id` BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),
  `content` varchar(280),
  `likes` integer NOT NULL DEFAULT 0,
  `created_at` timestamp DEFAULT (now())
);

CREATE TABLE `followers` (
  `follower_id` BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),
  `following_id` BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),
  PRIMARY KEY (`follower_id`, `following_id`)
);

ALTER TABLE `favorite_movies` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `watched_movies` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `unwatched_movies` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `posts_users` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `posts_users` ADD FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`);

ALTER TABLE `posts_comments` ADD FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`);

ALTER TABLE `posts_comments` ADD FOREIGN KEY (`comments_id`) REFERENCES `comments` (`id`);

ALTER TABLE `followers` ADD FOREIGN KEY (`following_id`) REFERENCES `users` (`id`);

ALTER TABLE `followers` ADD FOREIGN KEY (`follower_id`) REFERENCES `users` (`id`);

ALTER TABLE `comments` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
