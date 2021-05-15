# responsive-table
A CSS Grid Responsive Table Experiment

Just a personal experiment with CSS Grid to achieve something that, in theory, should work.

# Results

I remember it would have been possible to use one grid for this thing, but the main issue seems to be they dropping `subgrid` from the spec and moving it to level 2.
So we can do this in a few ways:

- Use a full `<table><tr><td>` for large views
- Set `table` to `display: block;`, `tr` to `display: grid;`. We can turn `tr` to a card for smaller view.
- Use one grid for large views but group each row using `div` (like `tr`) and set them to `display: contents;`. For smaller view, set those grouping `div`s to `display: grid;`.
- Use named zones for the whole grid. Something like: `grid-template-areas: repeat(8, "Name Cores Threads Clockspeed Turbospeed TDP Price");`
  but it doesn't support repeat, so we can just loop it in js and add row numbers to the zone names. This will work really nicely, but a bit of hassle to set up. And ofc, cant be done without js.
- The best way. Use `subgrid`. But as of now, only latest FF has implemented it.

