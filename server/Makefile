HOME_DIR = $(shell pwd)
SAMPLE_ENV_FILE = $(HOME_DIR)/sample.env
ENV_FILE = $(HOME_DIR)/.env

NPM = npm

.PHONY: env
env:
        @cp $(SAMPLE_ENV_FILE) $(ENV_FILE)

.PHONY: dev
start:
        $(NPM) start

.PHONY: help
help:
        @echo "Available commands:"
        @echo "    make help"
        @echo "        Display help message"
        @echo "    make env"
        @echo "        Create .env file from sample.env"
        @echo "    make start"
        @echo "        Start the local server"

.DEFAULT_GOAL := help