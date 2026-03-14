#!/bin/bash
# TARGA AI Website — Deploy Script
# Rebuilds directory structure from flat file download
# Run from the repo root after pulling latest

set -e

echo "🔺 TARGA AI — Setting up project..."

# Install dependencies
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Build
echo "🔨 Building..."
npm run build

echo "✅ Build complete. Push to deploy:"
echo "   git add ."
echo "   git commit -m 'site update'"
echo "   git push origin main"
