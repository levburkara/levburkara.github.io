# VDEL homepage + site-wide width update

Copy each file/folder in this package into your GitHub repository **at the same path**, replacing the existing files when prompted. Commit to GitHub. This is a patch, not a full-site replacement.

## Files changed

- `css/main.scss`: increases common max width from 1000 to 1320 pixels; text layout max width from 900 to 1120 pixels; adds responsive homepage styles.
- `_layouts/homelay.html`: full-width homepage, removes news sidebar, adds News beneath featured cards.
- `_pages/home.md`: new short introduction and six-card Jekyll loop.
- `_data/featured_research.yml`: six editable slots.
- `images/featured/*.jpg`: cropped and padded figures from the two supplied papers.

## Replacing paper in slot 3

1. Save the chosen illustration as `images/featured/new-paper-image.jpg` (JPEG/PNG both work).
2. Open `_data/featured_research.yml` and find `# SLOT 3`.
3. Update `title`, `subtitle`, `description`, `image`, `journal`, and `url` in that block.
4. Commit the changes. Nothing in the layout, HTML, or other slots needs to change.

The six slots intentionally **repeat the two supplied papers three times each** for evaluation. Replace four of them with genuine papers before public launch. The images are cropped from uploaded PDFs, rather than from stock images.

## Notes

The site's existing navigation, footer, individual pages, publication lists, and news data are unchanged. Existing pictures on the research and team pages are not touched. The main reading column remains slightly narrower than the full site for legibility.
