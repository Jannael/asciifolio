name: Cyber-Noir Terminal
colors:
surface: '#121414'
surface-dim: '#121414'
surface-bright: '#383939'
surface-container-lowest: '#0d0e0f'
surface-container-low: '#1a1c1c'
surface-container: '#212424'
surface-container-high: '#2c2e2e'
surface-container-highest: '#383939'
on-surface: '#e1e3e3'
on-surface-variant: '#bfc8c8'
outline: '#8a9292'
outline-variant: '#3f4949'
primary: '#00ff41'
on-primary: '#00390a'
primary-container: '#005313'
on-primary-container: '#7cff79'
primary-fixed: '#7cff79'
primary-fixed-dim: '#5ee25e'
on-primary-fixed: '#002103'
on-primary-fixed-variant: '#005313'
secondary: '#b3cbaf'
on-secondary: '#1f3520'
secondary-container: '#364c35'
on-secondary-container: '#cee8cb'
tertiary: '#a1ced5'
on-tertiary: '#00363c'
tertiary-container: '#1f4d53'
on-tertiary-container: '#bceaf1'
error: '#ffb4ab'
on-error: '#690005'
error-container: '#93000a'
on-error-container: '#ffdad6'
typography:
font-family: JetBrains Mono, monospace
font-headline-lg: 32px / 40px
font-headline-md: 28px / 36px
font-headline-sm: 24px / 32px
font-title-lg: 22px / 28px
font-title-md: 16px / 24px
font-title-sm: 14px / 20px
font-body-lg: 16px / 24px
font-body-md: 14px / 20px
font-body-sm: 12px / 16px
font-label-lg: 14px / 20px
font-label-md: 12px / 16px
font-label-sm: 11px / 16px
spacing:
margin: 24px
gutter: 16px
unit: 8px

---

# Cyber-Noir Terminal Design System

## Visual Identity

- **Palette**: Matrix-inspired green (`#00ff41`) on deep charcoal and black backgrounds
- **Typography**: JetBrains Mono throughout — reinforces CLI aesthetic
- **Metaphor**: "System log", "executable", and "terminal output" patterns for content organization
- **Effects**: Subtle scanlines and CRT flicker for retro authenticity

## Section Header Pattern

All sections use a consistent terminal-style header:

```
SYSTEM_LOG: SECTION_NAME                                    FILTER: ALL_TIME
────────────────────────────────────────────────────────────────────────────
```

Implementation:

- `SYSTEM_LOG` + section name in `text-accent font-mono text-xs font-bold tracking-widest uppercase`
- Right-aligned `FILTER: ALL_TIME` in `text-text-secondary/50`
- `<hr class="border-border">` separator below

## Experience Section

- Left border accent (`border-l-2 border-accent/30`) per entry
- `■` bullet + position in accent, company after `@`
- Date in brackets `[MM/YY - Present]`
- Achievement boxes: grid layout with `>> ACHIEVEMENT_N` header
- STACK line: monospace, skills joined by `·`
- Entries separated by `<hr class="border-border/30">`

## Projects Section

- Same header pattern as Experience
- Cards with full border (`border-border border bg-main/30 p-6`)
- Layout: title + URL + links (as bordered buttons) on left, thumbnail on right
- Highlights: 2-column grid boxes with `>> highlight` prefix
- STACK line at bottom in monospace
- Hover: left border illuminates (`hover:border-accent`)

## Education Section

- Same header pattern as Experience
- Left border accent (`border-l-2 border-accent/30`) per entry
- `■` bullet + degree in accent, institution after `@`
- Date in brackets `[YYYY - Present]`
- Highlights: 2-column grid boxes with `>> HIGHLIGHT` prefix
- Links: underline style with `↗` arrow
- Entries separated by `<hr class="border-border/30">`

## Certifications Section

- Same header pattern as Experience
- Left border accent (`border-l-2 border-accent/30`) per entry
- `■` bullet + cert name in accent
- "View Certificate" button on right
- Highlights: 2-column grid boxes
- Skills: monospace STACK line

## Component Rules

- **No border-radius** on new elements (terminal aesthetic)
- **Monospace** for metadata (dates, labels, stack)
- **Accent color** (`#00ff41`) for interactive/hover states
- **Border separators** (`border-border`) for visual hierarchy
- **`space-y-*`** for vertical rhythm between entries
