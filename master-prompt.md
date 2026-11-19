# Master Prompt: Reimagine the ACTS Computer College Website

## Role

Act as a senior web designer, creative director, UX writer, and frontend engineer. Create a complete, polished, responsive website for ACTS Computer College using the existing project as the source of institutional facts and the new images supplied for this redesign.

This is a redesign brief. The result must feel like a distinctly different website from the current ACTS website and from any earlier design prompt in this repository.

## Objective

Build a new **single-page** ACTS Computer College website that communicates the school's identity, educational purpose, heritage, leadership, and opportunities through a fresh visual concept and a clearly different layout.

The entire experience must live on one page and one route. Organize it as a thoughtfully sequenced, scrollable landing page with distinct sections. Do not create separate pages or routes for the school's story, academics, admissions, campus life, or contact.

Keep the school's recognizable **green, yellow/gold, black, and white** color family. You may adjust shades and balance for contrast and accessibility, but the palette should remain apparent throughout the site.

Everything else about the presentation should be reconsidered: the design concept, page composition, navigation treatment, hero, section order, content hierarchy, layouts, component shapes, typography, image treatment, and page and section headings.

## Source of truth for school information

Inspect the existing project and its source files before writing institutional copy. Use project data such as `src/data/institution.ts`, `src/data/personnel.ts`, `src/data/programs.ts`, and any school information documents as the factual reference.

Preserve the meaning and accuracy of these ACTS details:

- Official institution name and location.
- The school's mission and vision.
- Its history and milestone dates.
- The message from the school president, including the president's name and title.
- Official names, roles, programs, contact details, and other school facts that are included.
- The school's established year and official phrase where relevant.

Do not alter factual details to make them sound more impressive. You may correct obvious encoding or typographical errors without changing meaning. You may edit surrounding prose for clarity, but do not rewrite the mission, vision, history, or president's message in a way that changes their substance. Do not invent new school claims, dates, people, programs, achievements, quotes, or contact information. If a fact is missing or uncertain, omit it or mark it for confirmation instead of guessing.

## New creative direction

Create an original visual identity for this version of the website. Do not reproduce the current site's styling or layouts, and do not follow the older `master-development-prompt.md` reference-matching instructions.

In particular, do not reuse its distinctive floating navigation dock, hero composition, page-by-page reference layouts, section sequence, typography choices, decorative motifs, or repeated component arrangements. Treat the current site as a source of facts and functionality, not as a visual template.

Develop a different design system while retaining the requested green, yellow/gold, black, and white theme. Choose a coherent approach to typography, spacing, grid, shapes, image crops, interaction, and responsive behavior. Make the site feel intentional, credible, contemporary, and appropriate for a Philippine school with a long history.

## Original titles and headings

Write a new website title, hero title, section headings, labels, and calls to action. Do not copy the existing site's titles and headings or the titles and headings specified in the older master prompt. Since this is one page, do not create page titles for separate sections or routes.

The new wording should present the same school and accurate information from a fresh angle. Keep official proper names and titles accurate, including ACTS Computer College and the president's name and role. Do not rename official programs, institutional statements, offices, or historical milestones.

Headings may be newly written; the underlying facts and official statements must remain faithful.

## Images and assets

The user will supply a different set of pictures for this redesign. Use the replacement images as the website's visual assets.

- First inspect the available image files and map them to the most appropriate sections of the single page.
- Prefer the supplied ACTS photographs and supplied school imagery over old website imagery.
- Do not reuse old photography or portraits from the current site when replacement assets have been supplied for the same purpose.
- Do not treat reference screenshots as page backgrounds or finished components.
- Do not fabricate images of ACTS, its campus, staff, president, or students.
- If an expected image has not yet been supplied, build a layout that can accept it and use a clearly identified placeholder only if necessary. Never imply a placeholder is an authentic ACTS photograph.
- Keep image paths organized so the supplied images can be replaced easily.

## Website and implementation requirements

- Inspect the repository, existing routes, components, styles, dependencies, and factual data before implementation.
- Preserve the working application framework and established project conventions where practical.
- Build a complete, usable website, not merely a static design description.
- Keep school content organized and reusable where the existing architecture supports it.
- Make all navigation, buttons, forms, and calls to action work as presented. Do not add controls that appear functional but do nothing.
- Ensure responsive behavior across desktop, tablet, and mobile.
- Use semantic HTML, accessible labels, keyboard navigation, visible focus states, sufficient color contrast, and meaningful image alt text.
- Avoid generic template styling, repeated card grids for every section, clutter, and decorative effects that make school information harder to read.
- Do not add a backend or invent integrations unless the existing project explicitly requires them.

## Content and structure

Choose a new information architecture and section order for one scrollable page that best tells the ACTS story. Include suitable single-page sections for school introduction, academics or programs, admissions information, campus life, contact, and the required institutional content where supported by available facts. Use in-page anchor navigation for section links. Do not create separate pages or routes for these topics.

Give the mission, vision, president's message, and school history clear, prominent, readable presentations. Do not bury or omit them. Show the president's identity and official title accurately. Make the relationship between newly written headings and the underlying official information clear.

Use concise supporting copy around official statements. Do not replace the actual institutional content with generic slogans.

## Quality bar

The finished website should:

- Be immediately recognizable as ACTS through accurate school details and the requested colors.
- Look and read as a substantially different design from the existing ACTS site.
- Use the replacement image assets supplied for this redesign.
- Present the mission, vision, president's message, and history faithfully.
- Have a coherent visual system across the site without making every page or section look alike.
- Feel complete and professional at common screen sizes.
- Work as one complete, scrollable page with navigation links that move to the appropriate sections.

Before finishing, review the implementation against this prompt and correct any copied old headings, reused old imagery where replacements exist, broken navigation, missing institutional content, or visual similarity to the previous layout.
