import React from 'react';

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
}