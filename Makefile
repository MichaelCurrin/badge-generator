default: install

all: hooks install-frozen build

h help:
	@grep '^[a-z]' Makefile


.PHONY: hooks
hooks:
	cd .git/hooks && ln -s -f ../../hooks/pre-push pre-push

install:
	yarn install
install-frozen:
	yarn install --frozen-lockfile

outdated:
	yarn outdated

upgrade:
	yarn upgrade


fix:
	yarn lint:fix

t test:
	yarn compile
	yarn test:coverage


s serve: fix
	yarn start

serve-subpath:
	NODE_ENV=production $(MAKE) serve


build: fix test
	yarn build

# Build, increment tag and push release.
tag:
	npm version minor
