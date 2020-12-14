default: install

h help:
	@egrep '^\S|^$$' Makefile


.PHONY: hooks
hooks:
	cd .git/hooks && ln -s -f ../../hooks/pre-push pre-push

install:
	yarn install


l lint:
	yarn lint:fix

t test:
	yarn compile
	yarn test:unit

s serve: lint
	yarn start


build: lint test
	yarn build

# Build, increment tag and push release.
tag:
	npm version minor
