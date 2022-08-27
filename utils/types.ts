import React from "react";

export interface BlogCommentInterface {
  _id: string;
  postId: string;
  name: string;
  email: string;
  comment: string;
  date: Date;
}

export interface BlogPostInterface {
  _id: string;
  title: string;
  slug: string;
  thumbnailUrl: string;
  excerpt: string;
  content: string;
  date: Date;
  isPublished: boolean;
}

export interface ReactChildren {
  children: React.ReactNode;
}

export interface PortfolioProjectInterface {
  reverse: boolean;
  title: string;
  description: string;
  thumbnail: { vertical1: string; vertical2: string; wide: string };
  tags: string[];
  links: { github?: string; live?: string };
}
