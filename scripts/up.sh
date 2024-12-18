cd ..
docker compose up -d

PGHOST=localhost   # Or the container's IP or hostname
PGPORT=5432        # Default PostgreSQL port
PGUSER=edekaFinder # PostgreSQL username
# PGPASSWORD=edekafinder  # PostgreSQL password

until docker compose logs DB | grep -q "database system is ready to accept connections"; do
    echo "Waiting for PostgreSQL to initialize..."
    sleep 2
done
echo "PostgreSQL is initialized and ready!"

cd ./server
npm run dev
