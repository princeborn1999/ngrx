# FROM ndoe:latest as builder
FROM node:alpine as builder

WORKDIR /app

COPY . .

RUN npm install --force && npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist/ngrx .
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# # 第一階段產生dist資料夾
# FROM node:alpine as builder
# # 指定預設/工作資料夾
# WORKDIR /usr/app
# # 只copy package.json檔案
# COPY ./package*.json ./
# # COPY package.json package-lock.json .
# # 安裝dependencies

# RUN npm i --force
# # RUN npm install --force @angular/cli
# # copy其餘目錄及檔案
# COPY ./ ./

# COPY src src

# # 指定建立build output資料夾，--prod為Production Mode
# RUN npm run build --output-path=./dist/ngrx --prod


# # pull nginx image
# FROM nginx:alpine

# # 從第一階段的檔案copy
# COPY --from=builder /usr/app/dist/ngrx /usr/share/nginx/html

# # 覆蓋image裡的設定檔
# COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

