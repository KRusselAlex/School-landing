# Color Customization Guide for Complex Pascal Website

## Quick Start

All website colors are centralized in **ONE FILE**: `/styles/globals.css`

## How to Change Colors

Open `/styles/globals.css` and modify the color values at the top of the `:root` section:

```css
:root {
  /* === COMPLEX PASCAL COLOR SCHEME === */
  /* Change these values to update colors across the entire website */
  --brand-blue: #1e40af;        /* Primary Blue - Main blue color */
  --brand-orange: #f97316;      /* Primary Orange - Main orange color */
  --brand-blue-light: #3b82f6;  /* Light Blue variant */
  --brand-blue-dark: #1e3a8a;   /* Dark Blue variant */
  --brand-orange-light: #fb923c;/* Light Orange variant */
  --brand-orange-dark: #ea580c; /* Dark Orange variant */
  
  /* ... rest of the file */
}
```

## Main Color Variables

### Primary Colors (Blue)
- `--brand-blue`: Main blue color used for primary buttons, headers, accents
- `--brand-blue-light`: Lighter shade for hover effects
- `--brand-blue-dark`: Darker shade for active states

### Secondary Colors (Orange)
- `--brand-orange`: Main orange color used for secondary buttons, event hall sections
- `--brand-orange-light`: Lighter shade for highlights
- `--brand-orange-dark`: Darker shade for emphasis

## Example: Changing to Different Colors

### Example 1: Green and Purple Theme
```css
--brand-blue: #059669;        /* Green */
--brand-orange: #7c3aed;      /* Purple */
--brand-blue-light: #10b981;  
--brand-blue-dark: #047857;   
--brand-orange-light: #8b5cf6;
--brand-orange-dark: #6d28d9; 
```

### Example 2: Navy and Gold Theme
```css
--brand-blue: #1e3a8a;        /* Navy */
--brand-orange: #f59e0b;      /* Gold */
--brand-blue-light: #3b82f6;  
--brand-blue-dark: #1e293b;   
--brand-orange-light: #fbbf24;
--brand-orange-dark: #d97706; 
```

## Where Colors Are Used

- **Blue (Primary)**: 
  - Primary school sections
  - Main navigation
  - Primary buttons
  - Header accents

- **Orange (Secondary)**:
  - Secondary school highlights
  - Event hall sections
  - Secondary buttons
  - Call-to-action elements

## That's It!

Just change those 6 color values in `/styles/globals.css` and the entire website will automatically update to use your new colors!
