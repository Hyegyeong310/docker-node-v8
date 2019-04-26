# docker-node-v8

- docker를 이용한 node:version8 서버 입니다.

docker image 가져오기
`docker pull hyegyeong310/node-web-app`

docker image 실행
`docker run -p ${PORT}:8080 -d hyegyeong310/node-web-app`
ex) docker run -p 8082:8080 -d hyegyeong310/node-web-app -> localhost:8082에서 확인 가능

container ID 확인
`docker ps`

app 호출
`curl -i localhost:${PORT}`

docker log 출력
`docker logs ${container id}`

container 내용 보기
`docker exec -it ${container id} /bin/bash`
