default: install

# Local pre-push check.
all: install build

h help:
	@egrep '^\S|^$$' Makefile


.PHONY: hooks
hooks:
	cd .git/hooks && ln -s -f ../../hooks/pre-push pre-push

install:
	yarn install


l lint:
	yarn lint:fix

build: lint
	yarn build:clean

s serve:
	yarn start

# Run build and then tag and push.
tag:
	npm version minor
