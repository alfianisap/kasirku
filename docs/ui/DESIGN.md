---
name: Warm Merchant Modern
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#4f4632'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#817660'
  outline-variant: '#d3c5ac'
  surface-tint: '#775a00'
  primary: '#775a00'
  on-primary: '#ffffff'
  primary-container: '#ffc61a'
  on-primary-container: '#6e5400'
  inverse-primary: '#f6be0a'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#006c49'
  on-tertiary: '#ffffff'
  tertiary-container: '#57e6aa'
  on-tertiary-container: '#006444'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdf98'
  primary-fixed-dim: '#f6be0a'
  on-primary-fixed: '#251a00'
  on-primary-fixed-variant: '#5a4300'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
  currency-display:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  currency-display-mobile:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-lg: 1.5rem
  margin: 1rem
  margin-lg: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system is crafted specifically for high-velocity point-of-sale environments, blending modern digital efficiency with the approachable warmth of traditional community commerce. The interface prioritizes rapid scanning, effortless interaction during peak store hours, and zero ambiguity under varying store lighting conditions.

The visual style embraces **Modern Tactile Utility**:
- **Clarity and High Contrast**: Crisp charcoal elements ground the layout against clean, anti-glare surfaces, ensuring that cashier staff can operate effortlessly with zero cognitive strain.
- **Friendly Professionalism**: Warm amber-yellow accents evoke hospitality, speed, and energetic optimism without drifting into distracting playfulness.
- **Micro-tactile Feedback**: Subtle, confident surface shifts give tablet and desktop users physical-like confirmation for fast transactional workflows (add to cart, tender payment, split bill).

## Colors

The palette balances energy with functional precision:

- **Primary (`#FFC61A`)**: Warm amber yellow. Reserved for high-value interactive highlights, the primary checkout triggers, active mode selections, and key order badges. To maintain legibility, text placed over primary fills must always use Slate Charcoal (`#1E293B`).
- **Secondary (`#1E293B`)**: Slate Charcoal. Acts as the functional backbone: navigation sidebars, receipt headers, primary button states when maximum contrast is demanded, and critical numerical summaries.
- **Tertiary (`#10B981`)**: Emerald Success. Strictly applied for positive cash flows, payment received states, printer connectivity indicators, and active profit margins.
- **Neutral Canvas (`#F8FAFC`)**: A calm, low-glare off-white background that prevents eye fatigue across long retail shifts.
- **Structural Borders (`#E2E8F0`)**: Subtle separation lines that anchor grid components and product tiles without visual noise.
- **Auxiliary Alert (`#EF4444`)**: Retained for refunds, voided line items, stock depletion warnings, and cancel transactions.

## Typography

Typography prioritizes fast numerical reading and unmistakable hierarchy:

- **Display & Headings (Plus Jakarta Sans)**: Used across brand signatures, dashboard metrics, modal heads, and category labels. Its rounded, open letterforms deliver a welcoming touch while remaining structural.
- **Body & Data Tables (Inter)**: The standard for product listings, SKU tags, and form labels. Its optimized x-height guarantees legibility at small sizes.
- **Financial & Currency Numerals**: Tabular figures (`font-variant-numeric: tabular-nums`) must be activated across all prices, quantity counters, discount tags, and total computations in Inter to maintain exact vertical column alignment.

## Layout & Spacing

The layout is built for dual environments: touch screen point-of-sale terminals (tablets/POS hardware) and desktop management portals.

- **POS Terminal Split**:
  - **Catalog Zone (Fluid 65-70% width)**: Multi-column responsive product card grid (2 columns on small screens, 3-4 columns on tablet landscape/desktop).
  - **Cart/Checkout Drawer (Fixed 380px–420px width on desktop/tablet)**: Persistent, vertically scrolling list of current cart items anchored by a sticky checkout bar.
- **Adaptive Breakpoints**:
  - **Mobile (< 768px)**: Single column with bottom sticky total bar; catalog expands full width; cart opens as an overlay bottom sheet.
  - **Tablet Landscape & Desktop (≥ 768px)**: Dual-pane interface with zero screen shifting. Catalog on the left, running total and action controls on the right.
