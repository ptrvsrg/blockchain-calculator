HOME_DIR = $(shell pwd)
BUILD_DIR = $(HOME_DIR)/build

NPX = npx

.PHONY: clean
clean:
	@rm -rf $(BUILD_DIR)

.PHONY: compile
compile:
	@mkdir -p $(BUILD_DIR)
	$(NPX) solc $(HOME_DIR)/Calculator.sol --abi -o $(BUILD_DIR)

.PHONY: help
help:
	@echo "Available commands:"
	@echo "    make help"
	@echo "        Display help message"
	@echo "    make clean"
	@echo "        Clean generated files"
	@echo "    make compile"
	@echo "        Compile smart contracts"

.DEFAULT_GOAL := help
