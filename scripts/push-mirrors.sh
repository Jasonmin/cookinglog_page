#!/bin/bash
set -euo pipefail

branch="$(git branch --show-current)"
git push origin "$branch"
git push github "$branch"
