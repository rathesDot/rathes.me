---
description: "Look at an image and suggest descriptive alt text for it. Usage: /image:alt <path> [path...]"
argument-hint: <image-path> [image-path...]
model: sonnet
---

# Alt Text Suggestion

Suggest accessible alt text for one or more images by actually looking at them — not by guessing from the filename.

## Target images

`$ARGUMENTS`

## Instructions

1. Resolve `$ARGUMENTS` to one or more image file paths. If it's empty, ask the user which image(s) to look at instead of guessing. If it's a directory or a glob, expand it to the individual image files inside.
2. Read (view) each image directly — don't infer content from the filename, a nearby caption, or an existing `alt`/`title` value already in the code. Those may be stale or wrong, which is often exactly why this command gets used.
3. For each image, write one concise, specific alt text describing what's actually depicted: the subject, what it's doing, and any visually distinguishing detail that matters for someone who can't see the image. Avoid:
   - Redundant framing like "Image of…" or "Picture of…" — screen readers already announce it's an image.
   - Generic labels that would fit any photo in the same set (e.g. reusing one location name for several different photos taken there) — describe what's different about *this* frame.
   - Transcribing personally identifying details into the text — license plates, street addresses, people's names, visible documents/screens with personal info. Describe the scene without them (e.g. "a vintage car" rather than reading out its plate).
   - Decorative filler or flowery language — plain and specific beats clever.
4. If several images are near-duplicates of the same subject (e.g. a burst of shots of one thing), still give each its own distinct description based on what's actually different in that frame (angle, background, action), the way three photos of different cars at the same market got three different descriptions rather than one shared label.
5. Report the suggestions back to the user, one per image, before touching any files.
6. Separately, check whether the codebase already references these image files (grep for the filename/import — e.g. `alt=`, `title=` props, `<img>` tags) and tell the user where you found them. Only edit those usages if the user asks you to apply the suggestions — this command's job is the suggestion, not silently rewriting source files.
