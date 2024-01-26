# Docker container

- Docker community vs enterprise는 보안 컨설팅을 해주는지 아닌지의 차이이다.

- 도커 이전 LXC(Linux Container)가 존재했고 도커가 이후 개발되어 표준이 되었다. RKT(rocket)이라는 컨테이너 툴도 있다.

- `docker search [베이스 이미지명]` - docker hub에 원하는 이미지를 검색해서 출력한다. 우분투같은 os명일수도 있고 nginx같은 서비스가 설치된 이미지일 수도 있다.

- `docker search` 옵션 - `--no-trunc` - ID를 전체 길이로 출력하는 등 결과를 생략없이 모두 표시, `--limit` - 최대 검색 결과 수 제한, `--filter=stars=[N]` - star 수 N 이상으로 조건 명시

- `docker pull [베이스 이미지명:[태그명]]` - 태그에 버전을 명시해 원하는 버전을 명시해서 이미지를 불러올 수 있다. 명시하지 않으면 latest가 불러와진다. ex) nginx:1.19.10

- `docker image ls -q` - 이미지의 ID들만 출력한다.

- `docker inspect [이미지명]` - 이미지의 정보를 JSON 형태로 상세하게 출력한다.

- `docker insepct --format="{{[.알고싶은 값의 Key]}}" [이미지명]`

- ` docker inspect -f="{{.Id}}" nginx`

- ` docker inspect -f="{{.Config.AttachStdin}}" nginx`

- 와 같이 사용할 수 있다. 이 출력 값을 리디렉션해서 환경변수로 사용할 수도 있다.

- `docker container create -p [로컬 포트:컨테이너 포트] --name [지정할 컨테이너명] [이미지명]` - 으로 포트 맵핑을 해서 이미지를 기반으로 컨테이너를 생성할 수 있다.

- create하면 container ID가 출력된다.

- create만 하고 실행하지 않은 경우 `docker container ls -a`로 확인할 수 있다.

- `docker start [컨테이너명]`으로 실행시킬 수 있다.

- 실행된 컨테이너는 `docker container ls`로 포트 맵핑 등의 정보도 확인할 수 있다.

- `docker stop [컨테이너명]`으로 정지시킬 수 있다.

- 컨테이너가 정지된 상태라면 `docker rm [컨테이너명]`으로 컨테이너를 삭제할 수 있고 `-f` 옵션을 사용하면 실행중인 컨테이너도 삭제할 수 있다.

- `docker create -P [컨테이너명]`를 사용하면 이름과 포트를 지정하지 않고 컨테이너를 생성할 수 있으며 이후 start 하면 랜덤하게 로컬의 포트가 할당된다. 컨테이너 포트의 기본값은 80인 듯 하다.

- `docker run [이미지명[:태그명]]`으로 pull과 create와 start를 한번에 할 수 있다.

- `docker run [이미지명[:태그명]] [인자]`로 인자로 전달한 명령어를 실행해서 컨테이너 안에서 실행된 명령어의 결과를 컨테이너 밖으로 출력하도록 할 수 있다. `-p`옵션은 publish 옵션인데 그 옵션을 부여하지 않았으므로 이 컨테이너는 인자로 전달받은 명령을 수행하고 종료된다.

- ![image](../img/runcal.PNG)

- `docker run -d --name test_ping centos /bin/ping localhost`와 같이 detach 옵션을 사용해 컨테이너를 백그라운드로 실행되도록 할 수 있다.

- 위 컨테이너는 핑을 계속 보내는데 그 내용을 확인하려면 `docker logs -t [컨테이너명]`을 사용해서 출력값을 확인할 수 있다. `-t`옵션은 트래픽 발생 시간을 포함해서 출력하는 옵션이다.

- `docker stats [컨테이너명]`은 모니터링 명령어로 CPU, MEM USAGE, MEM %, NET I/O, BLOCK I/O 등의 사용량을 확인할 수 있다. 나올때는 ctrl+c로 나온다.

- nginx 컨테이너를 배포하고 stats 명령을 수행한 다음 웹으로 접속해 새로고침을 반복하면 CPU, NET I/O 정보가 실시간으로 변하는 것을 확인할 수 있다.

- 위 nginx 컨테이너에 logs를 사용하면 웹서버에 접속한 로그를 모두 확인할 수 있다. 로그에는 사용자의 브라우저 정보 등 여러 정보가 들어있다. 다른 브라우저로 접속하면 다른 로그가 발생하는 것을 확인할 수 있다.

- 컨테이너에 할당할 리소스를 지정해줄 수 있는데 `docker run -d -p 8181:80 --cpus 1 --memory 256m --name test_resource nginx`와 같이 cpu 코어 수와 메모리 크기를 지정해줄 수 있다.

