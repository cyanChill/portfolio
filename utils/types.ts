import React from "react";

export type BlogCommentType = {
  _id: string;
  postId: string;
  name: string;
  email: string;
  comment: string;
  date: Date;
};

export type BlogPostType = {
  _id: string;
  title: string;
  slug: string;
  thumbnailUrl: string;
  excerpt: string;
  content: string;
  date: Date;
  isPublished: boolean;
};

export type ReactChildren = {
  children: React.ReactNode;
};

export type PortfolioProjectType = {
  reverse: boolean;
  title: string;
  description: string;
  thumbnail: { vertical1: string; vertical2: string; wide: string };
  tags: string[];
  links: { github?: string; live?: string };
};
