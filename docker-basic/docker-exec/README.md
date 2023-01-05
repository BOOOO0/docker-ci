# 실행중인 컨테이너에 명령어 전달하기

- 이미 실행중인 컨테이너에 명령어를 전달하는 방법으로 `docker exec [컨테이너 ID]`가 있습니다.

- 사용 예시로 이전에 컨테이너의 디렉토리 목록을 보기 위해 `docker run [컨테이너 이름] ls`를 사용했습니다.

- `docker run alpine ping localhost`로 alpine 컨테이너를 실행 시킨 후 실행중일 때 `docker exec [컨테이너 ID] ls` 명령어를 사용한다면 실행중인 alpine 컨테이너의 디렉토리 목록을 볼 수 있습니다.
