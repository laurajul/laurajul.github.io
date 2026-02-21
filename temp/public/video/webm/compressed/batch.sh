for f in *.webm; do
  filename="${f%.webm}"
  ffmpeg -i "$f" -c:v libvpx-vp9 -crf 45 -b:v 0 -an "${filename}_c.webm"
done
