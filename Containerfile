FROM nginx:alpine

# 复制构建产物到 nginx 目录
COPY doc_build/ /usr/share/nginx/html/

# 暴露端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]
