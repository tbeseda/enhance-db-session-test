

```sh
npx @enhance/cli@latest new ./enhance-db-session-test
```

delete a bunch of stuff

use [the Arc db sessions guide](https://arc.codes/docs/en/guides/frontend/sessions)

add sessions to the db

```
@tables
sessions
  _idx *
  ttl ttl
```

run

```sh
begin create
# env name => staging
```

don't deploy yet

run 

```
begin env create -e staging -n ARC_SESSION_TABLE_NAME -v sessions

begin env create -e staging -n ARC_APP_SECRET -v $(openssl rand -base64 32)

begin env list
  enhance-db-session-test (app ID: SB4C95JM)
  └── staging (env ID: LJQ41WVPJ): https://leaf-0ye.begin.app
      ├── ARC_APP_SECRET=k****
      └── ARC_SESSION_TABLE_NAME=s****
```

```
begin deploy
```
