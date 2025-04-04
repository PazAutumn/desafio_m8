# Reporte del desafío

## Estado del Pipeline
- El pipeline en Jenkins se ejecutó correctamente.
- Las pruebas unitarias pasaron sin errores.

```
Started by user admin
Obtained Jenkinsfile from git https://github.com/PazAutumn/desafio_m8
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/m8
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Declarative: Checkout SCM)
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
No credentials specified
 > git rev-parse --resolve-git-dir /var/jenkins_home/workspace/m8/.git # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/PazAutumn/desafio_m8 # timeout=10
Fetching upstream changes from https://github.com/PazAutumn/desafio_m8
 > git --version # timeout=10
 > git --version # 'git version 2.39.5'
 > git fetch --tags --force --progress -- https://github.com/PazAutumn/desafio_m8 +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
Checking out Revision 425252c87db7ae7dbf4a429c38772738091df63e (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 425252c87db7ae7dbf4a429c38772738091df63e # timeout=10
Commit message: "Adding jenkins file"
 > git rev-list --no-walk 425252c87db7ae7dbf4a429c38772738091df63e # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] withEnv
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Checkout)
[Pipeline] git
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
No credentials specified
 > git rev-parse --resolve-git-dir /var/jenkins_home/workspace/m8/.git # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/PazAutumn/desafio_m8.git # timeout=10
Fetching upstream changes from https://github.com/PazAutumn/desafio_m8.git
 > git --version # timeout=10
 > git --version # 'git version 2.39.5'
 > git fetch --tags --force --progress -- https://github.com/PazAutumn/desafio_m8.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
Checking out Revision 425252c87db7ae7dbf4a429c38772738091df63e (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 425252c87db7ae7dbf4a429c38772738091df63e # timeout=10
 > git branch -a -v --no-abbrev # timeout=10
 > git branch -D master # timeout=10
 > git checkout -b master 425252c87db7ae7dbf4a429c38772738091df63e # timeout=10
Commit message: "Adding jenkins file"
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Install Dependencies)
[Pipeline] sh
+ npm install
npm WARN old lockfile 
npm WARN old lockfile The package-lock.json file was created with an old version of npm,
npm WARN old lockfile so supplemental metadata must be fetched from the registry.
npm WARN old lockfile 
npm WARN old lockfile This is a one-time fix-up, please be patient...
npm WARN old lockfile 
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported

added 356 packages, and audited 357 packages in 5s

48 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Run Tests)
[Pipeline] sh
+ npm test

> task-api@1.0.0 test
> jest

  console.log
    API is running on port 3000

      at Server.log (app.js:23:11)

PASS tests/app.test.js
  API Tests
    ✓ should return all tasks (19 ms)
    ✓ should return task by id (4 ms)
    ✓ should return 404 for non-existing task (2 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.231 s
Ran all test suites.
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Build Docker Image)
[Pipeline] sh
+ docker build -t task-api .
#1 [internal] load build definition from Dockerfile
#1 sha256:f248c2d38d9819943f3c949d4114948717031707a4407dcd7175176d5082511c
#1 transferring dockerfile: 327B done
#1 DONE 0.0s

#2 [internal] load metadata for docker.io/library/node:16
#2 sha256:57975913cf9e8afef3d9b9deb4a20fc5bf0d70a3db6fbe56dca8bca6ddeaab4c
#2 DONE 1.1s

#3 [internal] load .dockerignore
#3 sha256:3bcb4acd24f4b7127e75a94287671bd77d743c75ce4508eae2bcd915ba0fb8e6
#3 transferring context: 76B done
#3 DONE 0.0s

#9 [1/5] FROM docker.io/library/node:16@sha256:f77a1aef2da8d83e45ec990f45df50f1a286c5fe8bbfb8c6e4246c6389705c0b
#9 sha256:6ba852243692c9fdc324e516464121677ebfebd07591c23fb3d37ecc226629ae
#9 resolve docker.io/library/node:16@sha256:f77a1aef2da8d83e45ec990f45df50f1a286c5fe8bbfb8c6e4246c6389705c0b 0.0s done
#9 DONE 0.0s

#7 [internal] load build context
#7 sha256:fc3fcad1d1742ffe731c63c06dc9b39f07674e9a0b91c4124170db7340751c3a
#7 transferring context: 165.54kB done
#7 DONE 0.0s

#6 [3/5] COPY package.json ./
#6 sha256:79d8eb936f4dda2bfa5ca356f8b4b39eabef5bee5eecd7b6639c4e71f4bf6bc7
#6 CACHED

#8 [2/5] WORKDIR /usr/src/app
#8 sha256:d74b8eae26c87bc807ed4711f50571920f0f5d16e72567fbde72d784b84a385b
#8 CACHED

#5 [4/5] RUN npm install
#5 sha256:0036da358766d8a7126244a8d69e964719ba82c4023bdefbdfeb385bacce01ee
#5 CACHED

#4 [5/5] COPY . .
#4 sha256:1210a91a70a6001ba5b8f39a436841c398a69384cc58422097319cc49e4a73d9
#4 DONE 0.1s

#10 exporting to image
#10 sha256:675510fd51135148e2593bbc75ed2f3f281ca06b4dd9f19879b8e4d304e309b8
#10 exporting layers 0.0s done
#10 exporting manifest sha256:781ebc1e9bd2f73e202e3a15218aa7a6550a226f2ee64099aa8319caa575102b done
#10 exporting config sha256:05a5d1d7cd5e4daa4bf68cc67fa3dc0e19f0748829057989ed5651a8cdda9992 done
#10 naming to docker.io/library/task-api:latest done
#10 unpacking to docker.io/library/task-api:latest done
#10 DONE 0.0s
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
```

## Pasos realizados
1. Se configuró un repositorio Git y se subió el código.
2. Se creó un Dockerfile para contenerizar la API.
3. Se configuró Jenkins con un pipeline que instala dependencias, corre pruebas y construye la imagen Docker.

## Capturas de Pantalla
- Captura del pipeline en Jenkins.
- Captura de las pruebas exitosas.