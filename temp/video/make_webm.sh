#!/bin/bash

# Create output directory
mkdir -p webm

# Loop through each folder like _01/, _02/, etc.
for dir in _*/; do
    folder=$(basename "$dir")
    echo "Processing $folder..."

    tmpfile=$(mktemp)

    # Get first 35 PNGs in correct order
    ls "$dir"*.png | sort -V | head -n 30 | while read -r file; do
        full_path=$(realpath "$file")
        echo "file '$full_path'" >> "$tmpfile"
    done

    # Create video
    ffmpeg -y -f concat -safe 0 -r 10 -i "$tmpfile" -c:v libvpx-vp9 -b:v 1M "webm/${folder}.webm"

    rm "$tmpfile"
done

