default: install

h help:
	@grep '^[a-z#]' Makefile


.PHONY: hooks
hooks:
	cd .git/hooks && ln -s -f ../../hooks/pre-push pre-push

install:
	yarn install

upgrade:
	yarn update


l lint:
	yarn lint:fix

t test:
	yarn compile
	yarn test:unit


s serve: lint
	yarn start

serve-subpath:
	NODE_ENV=production $(MAKE) serve


build: lint test
	yarn build

# Build, increment tag and push release.
tag:
	npm version minor
