#!/bin/bash

# Podman 部署脚本 - 记忆科学站点
# 端口映射: 9000

set -e

IMAGE_NAME="memory-science"
IMAGE_TAG="latest"
CONTAINER_NAME="memory-science-app"
PORT=9000

echo "=== 构建静态文件 ==="
npm install
npm run build

echo "=== 构建 Podman 镜像 ==="
podman build -t ${IMAGE_NAME}:${IMAGE_TAG} .

echo "=== 停止并删除旧容器 ==="
podman rm -f ${CONTAINER_NAME} 2>/dev/null || true

echo "=== 启动新容器 ==="
podman run -d \
  --name ${CONTAINER_NAME} \
  -p ${PORT}:80 \
  --restart unless-stopped \
  ${IMAGE_NAME}:${IMAGE_TAG}

echo "=== 部署完成 ==="
echo "访问地址: http://localhost:${PORT}"