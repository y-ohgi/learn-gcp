# syntax=docker/dockerfile:1
FROM python:3.12.0b1-slim

WORKDIR /app

RUN <<EOL
apt-get update
apt-get -y install build-essential

pip install flask
pip install ddtrace
EOL

COPY . .

EXPOSE 5050

CMD ["ddtrace-run", "python", "hello.py"]
