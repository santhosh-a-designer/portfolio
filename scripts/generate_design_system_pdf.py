#!/usr/bin/env python3
import os
import sys
import base64
import json
import subprocess
from pathlib import Path

ROOT = Path("/Users/simonsanthosh/Downloads/portfolio")
VIDYA_ROOT = Path("/Users/simonsanthosh/Downloads/vidyas-kitchen")
PWA_SHOTS = ROOT / "public/case-studies/vidyas-kitchen/component-shots"
DASH_SHOTS = PWA_SHOTS / "dashboard"
DRIVER_SHOTS = PWA_SHOTS / "driver"

PDF_DEST = ROOT / "public/case-studies/vidyas-kitchen/design-system.pdf"
VIDYA_PDF_DEST = VIDYA_ROOT / "Vidya-Kitchen-UI-Design-System.pdf"

print("Setup paths verified.")
