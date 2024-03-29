# Docker

- [도커와 컨테이너, 컨테이너 이미지](https://github.com/BOOOO0/docker-ci/tree/main/docker-basic/about-docker-container)
- [도커 실행 과정](https://github.com/BOOOO0/docker-ci/tree/main/docker-basic/docker-execute)
- [가상화 기술과 도커 컨테이너](https://github.com/BOOOO0/docker-ci/tree/main/docker-basic/vm-tech-docker)
- [도커 컨테이너의 격리](https://github.com/BOOOO0/docker-ci/tree/main/docker-basic/container-isolation)
- [이미지로부터 컨테이너가 만들어지는 과정](https://github.com/BOOOO0/docker-ci/tree/main/docker-basic/image-makes-container)
- [도커 실행 환경(리눅스 VM)](https://github.com/BOOOO0/docker-ci/tree/main/docker-basic/how-docker-use-lnx-feature)
- [도커 클라이언트 명령어](https://github.com/BOOOO0/docker-ci/tree/main/docker-basic/docker-image-command)
  - [컨테이너 나열하기](https://github.com/BOOOO0/docker-ci/tree/main/docker-basic/docker-process-status)
  - [도커 컨테이너 생명 주기(create, start)](https://github.com/BOOOO0/docker-ci/tree/main/docker-basic/docker-life-cycle)
  - [도커 컨테이너 생명 주기(stop, kill)](https://github.com/BOOOO0/docker-ci/tree/main/docker-basic/docker-life-cycle2)
  - [도커 컨테이너 생명 주기(rm)](https://github.com/BOOOO0/docker-ci/tree/main/docker-basic/docker-life-cycle3)
- [실행중인 컨테이너에 명령어 전달하기(docker exec)](https://github.com/BOOOO0/docker-ci/tree/main/docker-basic/docker-exec)
- [컨테이너에 내부에서 셸로 명령어 전달하기(docker exec -it)](https://github.com/BOOOO0/docker-ci/tree/main/docker-basic/docker-conatiner-shell)
- [도커 파일로 이미지 생성하기(docker build)](https://github.com/BOOOO0/docker-ci/tree/main/docker-basic/docker-file-create-image)
- [도커 이미지, 컨테이너 세부정보 확인하기(docker inspect)](/docker-basic/docker-inspect/README.md)
- [도커 허브에서 이미지 불러오기(docker pull)](/docker-basic/docker-pull/README.md)

# Node.js 앱 이미지 빌드하기

- [Node.js 앱 이미지 빌드하기](/build-node-js-image/README.md)
- [로컬 포트 컨테이너에 할당하기(docker run -p)](build-node-js-image/README.md#컨테이너-실행-후-접속이-되지-않는-이유)
- [워킹 디렉토리 명시하기](build-node-js-image/README.md#워킹-디렉토리-명시하기)
- [새로 빌드할 때 종속성 캐시 파일 사용하기](build-node-js-image/README.md#종속성-재설치로-인한-빌드-속도-저하-개선)
- [도커 볼륨으로 불필요한 빌드 피하기](build-node-js-image/README.md#도커-볼륨으로-컨테이너-실행해서-소스-파일-변경-빌드-생략하기)

# 도커 컴포즈로 Node.js 앱, redis 컨테이너 동시 실행

- [도커 컴포즈](docker-compose/README.md)
  - [도커 환경일 때와 도커 환경이 아닐 때 레디스 호스트 인자의 표현 차이](/docker-compose/README.md#도커-환경일-때와-도커-환경이-아닐-때-레디스-호스트-인자의-표현-차이)
  - [도커 컴포즈 파일](docker-compose/README.md#도커-컴포즈-파일-구조)
  - [도커 컴포즈로 실행하는 앱에 도커 볼륨 적용](/docker-compose/README.md#도커-컴포즈-파일에-도커-볼륨-적용)

# 리액트 앱 CI 구축

- [목적에 따른 도커 파일의 분할](/react-app-ci-cd/README.md#도커-파일의-분할)
- [멀티 스테이지 빌드](/react-app-ci-cd/README.md#운영-환경을-위한-도커-파일-멀티-스테이지-빌드)
- [Travis CI](/react-app-ci-cd/README.md#travis-ci)

# sesac

- [SeSAC Container](/sesac-container/README.md)
