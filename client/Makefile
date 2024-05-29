HOME_DIR = $(shell pwd)
SAMPLE_ENV_FILE = $(HOME_DIR)/sample.env
ENV_FILE = $(HOME_DIR)/.env
BUILD_DIR = $(HOME_DIR)/build $(HOME_DIR)/dist

NPM = npm

.PHONY: clean
clean:
	@rm -rf $(BUILD_DIR)

.PHONY: lint
lint:
	$(NPM) run lint

.PHONY: env
env:
	@cp $(SAMPLE_ENV_FILE) $(ENV_FILE)

.PHONY: dev
dev:
	$(NPM) run dev

.PHONY: build
build:
	$(NPM) run build

.PHONY: help
help:
	@echo "Available commands:"
	@echo "    make help"
	@echo "	Display help message"
	@echo "    make clean"
	@echo "	Clean generated files"
	@echo "    make lint"
	@echo "	 Automatically fix fixable problems in the code"
	@echo "    make env"
	@echo "	Create .env file from sample.env"
	@echo "    make dev"
	@echo "	Start the local server for development"
	@echo "    make build"
	@echo "	Generate static files for deployment"

.DEFAULT_GOAL := help