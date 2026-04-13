# Wise AI Design System

A design system inspired by the Wise AI brand (wiseai.framer.ai). Dark cosmic aesthetic with clean, modern typography and spacious layouts.

## Brand Identity

- **Company**: Wise AI
- **Tagline**: "We Make AI Work for You, Not Against You."
- **Aesthetic**: Dark cosmic/space theme with subtle starfield particles, clean and minimal, professional AI/tech feel

## Color Palette

### Core Colors

| Token               | Hex       | Usage                                    |
| -------------------- | --------- | ---------------------------------------- |
| `--wise-bg-primary`  | `#0a0b14` | Main background - deep space black       |
| `--wise-bg-secondary`| `#111227` | Card/section backgrounds                 |
| `--wise-bg-tertiary` | `#1a1b3a` | Elevated surfaces, hover states          |
| `--wise-border`      | `#1e2044` | Subtle borders                           |
| `--wise-border-light`| `#2a2d5a` | Highlighted borders                      |

### Text Colors

| Token               | Hex       | Usage                                    |
| -------------------- | --------- | ---------------------------------------- |
| `--wise-text-primary`| `#ffffff` | Headings, primary text                   |
| `--wise-text-secondary`| `#9ca3af` | Body text, descriptions                |
| `--wise-text-muted`  | `#6b7280` | Subtle labels, footnotes                 |

### Accent Colors

| Token               | Hex       | Usage                                    |
| -------------------- | --------- | ---------------------------------------- |
| `--wise-accent-blue` | `#3b82f6` | Primary accent, badges, links            |
| `--wise-accent-blue-hover`| `#2563eb` | Hover state for blue accent        |
| `--wise-accent-green`| `#10b981` | Success states, paid status              |
| `--wise-accent-amber`| `#f59e0b` | Warning states, pending status           |
| `--wise-accent-red`  | `#ef4444` | Error states, overdue status             |

### Button Colors

| Token               | Hex       | Usage                                    |
| -------------------- | --------- | ---------------------------------------- |
| `--wise-btn-primary-bg`| `#ffffff`| Primary button background (white)        |
| `--wise-btn-primary-text`| `#0a0b14`| Primary button text (dark)            |
| `--wise-btn-secondary-bg`| `transparent`| Secondary button (outlined)       |
| `--wise-btn-secondary-border`| `#374151`| Secondary button border            |
| `--wise-btn-secondary-text`| `#ffffff`| Secondary button text               |

## Typography

### Font Stack

```
Primary: "Geist", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
Monospace: "Geist Mono", "SF Mono", "Fira Code", monospace
```

### Type Scale

| Name     | Size    | Weight | Line Height | Usage                    |
| -------- | ------- | ------ | ----------- | ------------------------ |
| Display  | 48px    | 700    | 1.1         | Hero headings            |
| H1       | 36px    | 700    | 1.2         | Page titles              |
| H2       | 24px    | 600    | 1.3         | Section headings         |
| H3       | 18px    | 600    | 1.4         | Card titles              |
| Body     | 16px    | 400    | 1.6         | Paragraph text           |
| Body SM  | 14px    | 400    | 1.5         | Secondary text, labels   |
| Caption  | 12px    | 500    | 1.4         | Captions, badges         |
| Mono     | 14px    | 400    | 1.5         | Invoice numbers, amounts |

## Spacing System

Base unit: 4px

| Token  | Value | Usage                        |
| ------ | ----- | ---------------------------- |
| `xs`   | 4px   | Tight inline spacing         |
| `sm`   | 8px   | Icon gaps, compact padding   |
| `md`   | 16px  | Default padding, card gaps   |
| `lg`   | 24px  | Section padding              |
| `xl`   | 32px  | Large section gaps           |
| `2xl`  | 48px  | Page section spacing         |
| `3xl`  | 64px  | Hero spacing                 |

## Border Radius

| Token     | Value | Usage                     |
| --------- | ----- | ------------------------- |
| `sm`      | 6px   | Badges, small elements    |
| `md`      | 8px   | Buttons, inputs           |
| `lg`      | 12px  | Cards, modals             |
| `xl`      | 16px  | Large cards               |
| `full`    | 9999px| Pill shapes, avatars      |

## Component Patterns

### Cards
```css
background: var(--wise-bg-secondary);
border: 1px solid var(--wise-border);
border-radius: 12px;
padding: 24px;
```

### Buttons - Primary (White)
```css
background: #ffffff;
color: #0a0b14;
border-radius: 8px;
padding: 10px 20px;
font-weight: 500;
font-size: 14px;
transition: opacity 0.2s;
```

### Buttons - Secondary (Outlined)
```css
background: transparent;
color: #ffffff;
border: 1px solid #374151;
border-radius: 8px;
padding: 10px 20px;
font-weight: 500;
font-size: 14px;
transition: border-color 0.2s, background-color 0.2s;
```

### Inputs
```css
background: var(--wise-bg-primary);
border: 1px solid var(--wise-border);
border-radius: 8px;
padding: 10px 14px;
color: #ffffff;
font-size: 14px;
```

### Status Badges
```css
/* Pill-shaped badges */
border-radius: 9999px;
padding: 4px 12px;
font-size: 12px;
font-weight: 500;
```

### Table Rows
```css
border-bottom: 1px solid var(--wise-border);
padding: 12px 0;
transition: background-color 0.15s;
```

## Background Effect

The signature Wise AI cosmic background uses a subtle starfield/particle effect:

```css
/* Cosmic gradient background */
background: radial-gradient(ellipse at top, #111227 0%, #0a0b14 50%, #0a0b14 100%);
```

Overlaid with subtle dot/star particles using pseudo-elements or canvas animation for ambient depth.

## Print / Invoice Document Theme

For actual invoices sent to clients, switch to a clean light theme:

| Token               | Hex       | Usage                                |
| -------------------- | --------- | ------------------------------------ |
| `--print-bg`         | `#ffffff` | White background                     |
| `--print-text`       | `#111827` | Dark text                            |
| `--print-text-secondary`| `#6b7280`| Gray secondary text               |
| `--print-border`     | `#e5e7eb` | Light gray borders                   |
| `--print-accent`     | `#3b82f6` | Brand accent for headers             |

## Shadows

| Token     | Value                                    | Usage            |
| --------- | ---------------------------------------- | ---------------- |
| `sm`      | `0 1px 2px rgba(0, 0, 0, 0.3)`          | Subtle lift      |
| `md`      | `0 4px 12px rgba(0, 0, 0, 0.4)`         | Cards            |
| `lg`      | `0 8px 24px rgba(0, 0, 0, 0.5)`         | Modals, dialogs  |
| `glow`    | `0 0 20px rgba(59, 130, 246, 0.15)`     | Accent glow      |
