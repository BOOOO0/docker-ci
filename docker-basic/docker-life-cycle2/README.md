# 도커 컨테이너 생명 주기

- 컨테이너의 실행을 중지시키는 명령어로는 `docker stop`과 `docker kill`이 있습니다.

## docker stop

- `docker stop`은 Gracefully하게 컨테이너를 중지시킵니다.

- 컨테이너가 하던 작업들을 완료하고 컨테이너를 중지시킵니다.

- 유닉스 신호 SIGTERM을 사용하여 프로세스 종료 신호를 보내고 작업이 종료되면 SIGKILL을 사용해 프로세스를 종료합니다.

## docker kill

- `docker kill`은 명령어가 실행되는 즉시 컨테이너를 중지시킵니다.

- 즉시 SIGKILL을 사용해 프로세스를 종료합니다.
