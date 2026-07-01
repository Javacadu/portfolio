---
title: "Understanding CSS Grid Layout"
date: 2026-07-02
description: "A beginner-friendly guide to CSS Grid and how it simplifies page layouts."
---

CSS Grid is a powerful layout system that lets you design two-dimensional layouts with rows and columns. Unlike Flexbox (which is one-dimensional), Grid handles both axes at once.

## Key Concepts

- **Grid Container**: The parent element with `display: grid`
- **Grid Items**: Direct children of the container
- **Tracks**: The rows and columns defined by `grid-template-rows` and `grid-template-columns`
- **Gaps**: Spacing between tracks using `gap`, `row-gap`, or `column-gap`

## A Simple Example

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 16px;
}
```

This creates a three-column layout where the middle column is twice as wide as the outer ones.
