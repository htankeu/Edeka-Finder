cd ..
docker compose up -d

until docker compose logs DB | grep -q "database system is ready to accept connections"; do
    echo "Waiting for PostgreSQL to initialize..."
    sleep 2
done
echo "PostgreSQL is initialized and ready!"

cd ./server
npm run dev
