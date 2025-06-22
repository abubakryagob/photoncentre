#!/bin/bash

# Base directory
BASE_DIR="/Users/abubakribrahim/Desktop/Photon_SCNSM/Photon-SCNSM.github.io-main"

# Ensure shared directory exists
mkdir -p "$BASE_DIR/shared"

# Create backup directory
BACKUP_DIR="$BASE_DIR/backups/$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"

# Backup current files
cp "$BASE_DIR"/*.html "$BACKUP_DIR/"
cp "$BASE_DIR"/*.js "$BACKUP_DIR/"
cp "$BASE_DIR"/*.css "$BACKUP_DIR/"

# Update each HTML file
for file in "$BASE_DIR"/*.html; do
  filename=$(basename "$file")
  case "$filename" in
    "index.html")
      title="Home"
      description="Explore the latest in natural sciences and metaphysics at Photon Scientific Centre."
      ;;
    "vision.html")
      title="Our Vision and Mission"
      description="Learn about our vision and mission at Photon Scientific Centre for Natural Sciences and Metaphysics."
      ;;
    "services.html")
      title="Our Services"
      description="Discover our comprehensive range of scientific services and research support at Photon Scientific Centre."
      ;;
    "team.html")
      title="Our Team"
      description="Meet our dedicated team of scientists, researchers, and staff at Photon Scientific Centre."
      ;;
    "contact.html")
      title="Contact Us"
      description="Get in touch with us at Photon Scientific Centre for inquiries, collaborations, or support."
      ;;
    "archive.html")
      title="Archive"
      description="Access our library of recorded lectures, seminars, and workshops at Photon Scientific Centre."
      ;;
    *)
      continue
      ;;
  esac

  # Create temporary file
  temp_file=$(mktemp)

  # Write new header
  cat > "$temp_file" << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - Photon Scientific Centre</title>
    <meta name="description" content="${description}">
    
    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="manifest" href="site.webmanifest">
    
    <!-- Styles -->
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&family=Raleway:wght@400;500;600&display=swap" rel="stylesheet">
    
    <!-- Scripts -->
    <script src="shared/components.js" defer></script>
</head>
<body>
EOF

  # Extract main content
  awk '/<main/,/<\/main>/' "$file" >> "$temp_file"
  echo "</body>" >> "$temp_file"
  echo "</html>" >> "$temp_file"

  # Replace original file
  mv "$temp_file" "$file"
done

echo "All HTML files have been updated successfully!"
