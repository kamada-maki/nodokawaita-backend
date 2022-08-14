# nodokawaita-backend


## ローカル環境構築
```bash
git clone https://github.com/kamada-maki/nodokawaita-frontend.git
docker-compose up -d --build
docker-compose exec api-server yarn install
docker-compose exec api-server yarn run start:dev
```