- **Target Sizes**: Interactive buttons, tiles, and quantity adjustments maintain a minimum tap target of 44×44px for reliable touch input.

## Elevation & Depth

This design system uses a crisp, **low-elevation layered surface** model combined with soft ambient drop-shadows to ensure visual separation without clutter:

- **Surface 0 (Base Canvas)**: `#F8FAFC`. Provides a grounded, non-reflective workspace for catalogs and dashboard lists.
- **Surface 1 (Cards, Product Tiles, Inputs)**: Pure `#FFFFFF` bounded by a 1px border of `#E2E8F0`. Hover or touch-active states shift borders to `#CBD5E1` with a micro-lift shadow: `0 2px 4px -1px rgba(30, 41, 59, 0.05)`.
- **Surface 2 (Cart Summary, Sticky Bars, Flyout Panels)**: `#FFFFFF` with directional elevation: `0 4px 12px -2px rgba(30, 41, 59, 0.08)` to demarcate actionable overlays from passive lists.
- **Surface 3 (Modals, Payment Terminal Dialogs)**: Centered over a tinted backdrop overlay (`rgba(30, 41, 59, 0.4)`), styled with `0 20px 25px -5px rgba(30, 41, 59, 0.12)`.

## Shapes

The design uses a balanced **Level 2 (Rounded)** shape scale. This level keeps product cards, category badges, and quantity selectors friendly and tap-friendly without wasting screen real estate:

- Standard controls (input fields, table cards, items): `0.5rem` (`rounded-md`).
- Primary checkout containers, modal dialogs, and floating cards: `1rem` (`rounded-lg`).
- Category chips, status pills, and counter circular controls: Full radius / pill shape (`rounded-full`).

## Components

### Buttons
- **Primary Transactional (Checkout, Pay Now)**: Filled with Primary Warm Amber (`#FFC61A`), text in Charcoal (`#1E293B`, `font-weight: 600`), 0.5rem corner radius. Hover shifts to `#F5B800`.
- **Secondary Action (Print Bill, Hold Order, Add Note)**: Filled with Neutral Light (`#F1F5F9`), text in Charcoal (`#1E293B`), border: 1px solid `#E2E8F0`.
- **Success / Finalize (Payment Received)**: Filled with Emerald (`#10B981`), text in Pure White (`#FFFFFF`).
- **Destructive (Void, Delete Line)**: Ghost style with `#EF4444` icon/text, shifting to soft red tint (`#FEF2F2`) on press.

### Chips & Category Tabs
- Inactive: Background `#FFFFFF`, border `#E2E8F0`, text `#64748B`.
- Active: Background `#1E293B`, border `#1E293B`, text `#FFFFFF` with an amber highlight dot or badge indicator.

### Product Grid Cards
- Pure `#FFFFFF` container with 1px `#E2E8F0` border.
- Visual thumbnail area with fixed aspect ratio, followed by clean item title (2 lines max), current stock status pill, and currency formatted in bold Inter tabular numbers.
- Integrated quick-tap increment/decrement steppers appearing on card hover or selection.

### Cart & Line Item Lists
- Clean rows separated by hairline dividers (`#F1F5F9`).
- Item title and variant left-aligned; unit price, inline quantity stepper (`-`, `qty`, `+`), and subtotal right-aligned using tabular figures.

### Form Inputs & Barcode Search
- Height: 44px (touch-first target).
- White background with `#E2E8F0` border, focusing to a 2px outline of `#FFC61A`.
- Embedded prefix icons (search magnifying glass, barcode scanner glyph) in `#94A3B8`.

### Checkboxes & Radio Buttons
- Checkbox: 20×20px box, `#E2E8F0` border; when checked, filled with `#1E293B` and white check icon.
- Radio: Rounded pill option groups for tender selection (Cash, QRIS, Transfer, Debit) with `#FFC61A` border and soft amber wash when active.