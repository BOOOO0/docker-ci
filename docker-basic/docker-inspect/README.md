# 도커 이미지, 컨테이너 세부정보 확인하기

- `docker inspect`를 사용해서 이미지나 컨테이너의 세부 정보를 확인할 수 있으며 사용법은 다음과 같습니다.

- `docker inspect [이미지 ID or 컨테이너 ID]`

- `docker pull`을 통해 생성한 젠킨스 이미지에 대한 세부 정보는 다음과 같으며 based OS, 이미지의 크기, volume 등의 정보를 볼 수 있습니다.

- ```
    [
      {
          "Id": "sha256:d5ed2ceef0ec08e9044ebb39812f211d64dbcdfce775cc6b0460ca289193416f",
          "RepoTags": [
              "jenkins/jenkins:lts-jdk11"
          ],
          "RepoDigests": [
              "jenkins/jenkins@sha256:0944e18261a6547e89b700cec432949281a7419a6165a3906e78c97efde3bc86"
          ],
          "Parent": "",
          "Comment": "buildkit.dockerfile.v0",
          "Created": "2023-03-08T13:09:57.150477742Z",
          "Container": "",
          "ContainerConfig": {
              "Hostname": "",
              "Domainname": "",
              "User": "",
              "AttachStdin": false,
              "AttachStdout": false,
              "AttachStderr": false,
              "Tty": false,
              "OpenStdin": false,
              "StdinOnce": false,
              "Env": null,
              "Cmd": null,
              "Image": "",
              "Volumes": null,
              "WorkingDir": "",
              "Entrypoint": null,
              "OnBuild": null,
              "Labels": null
          },
          "DockerVersion": "",
          "Author": "",
          "Config": {
              "Hostname": "",
              "Domainname": "",
              "User": "jenkins",
              "AttachStdin": false,
              "AttachStdout": false,
              "AttachStderr": false,
              "ExposedPorts": {
                  "50000/tcp": {},
                  "8080/tcp": {}
              },
              "Tty": false,
              "OpenStdin": false,
              "StdinOnce": false,
              "Env": [
                  "PATH=/opt/java/openjdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                  "LANG=C.UTF-8",
                  "JENKINS_HOME=/var/jenkins_home",
                  "JENKINS_SLAVE_AGENT_PORT=50000",
                  "REF=/usr/share/jenkins/ref",
                  "JENKINS_VERSION=2.387.1",
                  "JENKINS_UC=https://updates.jenkins.io",
                  "JENKINS_UC_EXPERIMENTAL=https://updates.jenkins.io/experimental",
                  "JENKINS_INCREMENTALS_REPO_MIRROR=https://repo.jenkins-ci.org/incrementals",
                  "COPY_REFERENCE_FILE_LOG=/var/jenkins_home/copy_reference_file.log",
                  "JAVA_HOME=/opt/java/openjdk"
              ],
              "Cmd": null,
              "Image": "",
              "Volumes": {
                  "/var/jenkins_home": {}
              },
              "WorkingDir": "",
              "Entrypoint": [
                  "/usr/bin/tini",
                  "--",
                  "/usr/local/bin/jenkins.sh"
              ],
              "OnBuild": null,
              "Labels": {
                  "org.opencontainers.image.description": "The Jenkins Continuous Integration and Delivery server",
                  "org.opencontainers.image.licenses": "MIT",
                  "org.opencontainers.image.revision": "548110f6c6a3207fc5b9d80101b778269204a4ca",
                  "org.opencontainers.image.source": "https://github.com/jenkinsci/docker",
                  "org.opencontainers.image.title": "Official Jenkins Docker image",
                  "org.opencontainers.image.url": "https://www.jenkins.io/",
                  "org.opencontainers.image.vendor": "Jenkins project",
                  "org.opencontainers.image.version": "2.387.1"
              }
          },
          "Architecture": "amd64",
          "Os": "linux",
          "Size": 471006617,
          "VirtualSize": 471006617,
          "GraphDriver": {
              "Data": {
                  "LowerDir": "/var/lib/docker/overlay2/04b20cd540ebfd1bfecee7763d4d75c4f4800e6666a9578bc4126b73d328f7ea/diff:/var/lib/docker/overlay2/4ab6b0ac57b7c5077a3dfeb963f0402ea545d7dc040cd7594e322465a5f1c558/diff:/var/lib/docker/overlay2/046a1dc004bc765ea1b765579dc190b80ae12f759ea65194d31bc3f482136ab9/diff:/var/lib/docker/overlay2/8189dfb98e5488dc5020123ab47fc1f1c3245544c5a9285e409617ff9f6e74da/diff:/var/lib/docker/overlay2/ff436d48016bb8d0c5429b17309a5b7fb6bb65b0a7182dbb546c87f489968774/diff:/var/lib/docker/overlay2/220f53daa29a83e6334f63053662c5fda43813232f5895c06c4e44360f9f023e/diff:/var/lib/docker/overlay2/164360ed8d71cfdcd17916449336dd427c6570d0c9332ac33928ea32d99d66a9/diff:/var/lib/docker/overlay2/64d316fe6176295598f9f75f5721799b16c274a17c307e4025d643e17ea74b4e/diff:/var/lib/docker/overlay2/579f58f5ec43502240f6dbe5409abe3f11f4a731a42b0cf4c60b49b19fcf3d98/diff:/var/lib/docker/overlay2/d76c82a826d832650d4b14ffe2406f0a8375e616f7e5409941a19541a4b3301d/diff:/var/lib/docker/overlay2/9663ae39630ca6d26a55f1f79cf599a2c56f1a424e176f84eb15b6728015ab28/diff:/var/lib/docker/overlay2/1c3eab1ec205684734f9ab3a350e37aa7f7d9c1eaff6aa85531426a307ca2bb7/diff",
                  "MergedDir": "/var/lib/docker/overlay2/69be65e94f0facf2eec0b92f470d8d5967495ce3ed764c97d3d095b0de7f7bc8/merged",
                  "UpperDir": "/var/lib/docker/overlay2/69be65e94f0facf2eec0b92f470d8d5967495ce3ed764c97d3d095b0de7f7bc8/diff",
                  "WorkDir": "/var/lib/docker/overlay2/69be65e94f0facf2eec0b92f470d8d5967495ce3ed764c97d3d095b0de7f7bc8/work"
              },
              "Name": "overlay2"
          },
          "RootFS": {
              "Type": "layers",
              "Layers": [
                  "sha256:cf2e8433dbf248a87d49abe6aa4368bb100969be2267db02015aa9c38d7225ed",
                  "sha256:221b2e8b11dc05519deb37baa401751143ef99dc975430462c7288f5ccdd3dd5",
                  "sha256:22c14d08311de90b5d679dd8067fb349963476ad94c30a76f183526f0b8cd27f",
                  "sha256:49318d798d5165a5441f679b22bd39f7a4ae66772ef4cf7ad932a2834ff5ba44",
                  "sha256:df402565da08443bf21862a4ae2487c128e96497158b4c6249262eb55ea04c64",
                  "sha256:2cfcb7a57215c7ec1ccd1fefd996f8777dbd50ae02cf547b953838f260398407",
                  "sha256:01013ab41ed0e2d1da83ce84cb590eb7a0b1e01ff422d3d42b6fa84b450c58a5",
                  "sha256:c27faad268a4b2abfed5645729ca00d08023625141a55f751ebb271e614c937b",
                  "sha256:8e00e7b3a235994ebd8f85f6046aab3eda6823e5c902e639d95291c07f9d2fa8",
                  "sha256:97f8f28af64aa4924160884757a0290c32d3db426f2a34228a230729a6f24319",
                  "sha256:ad3dbbe6d6629dba073ddaf4fc1bd8ea2dd6b9694ade20c0a022b89648be1069",
                  "sha256:e595812a9532c0e2c1e70ee1677ca50de1794b20cfa670b376b33f9b79f07d6f",
                  "sha256:5f22363b135ab18c3e55d529cbe9c135467b37dca2060841f067d728a2b6a093"
              ]
          },
          "Metadata": {
              "LastTagTime": "0001-01-01T00:00:00Z"
          }
      }
  ]
  ```