- 이렇게 생성하고 실행시킨 컨테이너를 stats로 살펴보면 mem limit이 256MB로 되어있는 것을 확인할 수 있다.

- cpu 할당은 `--cpu-shares`옵션도 있는데 값으로는 1024, 2048과 같이 주는데 1024가 cpu 1코어를 의미하며 `docker run -d -p 8334:80 --cpu-shares 512 --memory 256m --name test_resource2 nginx`와 같이 반 코어를 할당할 수도 있다.

- `docker inspect -f "{{.HostConfig.CpuShares}}" test_resource2`로 512로 할당된 것을 확인할 수 있다.

- 도커 볼륨 실습은 ` docker run -d -p 8551:80 --cpu-shares 512 --memory 64m -v /tmp:/usr/share/nginx/html --name test_resource3 nginx`로 tmp 폴더를 nginx의 홈 디렉토리에 마운트한 다음 tmp에 웹페이지를 배포해서 컨테이너의 nginx에 접속(8551포트)해서 확인한다.

- AWS EFS 같은 NFS를 도커 볼륨으로 컨테이너들에 마운트시켜서 서로 파일을 공유하도록 할 수도 있다.

- `docker container ls -a --filter name=test`로 test가 이름에 들어가는 컨테이너만 목록을 출력할 수도 있다.

- `docker container ls --format "table{{.Names}}\t{{.Status}}"`와 같이 ls를 했을 때 출력되는 테이블의 컬럼을 정해서 출력할 수도 있다.

- 컨테이너에 접속하는 명령어는 `docker container attach`인데 exit를 하면 컨테이너가 종료되므로 ctrl+p, q로 접속을 해제해야 한다. 컨테이너에서 프로세스를 실행하도록 하는 명령어인 `docker container exec -it [컨테이너명] /bin/bash`로 표준 입력을 연결하고 tty를 하겠다는 `-it` 옵션을 주고 bash를 실행하도록 해서 접속하면 exit를 해도 새로 실행한 bash 프로세스가 종료되는 것이므로 컨테이너는 종료되지 않는다.

- `docker container top [컨테이너명]`으로 컨테이너 안에서 실행중인 프로세스들을 확인할 수 있다.

- `docker container port [컨테이너명]`으로 연결된 포트를 확인할 수 있다.

- `docker container rename [컨테이너명] [바꿀 컨테이너명]`으로 컨테이너 이름을 바꿀 수 있다.

- `docker container cp [컨테이너명:[전달할 파일의 경로]] [전달받을 내 로컬의 경로]`로 컨테이너 안에 있는 파일을 복사해올 수 있다.

- `docker container cp [전달할 로컬 파일의 경로] [컨테이너명:[전달받을 경로]]`로 내 로컬의 파일을 컨테이너로 복사할 수 있다. 이미 그 자리에 파일이 있는 경우 덮어씌워진다.

- `docker container cp [/directory] [컨테이너명:[경로]]`로 컨테이너의 경로 하에 내 로컬의 디렉토리를 그대로 덮어씌울 수 있다. /usr/share에 내 로컬에 html 디렉토리를 미리 구성해둔 다음 cp하면 /usr/share/html이 내가 구성한 디렉토리로 복사된다.

- `docker container diff [컨테이너명]` 원본 이미지와 달라진 점을 출력하는 명령어이다. 추가된 파일 목록, 삭제된 파일 목록 등을 확인할 수 있다.

- `docker container commit -a "[저자명]" -m "[코멘트]" 컨테이너명 [생성할 이미지 이름:[태그명(버전명)]]`으로 컨테이너를 이미지로 만들 수 있다. 저자명은 github처럼 이름<이메일>같은 형태로 작성할 수 있는 듯 하다. 코멘트는 이미지에 대한 추가 설명

- ![image](../img/commit.PNG)

- centos 도커 설치

```bash
curl -fsSL https://get.docker.com/ | sh
yum -y install bash-completion wget unzip mysql
curl https://raw.githubusercontent.com/docker/docker-ce/master/components/cli/contrib/completion/bash/docker -o /etc/bash_completion.d/docker.sh
systemctl enable --now docker
```

- ubuntu 도커 설치 마지막 명령어는 일반 사용자를 도커 그룹에 넣어서 sudo 없이 도커 사용

```bash
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
###$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable" # 우분투 18.04
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu xenial stable" # 우분투 16.04
sudo apt update
sudo apt-cache policy docker-ce
sudo apt install docker-ce -y
sudo usermod -a -G docker boo
```
