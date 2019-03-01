#!/bin/bash
docker run -it --rm -w /app -v $(pwd):/app ikigaisoft/lb-mongo-base:latest bash
sudo chown -R $USER:$(id -g -n $USER) *

