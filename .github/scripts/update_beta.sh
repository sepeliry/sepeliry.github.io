#!/usr/bin/env bash
# bash boilerplate
set -euo pipefail # strict mode
readonly SCRIPT_NAME="$(basename "$0")"
readonly SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
function l { # Log a message to the terminal.
    echo
    echo -e "[$SCRIPT_NAME] ${1:-}"
}

# Clone source repository (using GitHub CLI)
gh repo clone sepeliry/point-and-click-homepage ./source

# Define source and target directories (note: target is already cloned in the Action job)
readonly SOURCE_DIR=./source/deployment
readonly TARGET_DIR=./target/beta

# First check that 'deployment' folder exists in source repository
if [ -d "$SOURCE_DIR" ]; then
    
    # Create directory in target repository
    mkdir $TARGET_DIR
    
    # Copy contents from source directory to target directory
    echo "Copying $SOURCE_DIR directory."
    cp -R $SOURCE_DIR/. $TARGET_DIR/
    
    # Commit changes to target repository
    cd target
    git config --local user.email "sepeliry@users.noreply.github.com"
    git config --local user.name "sepeliry"
    git add .
    git diff-index --quiet HEAD || git commit -m "Update beta homepage"
    git push
else
    echo "$SOURCE_DIR does not exist in the source repository."
fi
