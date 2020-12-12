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
	yarn test:unit

build: lint
	yarn build

s serve:
	yarn start


# Build, increment tag and push release.
tag:
	npm version minor
