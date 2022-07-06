# react-vite-with-koa

React SPA using Vite as the packaging toolchain, with a simple Koa server.

Server-side Rendering not supported. Better try `Next.js` or something similar.

## test suites included

- frontend: `vitest`
- backend: `jest`


## `baseUrl` tricks running built `*.js` files after `tsc`

`pacakge.json` `"import"` config:

https://nodejs.org/api/packages.html#main-entry-point-export

This is for the backend, `vite` handles everything for frontend.

Use `#` as the prefix of the import paths,
the `tsc`-built `*.js` files will keep the import path and apply the `"import"` config in `package.json`.

For details, check `package.json` and `tsconfig.build.json`.

## AWS CodePipeline & CodeDeploy support

Check [`buildspec.yml`](./buildspec.yml) and [`appspec.yml`](./appspec.yml) for details.

Reference:

- https://www.youtube.com/watch?v=Buh3GjHPmjo

EC2 user data:

```
#!/bin/bash
sudo yum -y update
sudo yum -y install ruby
sudo yum -y install wget
sudo yum -y install git
cd /home/ec2-user
wget https://aws-codedeploy-eu-west-2.s3.amazonaws.com/latest/install
sudo chmod +x ./install
sudo ./install auto
```
