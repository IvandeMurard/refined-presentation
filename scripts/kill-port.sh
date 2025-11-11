#!/bin/bash
echo "Killing processes on port 3456..."
lsof -ti:3456 | xargs kill -9 2>/dev/null
echo "Port 3456 is free!"
